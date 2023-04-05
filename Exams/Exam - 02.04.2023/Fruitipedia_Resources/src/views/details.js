import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteCard, getCardById } from '../data/services.js';
import { getUserData } from '../util.js';

const detailsTemplate = (card, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
    <img id="details-img" src=${card.imageUrl} alt="example1" />
    <p id="details-title">${card.name}</p>
    <div id="info-wrapper">
        <div id="details-description">
        <p>${card.description}</p>
            <p id="nutrition">Nutrition</p>
            <p id = "details-nutrition">${card.nutrition}</p>
            ${cardControlTemplate(card, isOwner, onDelete)}
        </div>  
    </div>
</div>
</section>`;

const cardControlTemplate = (card, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <div id="action-buttons">
    <a href="/edit/${card._id}" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>`;
    } else {
        null;
    }
}

export async function detailsPage(ctx) {
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    const userId = getUserData()?._id;
    const isOwner = card._ownerId === userId;
    ctx.render(detailsTemplate(card, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete ?');
        if (confirmed) {
            await deleteCard(cardId);
            ctx.page.redirect('/')
        }
    }
}