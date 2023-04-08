import {del} from '../api.js';
import page from '../node_modules/page/page.mjs';

export function onClick(e) {
    const choice = confirm(`Are you sure, that you want to delete this furniture?`);
    if(choice) {
        del(`/data/catalog/${e.target.id}`);
        page.redirect('/');
    }
}