import { html } from '../../node_modules/lit-html/lit-html.js';
import { createCard } from '../data/services.js';
import { createSubmitHandler } from '../util.js';



const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({
        brand,
        model,
        imageUrl,
        release,
        designer,
        value
    }) {
        if ([
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        ].some(c => c === '')) {
            return alert('All field are required!');
        }
        await createCard({
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        });
        ctx.page.redirect('/')
    }
}