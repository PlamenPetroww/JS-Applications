import { html } from '../../node_modules/lit-html/lit-html.js';
import { getById, updatePart } from '../data/autoparts.js';
import { createSubmitHandler, validatePartData } from '../util.js';

const editTemplate = (part, onSubmit) => html `
<h1>Edit Part</h1>
<form @submit=${onSubmit}>
    <label>Label: <input type="text" name="label" .value=${part.label || ''} ?disabled=${!onSubmit}></label>
    <label>Price: <input type="number" name="price" .value=${part.price || ''} step="0.01" ?disabled=${!onSubmit}></label>
    <label>In Stock: <input type="number" name="qty" .value=${part.qty || ''} ?disabled=${!onSubmit}></label>
    <button ?disabled=${!onSubmit}>Save Changes</button>
</form>`;

export async function editPage(ctx) {
    let part = {};
    update(false);
    const id = ctx.params.id;
    part = await getById(id);

    update(true);

    function update(includeHandler) {
        const handler = includeHandler ? createSubmitHandler(onSubmit) : undefined;
        ctx.render(editTemplate(part, handler));
    }

    async function onSubmit(partData) {
        update(false);

        try {
            partData = validatePartData(partData);
            await updatePart(id, partData);

            ctx.page.redirect('/catalog/' + id);
        } catch (err) { {
            if(err.status == undefined) {
                return alert(err.message);
            }
        }
        } finally {
            update(true);
        }
    }
}