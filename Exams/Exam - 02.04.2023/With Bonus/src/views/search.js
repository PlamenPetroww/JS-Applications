import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchAlbum } from '../data/services.js';

const searchTemplate = (isClicked, handler, albums, hasUser) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button @click=${handler} class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
${
    isClicked ? 
    albums.length > 0 ? 
        html`
    <div class="search-result">
        ${albums.map(album => createCard(album, hasUser))}
    </div>
    ` :  html`<p class="no-result">No result.</p>`
    
    : null
}
</div>
</section>`;

const createCard = (album, hasUser) => html`
<div class="fruit">
  <img src=${album.imageUrl} alt="example1" />
    <h3 class="title">${album.name}</h3>
    <p class="description">${album.description}</p><a class="details-btn" href="/details/${album._id}">More Info</a>
</div>
${hasUser ? html`
    ` : null
}`;


export async function showSearch(ctx) {
    ctx.render(searchTemplate(false, onSearch));
    async function onSearch(e) {
        e.preventDefault()
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;
        if(!query) {
            return alert('enter text');
        }
        const albums = await searchAlbum(query);
        ctx.render(searchTemplate(true, onSearch, albums, !!ctx.user))
    }
}