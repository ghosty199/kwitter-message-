
var firebaseConfig = {
      apiKey: "AIzaSyCReoULP9M74xuTniHHd7Tvk2bhOz8gA_k",
      authDomain: "kwitter-app-4028b.firebaseapp.com",
      databaseURL: "https://kwitter-app-4028b-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-4028b",
      storageBucket: "kwitter-app-4028b.appspot.com",
      messagingSenderId: "1024575891601",
      appId: "1:1024575891601:web:e766942672790997f9f730",
      measurementId: "G-QYCTG82P2C"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="welcome "+user_name
    function addroom(){
          room_name=document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
purpose:"addingroomname"
          })
          localStorage.setItem("room_name",room_name)
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom_name(this.id)'> #" +Room_names+" </div> <hr> " 
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirecttoroom_name(name){
      window.location="kwitter_page.html" 
      localStorage.setItem("room_name",name)
}
