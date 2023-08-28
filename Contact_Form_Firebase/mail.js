// https://www.youtube.com/watch?v=RAWHXRTKTHw

const firebaseConfig = {

  apiKey: "AIzaSyAWpCyp2cXdzO_jVWlzOcjnzrlFKJpeV6w",
  authDomain: "contactform-2f448.firebaseapp.com",
  databaseURL: "https://contactform-2f448-default-rtdb.firebaseio.com",
  projectId: "contactform-2f448",
  storageBucket: "contactform-2f448.appspot.com",
  messagingSenderId: "291366137384",
  appId: "1:291366137384:web:9e55ed18c0faa4614d0f1d"

};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
