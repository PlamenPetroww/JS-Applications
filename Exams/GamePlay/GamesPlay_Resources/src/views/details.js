import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteCard, getCardById } from '../data/services.js';
import { getUserData } from '../util.js';

const detailsTemplate = (card, isOwner, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src=${card.imageUrl} />
            <h1>${card.title}</h1>
            <span class="levels">${card.maxLevel}</span>
            <p class="type">${card.category}</p>
        </div>
        <p class="text">${card.summary}</p>
        ${cardControlTemplate(card, isOwner, onDelete)}
        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                <li class="comment">
                    <p>Content: I rate this one quite highly.</p>
                </li>
                <li class="comment">
                    <p>Content: The best game.</p>
                </li>
            </ul>
            <!-- Display paragraph: If there are no games in the database -->
            <p class="no-comment">No comments.</p>
        </div>
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>

</section>`;

const cardControlTemplate = (card, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <div class="buttons">
            <a href="/edit/${card._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`;
    } else {
        null;
    }
};

export async function detailsPage(ctx) {
    console.log('catch')
    const cardId = ctx.params.id;
    const card = await getCardById(cardId);
    const userId = getUserData()?._id;
    const isOwner = card._ownerId === userId;
    ctx.render(detailsTemplate(card, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${card.title}?`);
        if (confirmed) {
            await deleteCard(cardId);
            ctx.page.redirect('/')
        }
    }
}