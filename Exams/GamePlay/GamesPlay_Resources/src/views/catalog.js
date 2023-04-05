import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCards } from '../data/services.js';

const myCardTemplate = (cards) => html`
<section id="catalog-page">
    <h1>All Games</h1>
        ${cards.length > 0 ? cards.map(myCard) : html`
        <h3 class="no-articles">No articles yet</h3>`}
</section>`;

const myCard = (card) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${card.imageUrl}>
        <h6>${card.category}</h6>
        <h2>${card.title}</h2>
        <a class="details-button" href="/details/${card._id}">Details</a>
    </div>
</div>`;

export async function catalogPage(ctx) {
    const cards = await getAllCards();
    ctx.render(myCardTemplate(cards))
}