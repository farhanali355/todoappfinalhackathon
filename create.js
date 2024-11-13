






const firebaseConfig = {
    apiKey: "AIzaSyAtkIrfecXpAICcW2JK6qknbAMsWwgBEGo",
    authDomain: "todologinform.firebaseapp.com",
    databaseURL: "https://todologinform-default-rtdb.firebaseio.com",
    projectId: "todologinform",
    storageBucket: "todologinform.firebasestorage.app",
    messagingSenderId: "779449478454",
    appId: "1:779449478454:web:864b4ce811109299e35797",
    measurementId: "G-B1WZBKT32C"
  };
  
  
  const app = firebase.initializeApp(firebaseConfig);
  


var name = document.getElementById("name");
var emails = document.getElementById("email");
var passwords = document.getElementById("password");

function signupfuntion(){
  firebase.auth().createUserWithEmailAndPassword(emails.value, passwords.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    // ...
    console.log(user);
    window.location.href = "./index.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
    
  });
}



// function looog(){
//   // console.log(emails.value,passwords.value);
//   //    alert('hello world')
  
//   try{
       
//      firebase.auth().signInWithEmailAndPassword(emails.value, passwords.value)
//        .then((userCredential) => {
//          // Signed in
//          var user = userCredential.user;
//          // ...
//         //  console.log(user);
// window.location.href = './index.html'
         
//        })
//        .catch((error) => {
//          var errorCode = error.code;
//          var errorMessage = error.message;
//          console.log(errorMessage);
         
//        });
//       //  var userdata = {
//       //      username: names,
//       //      useremail: email,
//       //      userpassword: password,
//       //   }
        
        
// }

// catch(error){
//     console.log(error);
    

// }
    

// }