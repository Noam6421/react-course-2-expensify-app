const promise = new Promise((resolve, regect) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 500)
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 500)
    });
}).then((str) => {
    console.log('kkk' + str);
}).catch((error) => {
    console.log('error:' + error);
});

console.log('after');