export function getProjectCategories(project) {
  if (project.category) return [project.category]

  const tech = project.tech.join(' ').toLowerCase()
  const categories = new Set()
  if (tech.includes('flutter')) categories.add('Mobile')
  return [...categories]
}

export function getProjectMediaCount(project) {
  return project.images.length + (project.video ? 1 : 0)
}
