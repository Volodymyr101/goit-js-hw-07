import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener('click', onClick);


// разметка
const markup = galleryItems.map((item) => `
  <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);


function onClick (evt) {
    const currentTarget = evt.target;

    if (currentTarget.classList.contains('gallery__image')){
        evt.preventDefault();

        const instance = basicLightbox.create(`
        <img src="${currentTarget.dataset.source}" width="800" height="600">`)
        instance.show();

        // const rrr = document.querySelector(".basicLightbox")
        // console.log(rrr);

        document.addEventListener("keydown", (event) => {
            console.log(event.key);
            if (event.key === "Escape") {
            instance.close(); 
            }
        });
    };
};



