const url = 'http://localhost:3030/jsonstore/messenger';
const messages = document.getElementById('messages');

//get dom elements step 1
//get data step 2
//make request with yours data step 3
//load messages step 4


function attachEvents() {

    //step1

    document.getElementById('submit').addEventListener('click', loadData);
    document.getElementById('refresh').addEventListener('click', refsreshData);

}
async function refsreshData() {

    //step 2

    const response = await fetch(url);
    const data = await response.json();

    messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n')
}

//hier is your request

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

async function loadData() {

    //step 4

    const [author, content] = [document.getElementById('author'), document.getElementById('content')];

    if (author.value !== '' || content.value !== '') {
        await request(url, { author: author.value, content: content.value });
        author.value = '';
        content.value = '';
    }
}

attachEvents();