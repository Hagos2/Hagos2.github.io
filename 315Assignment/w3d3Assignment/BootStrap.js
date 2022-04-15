"use strict";
/*eslint-disable*/
const myCon = document.getElementById("myCon");
myCon.addEventListener("register", (event)=>{
  event.preventDefault();
  const request=new XMLHttpRequest();
  request.open("post", "bootStrapForm.html");
});

function register() {
    let em=document.getElementById("email").value;
    let pas=document.getElementById("pass").value;
    let repas=document.getElementById("passAgain").value;
    let fn=document.getElementById("fn").value;
    let ln=document.getElementById("ln").value;
    let agree=document.getElementById("agree").checked;
  if ( em.length==0) {
    document.getElementById("danger").innerHTML =
      "Sorry, " +
      document.getElementById("fn").value +
      "! Please enter your email";       
  }else if(pas.length==0) {
    document.getElementById("danger").innerHTML =
      "Sorry, " +
      document.getElementById("fn").value +
      "! Please enter your password";

  }else if(repas.length==0) {
    document.getElementById("danger").innerHTML =
      "Soryy, " +
      document.getElementById("fn").value +
      "! Please re-enter your password again";
  }else if(fn.length==0) {
    document.getElementById("danger").innerHTML =
      "Sor, " +
      document.getElementById("fn").value +
      "! Please enter your first name";
  }else if(ln.length==0) {
    document.getElementById("danger").innerHTML =
      "Sor, " +
      document.getElementById("fn").value +
      "! Please enter your last name";
  }else if(!agree) {
    document.getElementById("danger").innerHTML =
      "Sor, " +
      document.getElementById("fn").value +
      "! Please check the agreement box";
  }
  else {
    let entry1 = document.getElementById("pass").value;
    let entry2 = document.getElementById("passAgain").value;
    if (entry1 != entry2 && ValidityState) {
      document.getElementById("danger").innerHTML =
        "Sorr, " +
        document.getElementById("fn").value +
        "! Your passwords don't match!";
    } else if (entry1.length < 8) {
      document.getElementById("danger").innerHTML =
        "Sorr, " +
        document.getElementById("fn").value +
        "! Your password is too short! Please re-enter them again.";
    } else {
      var letters = /[A-z]+/;
      var nums = /[0-9]+/;
      var specialChars = /[~!@#$%^&*..]+/;
      if (
        letters.test(entry1) &&
        nums.test(entry1) &&
        specialChars.test(entry1)
      ) {
        document.getElementById("success").innerHTML =
          "Congratulations, " +
          document.getElementById("fn").value +
          "! You have successfully registered!";
      } else {
        document.getElementById("danger").innerHTML =
          "Sorry, " +
          document.getElementById("fn").value +
          "! Your password should at least include one lowercase, one uppercase, one number, and one special character.";
      }
    }
  }
}