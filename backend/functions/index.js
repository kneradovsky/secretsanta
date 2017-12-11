const values = require('object.values');
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
    db.ref(`/users/${user.uid}`).update({uid: user.uid, email: user.email, hasSanta : false});
})


exports.getSanta = admin.database().ref("/opsantas").on("child_added",(ds,prevKey) => {
    var req = ds.val();
    if(req.oper=='clear') return clearSantas();
    admin.database().ref("/users/").once('value',ds=> {
        let users  = values(ds.val()).filter(u => !u.isSanta);
        var updates={}
        for(i=0;i<users.length;i++) {
            var pairIndex = (Math.random()*users.length) % users.length;
            for(j=0;j<users.length;j++) {
                if(pairIndex>=users.length) pairIndex=0;
                if(!users[pairIndex].isSanta && users[i].uid!=users[pairIndex].uid) {
                    updates[`/users/${users[pairIndex].uid}`]={isSanta:true,santa:`${users[i].firstname} ${users[i].lastname}`}
                    break;
                }
                pairIndex++;
            }
        }
        admin.database().ref().update(updates);
    })
});

function clearSantas() {
    admin.database().ref("/users/").once('value',ds => {
        updates={};
        let users = values(ds.val()).filter(u => u.isSanta)
        users.forEach(u => {
            updates[`/users/${u.uid}`]={isSanta:false,santa:''}
        })
        admin.database().ref().update(updates);
    })
}


