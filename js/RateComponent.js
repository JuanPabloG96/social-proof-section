import { useFetch } from "./useFetch.js";

const ratingSection = document.querySelector('.rating-section');
const DATA = 'json/data.json';

const ratingTemplate = (id, stars, category) => {
  let starImages = '';
  for (let i = 0; i < stars; i++) {
    starImages += '<img src="images/icon-star.svg" alt="star icon">';
  }

  return `<div class="rating-container rating-container-${id}" key="key-${id}">
  <div class="star-container">${starImages}</div>
  <p class="rating-description">Rated ${stars} Stars in ${category}</p>
  </div>`
}

(async () => {
  let data = await useFetch(DATA);
  let ratingHtml = ''

  data?.rating.map((info) => {
    ratingHtml += ratingTemplate(info.id, info.stars, info.category)
  });

  ratingSection.innerHTML = ratingHtml;
})();