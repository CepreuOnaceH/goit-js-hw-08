// Add imports above this line
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from './gallery-items.js';
// Change code below this line
window.addEventListener('load', () => {
  const galleryList = document.querySelector('.gallery');

  const createMarkup = ({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
  };

  const galleryMarkup = galleryItems.map(createMarkup).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
});
