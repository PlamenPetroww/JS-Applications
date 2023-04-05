import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyCard } from '../data/services.js';
import { getUserData } from '../util.js';
import { cardPreview } from './common.js';

export const myCardTemplate = (cards) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    ${cards.length === 0 ? html `
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>` : html`
        <div class="animals-dashboard">
            ${cards.map(cardPreview)}
        </div>`}
</section>`;

export async function myCardsPage(ctx) {
    const userData = getUserData();
    const cards = await getMyCard(userData._id);
    ctx.render(myCardTemplate(cards));
}