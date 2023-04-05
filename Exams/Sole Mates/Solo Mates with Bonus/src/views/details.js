import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteCard, getCardById } from '../data/services.js';
import { getUserData } from '../util.js';

const detailsTemplate = (card, isOwner , onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${card.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">

            <p>Brand: <span id="details-brand">${card.brand}</span></p>
            <p>
                Model: <span id="details-model">${card.model}</span>
            </p>
            <p>Release date: <span id="details-release">${card.release}</span></p>
            <p>Designer: <span id="details-designer">${card.designer}</span></p>
            <p>Value: <span id="details-value">${card.value}</span></p>
        </div>
        ${cardControlTemplate(card, isOwner, onDelete)}
        <!--Edit and Delete are only for creator-->

    </div>
</section>`;

const cardControlTemplate = (card, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <div id="action-buttons">
            <a href="/edit/${card._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`
    } else {
        return null;
    }
};

export async function detailsPage(ctx) {
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    const userId = getUserData()?._id;
    const isOwner = card._ownerId === userId;
    ctx.render(detailsTemplate(card, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${card.name}?`);
        if (confirmed) {
            await deleteCard(cardId);
            ctx.page.redirect('/')
        }
    }
}
