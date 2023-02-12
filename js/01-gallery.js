import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener('click', onClick);


// разметка

const markup = galleryItems.map(item => makeMarkup (item)).join("");


function makeMarkup ({preview, original, description}) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}


galleryEl.insertAdjacentHTML("beforeend", markup);





function onClick (evt) {
  const currentTarget = evt.target;

  if (currentTarget.classList.contains('gallery__image')){
      evt.preventDefault();

      const instance = basicLightbox.create(`
      <img src="${currentTarget.dataset.source}" width="800" height="600">`, {
        onShow: document.addEventListener("keydown", onEscape),
      });
      instance.show();

      function onEscape (event) {
          if (event.key === "Escape") {
          instance.close(); 
          document.removeEventListener("keydown", onEscape)
          }
      };
  };
};