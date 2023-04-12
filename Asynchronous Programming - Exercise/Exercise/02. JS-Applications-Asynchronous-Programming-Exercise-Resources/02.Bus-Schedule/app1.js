function solve() {

    const label = document.querySelector('#info span');
    let stop = {
        next: 'depot'
    }
    const deppartButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive')

    async function depart() {

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const response = await fetch(url);
        stop = await response.json();
        label.textContent = `Next stop ${stop.name}`

        deppartButton.disabled = true;
        arriveButton.disabled = false;

    }

    function arrive() {
        
        deppartButton.disabled = false;
        arriveButton.disabled = true;

        label.textContent = `Arriving at ${stop.name}`

    }

    return {
        depart,
        arrive
    };
}

let result = solve();