function loadCommits() {
    
    const username = document.getElementById('username').value;
    const output = document.getElementById('repo').value;

    const url = `https://api.github.com/repos/${username}/${output}/commits`;

    fetch(url).then(response => {
        if(response.ok == false) {
            throw `${response.status}`
        } else {
            console.log('ok')
        }
    })
}