let token = null;

document.getElementById('register-form').addEventListener('submit', logIn);

async function logIn(e) {

    e.preventDefault();

    const formData = new FormData(e.target);

    const { email, password, repass } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        return alert('All fields are required');
    }

    if (password != repass) {
        return alert("Password must match!")
    }

    const url = "http://localhost:3030/users/register";

    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    try {
        const response = await fetch(url, options);

        if(response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const userData = await response.json();
        token = userData.accesToken

    } catch(err) {
        alert(err.message)
    }

}

async function loadData()