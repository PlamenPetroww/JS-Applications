
const url = 'http://localhost:3030/jsonstore/phonebook';
const inputPerson = document.getElementById('person');
const inputPhone = document.getElementById('phone');
let input = document.getElementById('phonebook');
let container = '';


function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', loadData);
    document.getElementById('btnCreate').addEventListener('click', createData);

}

async function loadData() {

    input.replaceChildren(); // or input.innerHTML = ''; both are correct

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(x => {
        const {person, phone, _id} = x;
        let li = document.createElement('li');
        li.setAttribute('id', _id)
        li.textContent = `${x.person}: ${x.phone}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deletePhoneNumber)
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn)
        input.appendChild(li);
    })

    
    
    
}

async function deletePhoneNumber(ev) {
    
    const id = ev.target.parentElement.id;
    ev.target.parentElement.remove();

    const deleteResponse = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
    
}

async function request(url, options) {

    //step 3

    if (options) {
        options = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options)
        }
    }

    const response = await fetch(url, options);
    return response.json();

}

async function createData() {

    const [person, phone] = [document.getElementById('person'), document.getElementById('phone')];

    if (person.value !== '' || phone.value !== '') {
        await request(url, { person: person.value, phone: phone.value });
        person.value = '';
        phone.value = '';
    }

}

attachEvents();