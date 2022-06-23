
const firebaseConfig = {
    apiKey: "AIzaSyACzwpuYhfz2DEoLv_LgjpebXbsG-xyz78",
    authDomain: "project-93-68981.firebaseapp.com",
    databaseURL: "https://project-93-68981-default-rtdb.firebaseio.com",
    projectId: "project-93-68981",
    storageBucket: "project-93-68981.appspot.com",
    messagingSenderId: "807798774536",
    appId: "1:807798774536:web:4dce4932867f36d4bd6abd"
  };
  
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function add_room() {
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname", room_name);

    firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room Name"
    });  

    window.location = "Kwitter_page.html";

    
}



function getData() {firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = "";snapshot.forEach(function (childSnapshot) {
            Room_names = childKey;
       
    
            console.log("room_name - "+Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname()this.id'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;  


});});}
getData()
    function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location = "kwitter_page.html"
    }
    function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location("index.html")
    }