import { html } from '../../node_modules/lit-html/lit-html.js';

export const songPreview = (song) => html`
<div class="card-box">
    <img src=${song.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${song.name}</p>
            <p class="artist">Artist: ${song.artist}</p>
            <p class="genre">Genre: ${song.genre}</p>
            <p class="price">Price: ${song.price}</p>
            <p class="date">Release Date: ${song.releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/details/${song._id}" id="details">Details</a>
        </div>
    </div>
</div>`;