import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createGalleryMarkup(gallery) {
  return gallery
    .map(
      item => `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
     
      alt="${item.description}"
      
    />
  </a>
`
    )
    .join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(galleryItems);
