import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteCard, getCardById } from '../data/services.js';
import { getUserData } from '../util.js';


const detailsTemplate = (card, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${card.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${card.name}</h1>
                <h3>Breed: ${card.breed}</h3>
                <h4>Age: ${card.age}</h4>
                <h4>Weight: ${card.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            <div class="actionBtn">
                ${cardControlTemplate(card, isOwner, onDelete)}
                <a href="#" class="donate">Donate</a>
            </div>
        </div>
    </div>
</section>`;

const cardControlTemplate = (card, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a href="/edit/${card._id}" class="edit">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
    } else {
        return null;
    }
}

export async function detailsCard(ctx) {
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    const userId = getUserData()?._id;
    const isOwner = card._ownerId === userId;
    ctx.render(detailsTemplate(card, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure to want delete ${card.name}?`);
        if(confirmed) {
            await deleteCard(cardId);
            ctx.page.redirect('/');
        }
    }
}

