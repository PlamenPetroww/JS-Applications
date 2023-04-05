import { html } from '../../node_modules/lit-html/lit-html.js';
import { editBook, getSongById } from '../data/services.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (song, onSubmit) => html`
<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" .value="${song.name}">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value="${song.imgUrl}">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" .value="${song.price}">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value="${song.releaseDate}">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" .value="${song.artist}">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" .value="${song.genre}">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" .value="${song.description}" class="description" rows="10" cols="10"></textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const songId = ctx.params.id;
    const song = await getSongById(songId);
    ctx.render(editTemplate(song, createSubmitHandler(onSubmit)));

    async function onSubmit(data) {
        if(Object.values(data).some(x => x === '')) {
            return alert('All fields are required!');
        }
        await editBook(songId, data);
        ctx.page.redirect(`/details/${songId}`)
    }
}