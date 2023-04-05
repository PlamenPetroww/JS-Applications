import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMySongs } from '../data/services.js';
import { songPreview } from './common.js';

const mySongTemplate = (songs) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${songs.length === 0 ? html`
    <p>No Albums in Catalog!</p>` : html`
    ${songs.map(songPreview)}`}
</section>`;

export async function mySongPage(ctx) {
    const songs = await getMySongs();
    ctx.render(mySongTemplate(songs));
}