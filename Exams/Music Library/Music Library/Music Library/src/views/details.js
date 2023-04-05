import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteCard, getCardById } from '../data/services.js';
import { getUserData } from '../util.js';


const detailsTemplate = (card, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${card.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">

            <p><strong>Band:</strong><span id="details-singer">${card.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${card.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${card.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${card.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${card.sales}</span></p>
        </div>
        ${cardControlTemplate(card, isOwner, onDelete)}
        <div id="likes">Likes: <span id="likes-count">0</span></div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="" id="like-btn">Like</a>
        </div>
    </div>
</section>`

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
}

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