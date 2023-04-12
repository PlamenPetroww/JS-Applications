/* 

async function solve() {

    const url = 'http://localhost:3030/jsonstore/collections/students';
    const table = document.querySelector('#results tbody');

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(s => {

        const firstName = s.firstName;
        const lastName = s.lastName;
        const facultyNumber = s.facultyNumber;
        const grade = Number(s.grade);

        const tabelRow = document.createElement('tr');

        const firstNameCell = tabelRow.insertCell(0);
        firstNameCell.innerText = firstName;

        const lastNameCell = tabelRow.insertCell(1);
        lastNameCell.innerText = lastName;

        const facultyNumberCell = tabelRow.insertCell(2);
        facultyNumberCell.innerText = facultyNumber;

        const gradeCell = tabelRow.insertCell(3);
        gradeCell.innerText = grade;

        table.appendChild(tabelRow);

    })

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onClickSubmit);

    async function onClickSubmit(ev) {
        //ev.preventDefault()

        const firstNameInput = document.getElementsByName('firstName')[0];
        const lastNameInput = document.getElementsByName('lastName')[0];
        const facultyNumebrInput = document.getElementsByName('facultyNumber')[0];
        const gradeInput = document.getElementsByName('grade')[0];

        // const inputsArray = document.querySelectorAll('.inputs input');

        // Array.from(inputsArray).map(input => {
        //     input.setAttribute('required', '');
        // })


        if (isNaN(gradeInput.value)) {
            return alert('Wrong input data!');
        };

        if (firstNameInput.value !== '' &&
            lastNameInput.value !== '' &&
            facultyNumebrInput.value !== '' &&
            gradeInput.value !== '') {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    facultyNumber: Number(facultyNumebrInput.value),
                    grade: Number(gradeInput.value)
                })
            });

            const tr = document.createElement('tr');

            const firstNameCell = tr.insertCell(0);
            firstNameCell.innerText = firstNameInput.value;

            const lastNameCell = tr.insertCell(1);
            lastNameCell.innerText = lastNameInput.value;

            const facultyNumberCell = tr.insertCell(2);
            facultyNumberCell.innerText = facultyNumebrInput.value;

            const gradeCell = tr.insertCell(3);
            gradeCell.innerText = gradeInput.value;
            table.appendChild(tr);
        }

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumebrInput.value = '';
        gradeInput.value = '';
    }


}

solve() */

window.onload = attachEvents;

const url = 'http://localhost:3030/jsonstore/collections/students';
const tBody = document.querySelector("#results tbody");
const form = document.querySelector('#form');

function attachEvents() {
    form.addEventListener('submit', createStudent);
    getStudents();
}

async function getStudents() {
    let response = await fetch(url);
    let data = await response.json();

    tBody.replaceChildren();
    Object.values(data).forEach(x => {
        let tr = htmlGenerator('tr', '', tBody);
        htmlGenerator('td', `${x.firstName}`, tr);
        htmlGenerator('td', `${x.lastName}`, tr);
        htmlGenerator('td', `${x.facultyNumber}`, tr);
        htmlGenerator('td', `${x.grade}`, tr);
    })
}

async function createStudent(e) {
    e.preventDefault();

    let info = new FormData(e.target);
    let firstName = info.get('firstName');
    let lastName = info.get('lastName');
    let facultyNumber = info.get('facultyNumber');
    let grade = info.get('grade');

    if (!firstName || !lastName || !facultyNumber || !grade) {
        alert('All fields are required!');
    } else {
        let studentData = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }
        await request(url, studentData);
        getStudents();
    }
}

async function request(url, body) {
    if (body) {
        let post = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        let response = await fetch(url, post);
        return await response.json();
    }
}

function htmlGenerator(tag, content, parent) {
    let el = document.createElement(tag);
    el.textContent = content;

    if (parent) {
        parent.appendChild(el);
    }
    return el;
}