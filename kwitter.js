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

function addUser() {
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}
