import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCards } from '../data/services.js';

const catalogTemplate = (cards) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    ${cards.length ?  cards.map(myCard) : html`
    <h1 class="title no-posts-title">No posts yet!</h1>`};
</section>`;

const myCard = (card) => html`
<div class="all-posts">
<div class="post">
    <h2 class="post-title">${card.title}</h2>
    <img class="post-image" src=${card.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${card._id}" class="details-btn btn">Details</a>
    </div>
</div>
</div>`;

export async function catalogPage(ctx) {
    const cards = await getAllCards();
    ctx.render(catalogTemplate(cards))
}