import { html } from '../../node_modules/lit-html/lit-html.js';
import { createPart } from '../data/autoparts.js';
import { createSubmitHandler, validatePartData } from '../util.js';

const createTemplate = (onSubmit) => html`
<h1>Create New Part</h1>
<form @submit=${onSubmit}>
    <label>Label: <input type="text" name="label" ?disabled=${!onSubmit}></label>
    <label>Price: <input type="number" name="price" step="0.01" ?disabled=${!onSubmit}></label>
    <label>In Stock: <input type="number" name="qty" ?disabled=${!onSubmit}></label>
    <button ?disabled=${!onSubmit}>Publish</button>
</form>`;

export function createPage(ctx) {
    update(true);

    function update(includeHandler) {
        const handler = includeHandler ? createSubmitHandler(onSubmit) : undefined;
        ctx.render(createTemplate(handler));

    }
    async function onSubmit(partData) {
        update(false);

        try {
            partData = validatePartData(partData);
            
            const result = await createPart(partData);

            const id = result._id;
            ctx.page.redirect('/catalog/' + id);
        } catch (err) {
            if(!err.status) {
                return alert(err.message);
            }
        } finally {
            update(true);
        }
    }
}