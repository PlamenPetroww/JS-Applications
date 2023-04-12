function executor(resolve, reject) {
    console.log('promise starting');

    /* setTimeout(() => {
        resolve('hello')
    }, 2000)
     */
    console.log('promise ended');

    setTimeout(() => {
        reject(new Error('Simulated Error'));
    }, 2000);
}

const promise = new Promise(executor)
promise.then(successCallback)
promise.catch(failureCallback)

function successCallback(data) {
    console.log('received data:', data)
}   

function failureCallback(error) {
    console.error('Encountered error', error.message);
}