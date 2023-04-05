import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../data/services.js';
import { getUserData } from '../util.js';

const myBooksTemplate = (books) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${books.length > 0 ? html`
    <div class="my-posts">
        <div class="post">
            <h2 class="post-title">${books.title}</h2>
            <img class="post-image" src=${books.imageUrl}>
            <div class="btn-wrapper">
                <a href="/details/${books._id}" class="details-btn btn">Details</a>
            </div>
        </div>
    </div>` : html`
    <h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

export async function mybooksPage(ctx) {
    debugger
    const userData = getUserData();
    const books = await getMyBooks(userData._id);
    ctx.render(myBooksTemplate(books))
}