const firebaseConfig = {
  apiKey: "AIzaSyDZOYjigh4dRnpma9aLRQVy_lKGPRMt03c",
  authDomain: "hello-1ac0f.firebaseapp.com",
  databaseURL: "https://hello-1ac0f-default-rtdb.firebaseio.com",
  projectId: "hello-1ac0f",
  storageBucket: "hello-1ac0f.appspot.com",
  messagingSenderId: "581408134939",
  appId: "1:581408134939:web:091c4df757e6eeefcc65be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
