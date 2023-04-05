
import { createSubmitHandler } from '../util.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const commentsTemplate = () => html`
<div class="details-comments">
    <h2>Comments:</h2>
    <ul>
        <li class="comment">
            <p>I rate bla bla</p>
        </li>
        <li class="comment">
            <p>The best Game !</p>
        </li>
    </ul>
</div>`;

