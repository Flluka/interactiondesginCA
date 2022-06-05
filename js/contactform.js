function validateForm() {
  let name = document.getElementById("form_name").value;
  let subject = document.getElementById("form_subject").value;
  let mail = document.getElementById("form_mail").value;
  let address = document.getElementById("form_address").value;

  if (name == null || name == "") {
    showError("Fill out your name");
    return;
  }

  if (subject.length < 10) {
    showError("Subject must be minimum 10 characters");
    return;
  }

  var regexForEmail = /\S+@\S+\.\S+/;
  if (!regexForEmail.test(mail)) {
    showError("E-mail must be valid");
    return;
  }

  if (address.length < 24) {
    showError("Adress must be minimum 25 characters");
    return;
  }

  document.getElementById("formErrorMessage").style.display = "none";
  document.getElementById("formSuccessMessage").style.display = "block";
}

function showError(message) {
  document.getElementById("formErrorMessage").innerHTML = message;
  document.getElementById("formErrorMessage").style.display = "block";
}
