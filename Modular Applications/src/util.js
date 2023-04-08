export function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries([...formData.entries()].map(([k, v]) => [k, v.trim()]));

        callback(data, form)
    };
}

export function validatePartData(partData) {
    partData.price = Number(partData.price);
    partData.qty = Number(partData.qty);

        if (partData.label == '') {
            throw new error('Label is required!');
        }
        if (Number.isNaN(partData.price) || partData.price <= 0) {
            throw new error('Price must be a positive number!');
        }
        if (Number.isInteger(partData.qty) == false || partData.qty < 0) {
            throw new error('Stock quantity must be non-negative integer!');
        }

        return {
            label: partData.label,
            price: partData.price,
            qty: partData.qty
        };
}