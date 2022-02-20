
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
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("user_name")
document.getElementById("h3color3").innerHTML="Welcome"+username+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
       row="<div class='room_name' id="+Room_names+" onclick='RedirectToOwnRoom(this.id)'>#"+Room_names+"</div>"
       document.getElementById("output").innerHTML+=row
      //Start code

      //End code
      });});}
getData();
function addroom(){
  roomname=document.getElementById("add_room").value
  firebase.database().ref("/").child(roomname).update({
    purpose:"addinguser"
})
localStorage.setItem("room_name",roomname)
window.location="kwitter_page.html"

}
function RedirectToOwnRoom(name){
localStorage.setItem("roomname",name)
window.location="kwitter_page.html"
}
