import { html } from '../../node_modules/lit-html/lit-html.js';
import { editCard, getCardById } from '../data/services.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (card, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value="${card.title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value="${card.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value="${card.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value="${card.address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value="${card.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
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
        ctx.page.redirect(`/details/${cardId}`)
    }
}