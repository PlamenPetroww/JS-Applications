async function loadRepos() {

    const output = document.getElementById('repos');
    const username = document.getElementById('username').value;

    const url = `https://api.github.com/users/${username}/repos`;


    try {
        const response = await fetch(url)
        if (response.ok == false) {
            console.log('Error encountered:', response.status, response.statusText);
            const error = await response.json();
            throw error;

        }
        const data = await response.json();
        output.replaceChildren()
        for (let entry of data) {
            const li = document.createElement('li');
            li.innerHTML = `<a href ="${entry.html_url}">${entry.full_name}</a>`;
            output.appendChild(li)
        }
    } catch (error) {
        output.innerHTML = `<p>${error.message}</p><p>For more information: <a href="${error.documentation_url}">${error.documentation_url}</a></p>`;
    }
}
