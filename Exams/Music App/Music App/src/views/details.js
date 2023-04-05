import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteSong, getSongById } from '../data/services.js';
import { getUserData } from '../util.js';

const detailsTemplate = (song, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${song.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">
                <h1>Name: ${song.name}</h1>
                <h3>Artist: ${song.artist}</h3>
                <h4>Genre: ${song.genre}</h4>
                <h4>Price: ${song.price}</h4>
                <h4>Date: ${song.releaseDate}</h4>
                <p>${song.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            <div class="actionBtn">
            ${songControlTemplate(song, isOwner, onDelete)}
            </div>
        </div>
    </div>
</section>`;

const songControlTemplate = (song, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a href="/edit/${song._id}" class="edit">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {
    const songId = ctx.params.id;
    const song = await getSongById(songId);
    const userId = getUserData()?._id;
    const isOwner = song._ownerId === userId;
    ctx.render(detailsTemplate(song, isOwner, onDelete))

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${song.name}?`);
        if (confirmed) {
            await deleteSong(songId);
            ctx.page.redirect('/catalog');
        }
    }
}