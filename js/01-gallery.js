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
      data-source="${item.original}"
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
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryRef.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
// console.log(galleryItems);
