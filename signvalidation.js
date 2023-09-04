var nam = document.getElementById('name');
var errname = document.getElementById('errname');

var phone = document.getElementById('phone');
var errphone = document.getElementById('errphone');

var email = document.getElementById('email');
var erremail = document.getElementById('erremail');

var repwd = document.getElementById('repwd');
var errrepwd = document.getElementById('errrepwd');


var regexp = /^[a-zA-Z0-9\-.]+@[a-z]+\.[a-z]{2,3}$/;


var regphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;



var pwd = document.getElementById('pwd');
var errpwd = document.getElementById('errpwd');



function regValidate(e) {


  //Name Validation
  if (nam.value.trim() == '') {
    errname.innerText = "Name Cannot be Empty";
    errname.style.color = 'red';
    errname.style.fontSize = "large";
  }
  else {
    errname.innerText = "";
  }


  //Email Validation


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


  //Phone Number Validation

  if (phone.value.trim() == '') {
    errphone.innerText = "Phone Number Cannot be Empty";
    errphone.style.color = 'red';
    errphone.style.fontSize = "large";

  }
  else if (!regphone.test(phone.value)) {

    errphone.innerText = "Enter Valid Phone Number";
    errphone.style.color = 'red';
    errphone.style.fontSize = "large";

  }
  else {

    errphone.innerText = "";
  }



  //Password Validation

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
    console.log(strength);
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


  if (repwd.value.trim() == '') {
    errrepwd.innerText = "Repeat Password Cannot be Empty";
    errrepwd.style.color = 'red';
    errrepwd.style.fontSize = "large";

  }
  else if (pwd.value == repwd.value) {

    errrepwd.innerText = "Password Created Successfully";
    errrepwd.style.color = 'red';
    errrepwd.style.fontSize = "large";

  }
  else if (pwd.value != repwd.value) {
    errrepwd.innerText = "Password didn not match";
    errrepwd.style.color = 'red';
    errrepwd.style.fontSize = "large";
  }






  if (email.value.trim() != '' && nam.value.trim() != '' && phone.value.trim() != '' && repwd.value.trim() != '' && pwd.value.trim() != '') {

    if (regexp.test(email.value) && strength == 4 && regphone.test(phone.value) && pwd.value == repwd.value) {
      //alert('You are successfully logged in');
      window.location = "experience.html";
      return true;

    }
    else {
      //alert('Data invalid');
      return false;
    }
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
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
