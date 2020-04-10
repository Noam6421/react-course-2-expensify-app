//Object destructuring


// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Ashkelon',
//         temp: 80
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`its ${temperature} in ${city}`);
// }

// const book = {
//      title: 'Ego is the Enemy',
//      author: 'Ryan Holiday',
//      publisher: {
//          name: 'Penguin'
//     }
// };

// const {name = 'Self-Published'} = book.publisher;
// console.log(`The publisher is ${name}`);


//Array destructuring

// const address = ['1299 S kkk', 'Ashkelon', 'Israel', '88882'];
// const [, city, state = 'New York', zip] = address;
// console.log(`you are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mprice, ] = item;
console.log(`A medium ${itemName} costs ${mprice}`);