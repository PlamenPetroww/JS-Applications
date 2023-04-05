import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCards } from '../data/services.js';

const myCardTemplate = (cards) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${cards.length > 0 ? cards.map(myCard) : html`
        <h2>There are no albums added yet.</h2>`}
    </ul>
</section>`;

const myCard = (card) => html`
<li class="card">
    <img src=${card.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${card.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${card.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${card.sales}</span></p>
    <a class="details-btn" href="/details/${card._id}">Details</a>
</li>`;

export async function catalogPage(ctx) {
    const cards = await getAllCards();
    ctx.render(myCardTemplate(cards))
}