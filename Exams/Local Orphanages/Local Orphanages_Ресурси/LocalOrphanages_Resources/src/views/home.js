import { html } from '../../node_modules/lit-html/lit-html.js';

// TODO Replace wit actual view
const homeTemplate = () => html`
<h1>Home Page</h1>
<p>Welcome to out Site</p>`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}