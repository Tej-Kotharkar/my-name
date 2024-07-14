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
    
    let user_name = localStorage.getItem("user_name");
    let room_name = localStorage.getItem("room_name");
    
    function getData() {
      firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
          let childKey = childSnapshot.key;
          let childData = childSnapshot.val();
          if (childKey != "purpose") {
            let firebase_message_id = childKey;
            let message_data = childData;
            
            // Start code to display message
            let name = message_data.name;
            let message = message_data.message;
            let like = message_data.like;
    
            let name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
            let message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            let like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
            let span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
    
            let row = name_with_tag + message_with_tag + like_button + span_with_tag;        
            document.getElementById("output").innerHTML += row;
            // End code to display message
          }
        });
      });
    }
    
    getData();
    
    function send() {
      let msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
      });
      document.getElementById("msg").value = "";
    }
    
    function updateLike(message_id) {
      let button_id = message_id;
      let likes = document.getElementById(button_id).value;
      let updated_likes = Number(likes) + 1;
    
      firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
      });
    }
    