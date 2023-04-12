function solve() {

    const label = document.querySelector('#info span');
    let stop = {
        next: 'depot'
    };
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    
    async function depart() {
        
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const response = await fetch(url);
        stop = await response.json();
        label.textContent = `Next stop ${stop.name}`
        departBtn.disabled = true;
        arriveBtn.disabled = false;

    }

    function arrive() {

        label.textContent = `Arriving at ${stop.name}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();