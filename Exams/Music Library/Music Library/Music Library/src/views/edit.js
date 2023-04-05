import { html } from '../../node_modules/lit-html/lit-html.js';
import { editCard, getCardById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";


const editTemplate = (card, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" .value="${card.singer}" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" .value="${card.album}" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" .value="${card.imageUrl}" placeholder="Image url" />
            <input type="text" name="release" id="album-release" .value="${card.release}" placeholder="Release date" />
            <input type="text" name="label" id="album-label" .value="${card.label}" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" .value="${card.sales}" placeholder="Sales" />
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
            return alert('All fields required!');
        }
        await editCard(cardId, data)
        ctx.page.redirect(`/details/${cardId}`)
    }
}