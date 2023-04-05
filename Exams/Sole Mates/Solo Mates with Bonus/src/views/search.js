import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchCard } from '../data/services.js';


const searchTemplate = (isClicked, handler, cards, hasUser) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf">
        <input id="search-input" type="text" name="search" placeholder="Search here..." required />
        <button @click=${handler} type="submit">Search</button>
    </form>
    <h3>Results:</h3>
    ${
        isClicked ? createResultTemp(cards, hasUser) : null}
</section>`

const createCard = (card, hasUser) => html`
<ul class="card-wrapper">
    <li class="card">
        <img src=${card.imageUrl} alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${card.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${card.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
        ${hasUser ? 
            html`
            <a class="details-btn" href="/details/${card._id}">Details</a>` : null
        }
    </li>
</ul>`

const createResultTemp = (cards, hasUser) => {
    return html`
        ${ cards.length > 0 ? 
            html`
            <div id="search-container">
            ${cards.map(card => createCard(card, hasUser))}
        </div>` : 
         html`<h2>There are no results found.</h2>`
        }
        `
}


export async function search(ctx) {
    ctx.render(searchTemplate(false, onSearch));
    async function onSearch(e) {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;

        if (!query) {
            return alert('The field is empty');
        }
        const cards = await searchCard(query);
        ctx.render(searchTemplate(true, onSearch, cards, !!ctx.user))
    }

}