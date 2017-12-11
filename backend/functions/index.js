const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.newUser = functions.auth.user().onCreate( event => {
    const user = event.data;
    var db = admin.database();
    db.ref(`/users/${user.uid}`).set({uid: user.uid, email: user.email, hasSanta : false});
})


exports.getSanta = admin.database().ref("/createsantas").on("child_added",(ds,prevKey) => {
    var req = ds.val();
    admin.database().ref("/users/").once('value',ds=> {
        let users  = ds.val();
        console.log(users);
        for(i=0;i<users.length;i++) {
            var pairIndex = (Math.random()*users.length) % users.length;
            for(j=0;j<uses.length;j++) {
                if(pairIndex>=users.length) pairIndex=0;
                if(!users[pairIndex].hasSanta && users[i].uid!=users[pairIndex].uid) {
                    users[pairIndex].hasSanta=true;
                    users[pairIndex].santa = `${users[i].firstname} ${users[i].lastname}`
                    admin.database().ref(`/users/${users[pairIndex].uid}`).update(users[pairIndex]);
                    break;
                }
                pairIndex++;
            }
        }
    })
});


