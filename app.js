const firebaseConfig = {
  apiKey: "AIzaSyCuZ5efIttlcZL4gTeUw8b9k2O1QblXn_0",
  authDomain: "todoapp-4a0ff.firebaseapp.com",
  databaseURL: "https://todoapp-4a0ff-default-rtdb.firebaseio.com",
  projectId: "todoapp-4a0ff",
  storageBucket: "todoapp-4a0ff.firebasestorage.app",
  messagingSenderId: "743289556650",
  appId: "1:743289556650:web:1b629b9a01ca9a9e114ad3"
};

const frb = firebase.initializeApp(firebaseConfig);
console.log(frb.database);


var ulElement = document.getElementById("list");





firebase.database().ref("users").on("child_added", (data) => {
  
  // console.log(data.val().value);
  

    var liElement = document.createElement("li");  

    var liText = document.createTextNode(data.val().value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);



    // create delete button liElement

    var delBtnElement = document.createElement("button");

    var delBtnText = document.createTextNode("Delete");

    delBtnElement.appendChild(delBtnText);

delBtnElement.setAttribute("id",data.val().key)

    liElement.appendChild(delBtnElement);

    delBtnElement.setAttribute("onclick", "deleteSingleItem(this)");

    // create edit button liElement

    var editBtnELement = document.createElement("button");

    var editBtnText = document.createTextNode("Edit");

    editBtnELement.appendChild(editBtnText);

    editBtnELement.setAttribute("id",data.val().key)

    editBtnELement.setAttribute("onclick", "editItem(this)");

    liElement.appendChild(editBtnELement);


})
function addTodo() {
  var input = document.getElementById("todoInput");
  
  // console.log(input.value);
  
  
  var key = firebase.database().ref('users').push().key;

  var obj = {
    value: input.value,
    key:key

  }
firebase.database().ref("users").child(key).set(obj)




input.value = "";


  // if (input.value) {

  
  console.log(liElement);
  // } else {
    // alert("fill the field..");  
  // }/
}

function deleteAllItems() {

  firebase.database().ref("users").remove()
  ulElement.innerHTML = "";  
}

// CRUD Operation

// C = CREATE
// R = READ
// U = UPDATE
// D = DELETE

function deleteSingleItem(e) {
  firebase.database().ref("users").child(e.id).remove()
  e.parentNode.remove();  
}

function editItem(e) {
  // var val = e.parentNode.firstChild.nodeValue;
  var updatedVal = prompt("Enter updated value..");  

var editvalue = {
value : updatedVal,
key: e.id
}

firebase.database().ref("users").child(e.id).set(editvalue)


  e.parentNode.firstChild.nodeValue = updatedVal;
}






// var ulElement = document.getElementById('list');

// function addTodo() {
//   var input = document.getElementById('todoInput');


//   if (input.value) {
//     var liElement = document.createElement('li');
//     var liText = document.createTextNode(input.value);
//     liElement.appendChild(liText);
//     ulElement.appendChild(liElement);

//     liElement.style.fontFamily = "arial";
//     liElement.style.textDecoration = "none";

//     // liElement.style.textDecoration = "none";

//     // create delete btn 

//     var delBtnElement = document.createElement('button');
//     var delBtnText = document.createTextNode('Delete');
//     delBtnElement.appendChild(delBtnText);
//     liElement.appendChild(delBtnElement);
//     delBtnElement.setAttribute('onclick', 'singledel(this)');



//     // create edit button 

//     var editBtnELement = document.createElement('button');
//     var editBtnText = document.createTextNode('Edit');

//     editBtnELement.appendChild(editBtnText);
//     liElement.appendChild(editBtnELement);
//     editBtnELement.setAttribute('onclick', 'editf(this)');





//     console.log(input.value);
//     input.value = "";

//   }
//   else {
//     alert('alert')
//   }





// }

// function deleteAllItems() {
//   ulElement.innerHTML = "";

// }

// function singledel(e) {
//   e.parentNode.remove();
// }

// function editf(e) {
//   var ubdateval = prompt('Enter your Update value ');
//   e.parentNode.firstChild.nodeValue = ubdateval;
//   console.log(e.parentNode.firstChild.nodeValue);
// }

