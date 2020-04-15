import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTO_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSEEAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses =[];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }), (e) => {
//         console.log(e); 
//     };

// database.ref('expenses').push({
//     desciption: 'lll',
//     note: '',
//     amount: 500,
//     createdAt: '55'
// });

// database.ref('expenses').push({
//     desciption: 'coffee',
//     note: '',
//     amount: 5,
//     createdAt: '51'
// });

// database.ref('expenses').push({
//     desciption: 'food',
//     note: '',
//     amount: 10,
//     createdAt: '70'
// });







// database.ref('notes').push({
//     title: ' Course Topics',
//     body: 'react'
// })

// const firebaseNotes = {
//     notes: {
//         jjj:{
//             title: 'first note',
//             body: 'd'
//         },
//         kkk: {
//             title: 'first note',
//             body: 'd'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'd'
// }, {
//     id: '15',
//     title: ' note',
//     body: 'k'
// }];

// database.ref('notes').set(notes)

// const dataSub = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error', e);
// })

// database.ref().update({
//     'job/company': 'lll'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log(e);
// })

// setTimeout(() => {
//     database.ref('age').set(21);
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 3500)


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })


// database.ref().set({
//     name: 'noam k',
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title:'Software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'ash',
//         state: 'israel'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref('expenses')
//     .remove()
//     .then((a) => {
//         console.log('Data was Removed'+ a);
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e);
//     })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });