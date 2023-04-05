import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { mySongPage } from './views/catalog.js';
import { createSongPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

//TODO chang render root depending on project HTML structure
const root = document.getElementById('box');

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/catalog', mySongPage);
page('/create', createSongPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/register', registerPage);
page('/logout', logoutAction);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

//TODO Inject dependecies

function renderView (content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root)
}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/')
}