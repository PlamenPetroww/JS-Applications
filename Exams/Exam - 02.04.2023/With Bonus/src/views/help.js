import {html} from '../../node_modules/lit-html/lit-html.js';
import { deleteFruit, getFruitsById } from '../api/data.js';
import { getUserData } from '../util.js';
 
 
 
 
const detailsTemplate = (fruit, hasUser, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fruit.imageUrl}" />
            <p id="details-title">${fruit.title}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>
                ${fruit.description}
                  </p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">
                      ${fruit.nutrition}
                        </p>
                        ${checkForOwner(fruit, onDelete, hasUser)}
</div>
 

</div>
</div>
</section>
`;

const checkForOwner = async (fruit, onDelete, hasUser) => {
    if(hasUser){
        return html`
        <div id="action-buttons">
            <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>
        `
    } else {
         null;
    }
}
 
export async function detailsView(ctx) {
    const id = ctx.params.id;
    const fruit = await getFruitsById(id);
    const userId = getUserData()?._id;
    const hasUser = card._ownerId === userId;
 

    ctx.render(detailsTemplate(fruit, hasUser, onDelete), document.querySelector('main'));
    
    async function onDelete(e, ctx) {
        e.preventDefault();
        const id = ctx.params.id;
        const confirmed = confirm('Are you sure you want to delete this shoe?');
        if (confirmed) {
          await deleteFruit(id);
          ctx.page.redirect('/');
        }
      }
}


 

 
 
