
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCAjxVvBYljD45Ps7D6bvh5O6JL44JrfJQ",
      authDomain: "kwitter-50792.firebaseapp.com",
      databaseURL: "https://kwitter-50792-default-rtdb.firebaseio.com",
      projectId: "kwitter-50792",
      storageBucket: "kwitter-50792.appspot.com",
      messagingSenderId: "516978159604",
      appId: "1:516978159604:web:7b381cfc70c8a7363213a1",
      measurementId: "G-23MSPL80FT"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
            //Start code
            console.log("Room Name -" + Room_names);
            row = "<div class = 'room_name' id = "+Room_names +" onclick ='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}