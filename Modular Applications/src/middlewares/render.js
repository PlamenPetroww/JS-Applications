
import { render } from '../../node_modules/lit-html/lit-html.js'
import { layoutTemplate } from '../views/layout.js';

const main = document.body;


export function addRender(ctx, next) {
    ctx.render = renderView.bind(null, ctx.user);

    next();
}

function renderView(user, content) {
    render(layoutTemplate(user, content), main);
}