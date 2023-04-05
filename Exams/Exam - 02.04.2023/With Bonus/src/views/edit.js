import { html } from '../../node_modules/lit-html/lit-html.js';
import { editCard, getCardById } from '../data/services.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (card, onSubmit) => html`
<section id="edit">
    <div class="form">
    <h2>Edit Fruit</h2>
    <form @submit=${onSubmit} class="edit-form">
        <input
        type="text"
        name="name"
        .value="${card.name}"
        id="name"
        placeholder="Fruit Name"
        />
        <input
        type="text"
        name="imageUrl"
        .value="${card.imageUrl}"
        id="Fruit-image"
        placeholder="Fruit Image URL"
        />
        <textarea
        id="fruit-description"
        name="description"
        .value="${card.description}"
        placeholder="Description"
        rows="10"
        cols="50"
        ></textarea>
        <textarea
        id="fruit-nutrition"
        name="nutrition"
        .value="${card.nutrition}"
        placeholder="Nutrition"
        rows="10"
        cols="50"
        ></textarea>
        <button type="submit">post</button>
    </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    ctx.render(editTemplate(card, createSubmitHandler(onSubmit)));
    async function onSubmit(data) {
        if(Object.values(data).some(c => c === '')) {
            return alert('All fields are required!');
        }
        await editCard(cardId, data);
        ctx.page.redirect(`/details/${cardId}`);
    }
}