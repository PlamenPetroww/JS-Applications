import {html} from '../../node_modules/lit-html/lit-html.js';


export const layoutTemplate = (user, content) => html `
<header>
        <nav>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/about">About</a>
            ${user ?  html `
            <a href="/create">Create</a>
            <a href="/logout">Logout</a>
            <p>Welcome back, ${user.email}</p>` : html`
            <a class="guest" href="/login">Login</a>
            <a class="guest" href="/register">Register</a>`}
        </nav>
    </header>

    <main>
        ${content}
    </main>`;