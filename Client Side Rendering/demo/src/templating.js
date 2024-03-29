
const templateCash = {}

const pattern = /%%([^%]+)%%/g;

export async function getTemplate(name, data) {
    if(templateCash[name] == undefined) {
        
        const request = await fetch(`/templates/${name}.html`);
        const result = await request.text();
    
        templateCash[name] = result;
    }

    let template  = templateCash[name];

    template = template.replace(pattern, replacer)

    /* template = template.replace(pattern1, data.name)
    template = template.replace(pattern2, data.phone) */


    return template;

    function replacer(match, propName) {
    
        return data[propName];
    }
}
