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
    return db.ref(`/users/${user.uid}`).update({uid: user.uid, email: user.email, isSanta : false});
})


exports.getSanta = functions.database.ref("/opsantas/{operKey}").onCreate(event => {
    var req = event.data.val();
    event.data.ref.remove();
    if(req.oper=='clear') return clearSantas();
    return admin.database().ref("/users/").once('value',ds=> {
        let users  = values(ds.val()).filter(u => !u.isSanta);
        var updates={}
        for(i=0;i<users.length;i++) {
            var pairIndex = Math.ceil(Math.random()*users.length) % users.length;
            for(j=0;j<users.length;j++) {
                if(pairIndex>=users.length) pairIndex=0;
                if(!users[pairIndex].isSanta && !users[i].hasSanta && users[i].uid!=users[pairIndex].uid) {
                    users[pairIndex].isSanta = true;
                    users[pairIndex].santa = `${users[i].firstname} ${users[i].lastname}`;
                    users[i].hasSanta=true;
                    break;
                }
                pairIndex++;
            }
        }
        for(i=0;i<users.length;i++) updates[`/users/${users[i].uid}`]=users[i];
	    console.log(updates);
        return admin.database().ref().update(updates);
    })
});

function clearSantas() {
    admin.database().ref("/users/").once('value',ds => {
        updates={};
        let users = values(ds.val())
        users.forEach(u => {
            var moduser = u;
            moduser.isSanta=false;
            moduser.santa='';
            moduser.hasSanta=false;
            updates[`/users/${u.uid}`]=moduser;
        })
        return admin.database().ref().update(updates);
    })
}


