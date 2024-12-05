import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();


let registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", () => {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User registered:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
});


let signInBtn = document.getElementById("signin");
signInBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
});

let signupBtn = document.getElementById("signUp");
signupBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
});
let logOut = document.getElementById("logOut");
logoutBtn.addEventListener("click",()=>{
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;
    } else {
  
    
  }
});
})

    

    
   
