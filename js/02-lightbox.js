import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createGalleryMarkup(gallery) {
  return gallery
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
     
      alt="${item.description}"
      
    />
  </a>
</div>`
    )
    .join('');
}
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

// console.log(galleryItems);
