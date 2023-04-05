import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { search } from './views/search.js';
//import { searchCard, searchElement } from './data/services.js';

const root = document.getElementById('wrapper');

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/search', search);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', search);
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