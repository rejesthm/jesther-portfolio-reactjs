import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'
import { describe, expect, it } from 'vitest'
import { projects } from './projects'
import { getProjectCategories } from '../utils/projectMetadata'

const imageRoot = join(cwd(), 'public/assets/images')

function getImageProjectFolders() {
  return readdirSync(imageRoot)
    .filter((name) => name !== 'profile')
    .filter((name) => statSync(join(imageRoot, name)).isDirectory())
    .sort()
}

function getProjectImageFolders() {
  return [
    ...new Set(
      projects.flatMap((project) =>
        project.images.map((image) => image.split('/').filter(Boolean).at(-2)),
      ),
    ),
  ].sort()
}

describe('projects data', () => {
  it('includes the live-site BallsApp project data and downloaded video asset path', () => {
    const ballsApp = projects.find((project) => project.title === 'BallsApp')

    expect(ballsApp).toEqual(
      expect.objectContaining({
        tech: ['Flutter', 'TensorFlow', 'YOLOv8', 'Python', 'Supabase'],
        video: expect.objectContaining({
          src: '/assets/images/BallsApp/ballsapp-demo.mp4',
        }),
      }),
    )
    expect(ballsApp.images).toHaveLength(5)
  })

  it('includes every project image folder in the portfolio data', () => {
    expect(getProjectImageFolders()).toEqual(getImageProjectFolders())
  })

  it('includes the requested website portfolio projects', () => {
    const websiteTitles = projects
      .filter((project) => getProjectCategories(project).includes('Website'))
      .map((project) => project.title)

    expect(websiteTitles).toEqual([
      'Cardan Marketing (2nd Gen Design)',
      'Cardan Marketing (1st Gen Design)',
      'ESOGT',
      'FurMinder',
      'JavaCraft',
    ])
  })

  it('includes automation projects with role descriptions', () => {
    const automationProjects = projects.filter((project) =>
      getProjectCategories(project).includes('Automation'),
    )

    expect(automationProjects.map((project) => project.title)).toEqual([
      'Website Lead Follow-up Automation',
      'Clinic Lead Nurture Automation',
      'Checkout Payment Lifecycle Automation',
    ])
    automationProjects.forEach((project) => {
      expect(project.roles.length).toBeGreaterThanOrEqual(4)
      expect(project.description).toMatch(/workflow|automation/i)
    })
  })

  it('keeps project entries complete enough for portfolio cards and modals', () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy()
      expect(project.description.length).toBeGreaterThan(80)
      expect(project.tech.length).toBeGreaterThan(0)
      expect(project.images.length > 0 || project.screenshotsPending).toBe(true)
    })
  })
})
