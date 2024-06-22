// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGalleryMarkup = (images) => {
  return images
    .map(
      (image) => `
    <li class="gallery-item">
      <a class="gallery-link" href=${image.original}>
        <img
          class="gallery-image"
          src=${image.preview}
          alt="${image.description}"
        />
      </a>
    </li>
  `
    )
    .join("");
};

gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

// Initialize SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
