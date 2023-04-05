import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { myCardsPage } from './views/catalog.js';
import { createCardView } from './views/create.js';
import { detailsCard } from './views/details.js';
import { editPage } from './views/edit.js';

const main = document.body;

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/catalog', myCardsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/create', createCardView);
page('/details/:id', detailsCard);
page('/edit/:id', editPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

//TODO Inject dependecies

function renderView (content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), main)
}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/')
}