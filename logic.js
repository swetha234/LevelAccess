var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById('content').style.display = 'block';
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById('content').style.display = 'none';
};

// When the user starts to type something inside the password field
myInput.onkeyup = function validPsw() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }
};

function validateForm() {
  var un = document.loginform.usrname.value;
  var pw = document.loginform.psw.value;
  var email = 'level';
  var password = 'Access123';
  if (un == email && pw == password) {
    alert('Login Success');
    location.href = 'signin.html';
    return true;
  } else {
    alert('Username/Password combination was not recognized.');
    return false;
  }
}
