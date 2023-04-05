import { html } from '../../node_modules/lit-html/lit-html.js';

export const cardPreview = (card) => html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src=${card.image}>
    </article>
    <h2 class="name">${card.name}</h2>
    <h3 class="breed">${card.breed}</h3>
    <div class="action">
        <a class="btn" href="/details/${card._id}">Details</a>
    </div>
</div>`;