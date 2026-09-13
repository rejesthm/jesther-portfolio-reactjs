import { describe, expect, it } from 'vitest'
import { experiences, profile, stats, tabs } from './profile'

describe('vCard profile content', () => {
  it('preserves the approved identity and tab structure', () => {
    expect(profile.name).toBe('Jesther Jordan Minor')
    expect(profile.role).toBe('AI Fullstack Software Engineer')
    expect(profile.email).toBe('rejesthm@gmail.com')
    expect(profile.avatar).toBe('/assets/images/profile/jesther-jordan-minor.jpg')
    expect(profile.github).toBe('https://github.com/rejesthm')
    expect(profile.linkedin).toBe(
      'https://www.linkedin.com/in/jesther-jordan-minor-73234813a/'
    )

    expect(tabs.map((tab) => tab.id)).toEqual([
      'about',
      'portfolio',
      'experiences',
      'contact',
    ])
  })

  it('keeps the existing portfolio stats intact', () => {
    expect(stats).toEqual([
      expect.objectContaining({ value: 7, suffix: '+', label: 'Years Experience' }),
      expect.objectContaining({ value: 30, suffix: '+', label: 'Projects Built' }),
      expect.objectContaining({ value: 20, suffix: '+', label: 'Technologies Used' }),
      expect.objectContaining({ value: 15, suffix: '+', label: 'Clients & Users' }),
    ])
  })

  it('keeps resume experience ordered from latest to oldest', () => {
    const sortEnds = experiences.map((experience) => experience.sortEnd)

    expect(sortEnds).toEqual([...sortEnds].sort((a, b) => b - a))
    expect(experiences.at(0)).toEqual(expect.objectContaining({ company: 'Cardan Marketing' }))
    expect(experiences.at(-1)).toEqual(expect.objectContaining({ company: 'Segworks' }))
  })
})
