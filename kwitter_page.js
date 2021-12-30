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
  var user_name=localStorage.getItem("user_name")
  var room_name=localStorage.getItem("room_name") 
  var message
  function send(){
       message=document.getElementById("message").value 
      firebase.database().ref(room_name).push({
          name:user_name,
          message: message,
          like:0
      })
      document.getElementById("message").innerHTML=""
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id)
name=message_data['name']
message=message_data['massage']
like=message_data['like']
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
likebutton="<button class='btn btn=warning' id="+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'> "
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
row=namewithtag+messagewithtag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
 } });  }); }
getData();
function updatelike(message_id){
    button_id=message_id
    var likes=document.getElementById(button_id).value
    var updatelikes=Number(likes)+1
console.log(updatelikes)
    firebase.database().ref(room_name).child(message_id).update({like:updatelikes})
    
}