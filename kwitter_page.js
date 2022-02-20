const firebaseConfig = {
    apiKey: "AIzaSyC5hALGGeTToPorWuH9v-O4O4lkzs-E0ZI",
    authDomain: "lets-chat-b09e3.firebaseapp.com",
    databaseURL: "https://lets-chat-b09e3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-b09e3",
    storageBucket: "lets-chat-b09e3.appspot.com",
    messagingSenderId: "990747954497",
    appId: "1:990747954497:web:9b4122d05c9cbd148025c0"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 room_name=localStorage.getItem("room_name")
 user_name=localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function Logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
function send(){
msg = document.getElementById("msg").value 
firebase.database().ref(room_name).push({
like:0,
message:msg,
name:user_name
})

document.getElementById("msg").value=""
}