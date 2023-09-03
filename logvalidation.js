var email = document.getElementById('lemail');
var erremail = document.getElementById('errlemail');

var regexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
//var strengthBadge = document.getElementById('errpwd');


var pwd = document.getElementById('lpwd');
var errpwd = document.getElementById('errlpwd');



function logValidate(e) {

  if (email.value.trim() == '') {
    erremail.innerText = "Email Address Cannot be Empty";
    erremail.style.color = 'red';
    erremail.style.fontSize = "large";




  }

  else if (!regexp.test(email.value)) {

    erremail.innerText = "Enter valid email id.";
    erremail.style.color = 'red';
    erremail.style.fontSize = "large";

  }
  else {
    erremail.innerText = "";
  }
  if (pwd.value.trim() == '') {

    errpwd.innerText = "Password Cannot be Empty";
    errpwd.style.color = 'red';
    errpwd.style.fontSize = "large";




  }
  else if (pwd.value != ' ') {

    errpwd.innerText = "";


    // Initialize variables
    var strength = 0;


    // Check password length
    if (pwd.value.length >= 8) {

      strength += 1;
    }

    // Check for mixed case
    if (pwd.value.match(/[a-z]/) && pwd.value.match(/[A-Z]/)) {
      strength += 1;
    }

    // Check for numbers
    if (pwd.value.match(/\d/)) {
      strength += 1;
    }

    // Check for special characters
    if (pwd.value.match(/[^a-zA-Z\d]/)) {
      strength += 1;
    }
    
    // Return results
    if (strength < 3) {

      errpwd.innerText = "Password is Poor";
      errpwd.style.color = 'red';
      pwd.style.color = 'red';
      errpwd.style.fontSize = "large";
      pwd.style.borderColor = "red";


    } else if (strength === 3) {
      errpwd.innerText = "Password is Medium";
      errpwd.style.color = 'orange';
      pwd.style.color = 'orange';
      errpwd.style.fontSize = "large";
      pwd.style.borderColor = "red";



    } else {
      errpwd.innerText = "Password is Strong";
      errpwd.style.color = 'green';
      pwd.style.color = 'green';
      errpwd.style.fontSize = "large";
      pwd.style.borderColor = "red";


    }

  }


  if (email.value.trim() != '' && pwd.value.trim() != '' && regexp.test(email.value) && strength == 4) {

    //alert('You are successfully logged in');
    window.location = "experience.html";
    return true;

  }
  else {
    
    return false;
  }
}


// When the user clicks on the password field, show the message box
pwd.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pwd.onblur = function () {
  document.getElementById("message").style.display = "none";
}

/*pwd.onfocus = function () {
  errpwd.innerText = " ";
}*/
email.onfocus = function () {
  errpwd.innerText = " ";
}





function myFunction() {
  var x = document.getElementById("lpwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
