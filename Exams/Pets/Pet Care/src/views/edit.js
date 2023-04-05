import { html } from '../../node_modules/lit-html/lit-html.js';
import { getCardById, editCard } from '../data/services.js';
import { createSubmitHandler } from '../util.js';

const editTeamplate = (card, onSubmit) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="editForm">
        <img src=${card.image}>
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value="${card.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value="${card.breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value="${card.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value="${card.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value="${card.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>;`

export async function editPage(ctx) {
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    ctx.render(editTeamplate(card, createSubmitHandler(onSubmit)));
    async function onSubmit(data) {
        if(Object.values(data).some(x => x === "")) {
            return alert('Are fields are requried!');
        }
        await editCard(cardId, data);
        ctx.page.redirect(`/details/${cardId}`)
    }
}