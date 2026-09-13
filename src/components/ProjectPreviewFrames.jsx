import ProjectImageCarousel from './ProjectImageCarousel'

export function PhonePreview({ project, modal = false }) {
  return (
    <div className={`phone-shell ${modal ? 'phone-shell-modal' : ''}`}>
      <div className="phone-speaker" aria-hidden />
      <div className="phone-screen">
        <ProjectImageCarousel
          images={project.images}
          title={project.title}
          video={project.video}
        />
      </div>
    </div>
  )
}

export function BrowserPreview({ project, modal = false }) {
  const variant = project.category === 'Automation' ? 'workflow' : 'website'

  return (
    <div className={`browser-shell ${modal ? 'browser-shell-modal' : ''}`}>
      <div className="browser-toolbar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="browser-screen">
        <ProjectImageCarousel
          images={project.images}
          title={project.title}
          video={project.video}
          variant={variant}
        />
      </div>
    </div>
  )
}
