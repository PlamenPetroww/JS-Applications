import page from '../node_modules/page/page.mjs';
import { registerPage } from './data/register.js';
import { addRender } from './middlewares/render.js';
import { aboutPage } from './views/about.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { getUserData } from './util.js';
import { addSession } from './middlewares/session.js';
import { logout } from './data/auth.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { addQuery } from './middlewares/query.js';

page(addSession);
page(addQuery)
page(addRender);

page('/index.html', '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/catalog/:id/edit', editPage);
page('/create', createPage);
page('/about', aboutPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);

page.start();

function logoutAction() {
    logout();
    page.redirect('/');
}




