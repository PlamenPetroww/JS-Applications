import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteCard, getCardById } from '../data/services.js';
import { getUserData } from '../util.js';

const detailsTemplate = (card, isOwner, onDelete) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>
    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${card.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${card.title}</h2>
                <p class="post-description">Description: ${card.description}</p>
                <p class="post-address">Address: ${card.address}</p>
                <p class="post-number">Phone number: ${card.number}</p>
                <p class="donate-Item">Donate Materials: ${card.Item}</p>
                    ${cardControlTemplate(card, isOwner, onDelete)}
                <!-- <a href="#" class="donate-btn btn">Donate</a> -->
            </div>
        </div>
    </div>
</section>`;

const cardControlTemplate = (card, isOwner, onDelete) => {
    if(isOwner) {
        return html`
        <div class="btns">
                    <a href="/edit/${card._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
                </div>`
    } else {
        null;
    }
}

export async function detailsPage(ctx) {
    debugger
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    const userId = getUserData()?._id;
    const isOwner = card._ownerId === userId;
    ctx.render(detailsTemplate(card, isOwner,onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${card.title}?`);
        if (confirmed) {
            await deleteCard(cardId);
            ctx.page.redirect('/')
        }
    }
}