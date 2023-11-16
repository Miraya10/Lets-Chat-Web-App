const firebaseConfig = {
    apiKey: "AIzaSyCWbS6mfh8jhyfRA9xJ7Nmo08oYVELRqIM",
    authDomain: "kwitter-9e9e1.firebaseapp.com",
    databaseURL: "https://kwitter-9e9e1-default-rtdb.firebaseio.com",
    projectId: "kwitter-9e9e1",
    storageBucket: "kwitter-9e9e1.appspot.com",
    messagingSenderId: "1041333560539",
    appId: "1:1041333560539:web:ccbda524e8406195f118fe"
  };
  firebase.initializeApp(firebaseConfig)
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name-"+Room_names);
    row="<div class='room name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
    document.getElementById("output").innerHTML+=row;

    
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name)
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}