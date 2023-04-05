import { html } from '../../node_modules/lit-html/lit-html.js';
import { editCard, getCardById } from '../data/services.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (card, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value="${card.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value="${card.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${card.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value="${card.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" .value="${card.summary}" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
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