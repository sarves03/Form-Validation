let form = document.getElementById("Form");

form.addEventListener("submit", (e) => {
  if (!validate()) {
    e.preventDefault();
  }
});
function validate() {
  let firstname = document.getElementById("Firstname").value;
  let firstname1 = document.getElementById("Firstname");
  let lastname = document.getElementById("LastName").value;
  let lastname1 = document.getElementById("LastName");
  let password = document.getElementById("password").value;
  let password1 = document.getElementById("password");
  let confirmpassword = document.getElementById("confirmPassword").value;
  let confirmpassword1 = document.getElementById("confirmPassword");
  let contact = document.getElementById("C-N").value;
  let contact1 = document.getElementById("C-N");
  let email = document.getElementById("email").value;
  let email1 = document.getElementById("email");
  var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let success = true;
  // firstname --------------------------
  if (firstname === "") {
    error = document.querySelector("#Firstname ~ i");
    error.setAttribute(
      "class",
      "bi bi-info-circle-fill input-group-text text-danger"
    );
    firstname1.style.border = "3px solid red";
    success = false;
  } else {
    error = document.querySelector("#Firstname ~ i");
    error.setAttribute("class", "bi bi-check input-group-text text-success");
    firstname1.style.border = "3px solid green";
  }
  // lastname --------------------------
  if (lastname === "") {
    error = document.querySelector("#LastName ~ i");
    error.setAttribute(
      "class",
      "bi bi-info-circle-fill input-group-text text-danger"
    );
    lastname1.style.border = "3px solid red";
    success = false;
  } else {
    error = document.querySelector("#LastName ~ i");
    error.setAttribute("class", "bi bi-check input-group-text text-success");
    lastname1.style.border = "3px solid green";
  }
  // email ------------------
  if (emailregex.test(email)) {
    error = document.querySelector("#email ~ i");
    error.setAttribute("class", "bi bi-check input-group-text text-success");
    email1.style.border = "3px solid green";
  } else {
    error = document.querySelector("#email ~ i");
    error.setAttribute(
      "class",
      "bi bi-info-circle-fill input-group-text text-danger"
    );
    email1.style.border = "3px solid red";
    success = false;
  }
  // contact ------------------
  if (contact.length == 10) {
    error = document.querySelector("#C-N ~ i");
    error.setAttribute("class", "bi bi-check input-group-text text-success");
    contact1.style.border = "3px solid green";
  } else {
    error = document.querySelector("#C-N ~ i");
    error.setAttribute(
      "class",
      "bi bi-info-circle-fill input-group-text text-danger"
    );
    contact1.style.border = "3px solid red";
    success = false;
  }
  // password ------------------
  if (passwordregex.test(password)) {
    var error = document.querySelector("#password ~ i");
    error.setAttribute("class", "bi bi-check input-group-text text-success");
    password1.style.border = "3px solid green";
  } else {
    var error = document.querySelector("#password ~ i");
    error.setAttribute(
      "class",
      "bi bi-info-circle-fill input-group-text text-danger"
    );
    password1.style.border = "3px solid red";
    success = false;
  }
  // confirm password -------------------
  if (password != confirmpassword) {
    var error = document.querySelector("#confirmPassword ~ i");
    error.setAttribute(
      "class",
      "bi bi-info-circle-fill input-group-text text-danger"
    );
    confirmpassword1.style.border = "3px solid red";
    success = false;
    setTimeout(
      () =>
        alert(
          "Password must be in min 8 letter, with at least a symbol, upper and lower case letters and a number"
        ),
      500
    );
  } else if (passwordregex.test(confirmpassword)) {
    var error = document.querySelector("#confirmPassword ~ i");
    error.setAttribute("class", "bi bi-check input-group-text text-success");
    confirmpassword1.style.border = "3px solid green";
  }

  //  overall check -------------------
  // if (firstname === "") {
  //   alert("Please Enter Full Details");
  // } else if (lastname === "") {
  //   alert("Please Enter Full Details");
  // } else if (!emailregex.test(email)) {
  //   alert("Please Enter Full Details");
  // } else if (contact.length !== 10) {
  //   alert("Please Enter Full Details");
  //   alert("Contact Number must be 10 characters");
  // } else if (!passwordregex.test(password)) {
  //   alert("Please Enter Full Details");
  // } else if (confirmpassword === "") {
  //   alert("Please Enter Full Details");
  // } else if (confirmpassword !== password) {
  //   alert("Please Enter Full Details");
  // } else {
  //   alert("All Done");
  // }
  console.log(`
  FirstName ${firstname}
  LastName ${lastname}
  password ${password}
  Contact ${contact}
  Email ${email}
  `);
  console.log(success);
  localStorage.setItem("Fname", firstname);
  sessionStorage.setItem("Fname", firstname);
  sessionStorage.setItem("Lname", lastname);
  sessionStorage.setItem("Contact no", contact);
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Password", password);
  return success;
}
//console.log(validate());
form.addEventListener("change", () => {
  validate();
});
