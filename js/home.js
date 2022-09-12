firebase.auth().onAuthStateChanged((user) => {
  user
    ? (firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          doc
            ? (document.getElementById("name").innerHTML = doc.data().name)
            : (window.location = "../index.html");
        })
        .catch((error) => {
          console.log(error);
        }))
      
        

             
        
    : (window.location = "../index.html");
});

var logout = (event) => {
  event.preventDefault();
  firebase
    .auth()
    .signOut()
    .then((action) => {
      console.log("Logout!");
      window.location = "../index.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
var changePswrd = (event) => {
  event.preventDefault()
  const user = firebase.auth().currentUser;
const newPassword = document.getElementById("newPswrd").value;

user.updatePassword(newPassword).then(() => {
  alert("Your password has been changed successfully")
}).catch((error) => {
 alert(error.message)
});
}
var deleteAccount = (event) => {
  event.preventDefault()
  const user = firebase.auth().currentUser;

  user.delete().then(() => {
    alert("Your account has been deactivated")
  }).catch((error) => {
    alert(error.message)
  });
}