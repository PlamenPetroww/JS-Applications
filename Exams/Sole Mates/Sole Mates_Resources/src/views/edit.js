import { html } from '../../node_modules/lit-html/lit-html.js';
import { editCard, getCardById } from '../data/services.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (card, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" .value="${card.brand}" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" .value="${card.model}" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" .value="${card.imageUrl}" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" .value="${card.release}" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" .value="${card.designer}" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" .value="${card.value}" placeholder="Value" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    ctx.render(editTemplate(card,createSubmitHandler(onSubmit)));
    async function onSubmit(data) {
        if(Object.values(data).some(c => c === '')) {
            return alert('All fields are required!');
        }
        await editCard(cardId, data);
        ctx.page.redirect(`/details/${cardId}`)
    }
}