const views = [...document.querySelectorAll('.view-section')]

function hideAll() {
    //create function to not hide the pages
    views.forEach(v => v.style.display = 'none');
}

//create function to hide the page
export function shwoView(section) {
    hideAll();
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';
    
    return element;
}

export function updateNav() {
    const user = JSON.parse(localStorage.getItem('user'));
    //const msgContainer = document.getElementById('welcome-msg')
   // msgContainer.textContent = `Welcome, ${user.email}`;
    if(user) {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none')
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
        //msgContainer = '';
    }
 }