import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCards } from '../data/services.js';

const myCardTemplate = (cards) => html`
<h2>Fruits</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${cards.length > 0 ? cards.map(myCard) : html`
    <h2>No fruit info yet.</h2>`}
</section>`;

const myCard = (card) => html`
<div class="fruit">
<img src=${card.imageUrl} alt="example1" />
<h3 class="title">${card.name}</h3>
<p class="description">${card.description}</p>
<a class="details-btn" href="/details/${card._id}">More Info</a>
</div>`;

export async function catalogPage(ctx) {
    const cards = await getAllCards();
    ctx.render(myCardTemplate(cards))
}