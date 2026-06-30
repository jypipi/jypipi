// Show more rows in the taken courses table
function toggleCourseVisibility (elem) {
  const courses = elem.parentNode.getElementsByClassName('course')
  if (courses == null) {
    return
  }

  for (const course of courses) {
    if (course.classList.contains('hidden-course') || course.classList.contains('toggled-hidden-course')) {
      course.classList.toggle('hidden-course')
      course.classList.add('toggled-hidden-course')
    }
  }

  const buttonsToToggle = elem.parentNode.getElementsByClassName('show-more-btn')
  for (const buttonToToggle of buttonsToToggle) {
    buttonToToggle.classList.toggle('hidden')
  }
}

function initDiplomaLightbox () {
  const lightbox = document.getElementById('diploma-lightbox')
  if (lightbox == null) {
    return
  }

  const lightboxImage = lightbox.querySelector('.diploma-lightbox-image')
  const lightboxCaption = lightbox.querySelector('.diploma-lightbox-caption')
  const closeButton = lightbox.querySelector('.diploma-lightbox-close')

  const closeLightbox = () => {
    lightbox.classList.add('hidden')
    lightboxImage.removeAttribute('src')
    lightboxImage.alt = ''
    if (lightboxCaption != null) {
      lightboxCaption.textContent = ''
    }
    document.body.style.overflow = ''
  }

  document.querySelectorAll('.diploma-zoom').forEach((button) => {
    button.addEventListener('click', () => {
      const largeImage = button.dataset.large
      if (!largeImage) {
        return
      }

      lightboxImage.src = largeImage
      lightboxImage.alt = button.querySelector('img')?.alt || ''
      if (lightboxCaption != null) {
        lightboxCaption.textContent = button.dataset.title || ''
      }
      lightbox.classList.remove('hidden')
      document.body.style.overflow = 'hidden'
      closeButton?.focus()
    })
  })

  closeButton?.addEventListener('click', (event) => {
    event.stopPropagation()
    closeLightbox()
  })

  // Like Moments: click the enlarged image, caption, or backdrop to close
  lightbox.addEventListener('click', closeLightbox)

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox()
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  const els = Array.from(document.getElementsByClassName('btn'))

  els.filter((el) => el != null && (el.id === 'show-more-btn' || el.id === 'show-less-btn')).forEach((el) =>
    el.addEventListener('click', ({ target }) =>
      toggleCourseVisibility(target)))

  initDiplomaLightbox()
})
