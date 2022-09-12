firebase.auth().onAuthStateChanged((user) => {
  user ? window.location = "../home.html" : null
})

  var resetPswrd = (event) => {
    var email = document.getElementById("reset-email").value;
  if(email===''){
    alert("Enter Email Please!")
  } else {
    event.preventDefault();
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
   alert("verification email has been sent!")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   alert(errorMessage)
  });
  }
    
  }





    var login=(event)=>{
      event.preventDefault();
      //GETTING USER LOGIN DETAILS
      var userName=document.getElementById("userEmail").value;
      var userPassword=document.getElementById("userPassword").value;
      
      // FORM VALIDATION
      (!userName||!userPassword) ? 
      (document.getElementById("show-message").innerHTML="Please Fill all required Fields!", document.getElementById("show-message").style.color="red" ) : 
      // SHOWING LOADER 
      document.getElementById("loader").style.display="block";
       firebase.auth().signInWithEmailAndPassword(userName,userPassword)
       .then(user=>{
    
         // HIDING LOADER
         document.getElementById("loader").style.display="none";
        document.getElementById("show-message").innerHTML="Login Sucessfully!";
        document.getElementById("show-message").style.color="green";
    
        window.location.replace("./home.html")
          
       })
       .catch(error=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("show-message").innerHTML=errorMessage;
        document.getElementById("show-message").style.color="red";
           // HIDING LOADER
           document.getElementById("loader").style.display="none";
    
    })
      
    }
  
