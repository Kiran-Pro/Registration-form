var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var passwordHint = document.querySelector(".passwordLengthHint");

var nameRegex = /^[a-zA-Z\s]+$/;
var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
var passwordRegex = /^[a-zA-Z0-9]{6,}$/;

submit.addEventListener("click", function (event) {
  event.preventDefault();

  if (nameRegex.test(userName.value) == false) {
    document.querySelector(".nameErr").style.display = "inline";
  } else {
    document.querySelector(".nameErr").style.display = "none";
  }

  if (emailRegex.test(email.value) == false) {
    document.querySelector(".emailErr").style.display = "inline";
  } else {
    document.querySelector(".emailErr").style.display = "none";
  }

  if (passwordRegex.test(password.value) == false) {
    document.querySelector(".passwordErr").style.display = "inline";
  } else {
    document.querySelector(".passwordErr").style.display = "none";
  }

  if (
    nameRegex.test(userName.value.trim()) &&
    emailRegex.test(email.value.trim()) &&
    passwordRegex.test(password.value)
  ) {
    alert("Form submitted successfully!");
    userName.value = "";
    email.value = "";
    password.value = "";
    textArea.value = "";

    count_display.textContent = "0 / 200";
    warning.textContent = "";
    passwordHint.textContent = "";
    warning.classList.remove("opacity-100");
    warning.classList.add("opacity-0");
  }
});

function validateForm() {
  if (
    userName.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== ""
  ) {
    submit.disabled = false;
    submit.classList.remove("bg-gray-400", "cursor-not-allowed");
    submit.classList.add("bg-purple-600", "cursor-pointer");
  } else {
    submit.disabled = true;
    submit.classList.remove("bg-purple-600", "cursor-pointer");
    submit.classList.add("bg-gray-400", "cursor-not-allowed");
  }
}

userName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

password.addEventListener("input", function () {
  const length = password.value.length;

  if (length < 6) {
    const remaining = 6 - length;
    passwordHint.textContent = `${remaining} more character${
      remaining > 1 ? "s" : ""
    } needed`;
  } else {
    passwordHint.textContent = "Password length is good ✅";
    document.querySelector(".passwordErr").style.display = "none";
  }

  validateForm();
});

submit.disabled = true;

// TextArea

var textArea = document.getElementById("textArea");
var count_display = document.getElementById("count_display");
var warning = document.getElementById("warning");

textArea.addEventListener("input", function () {
  var characterTyped = textArea.value.length;
  console.log(characterTyped + "typed");

  count_display.textContent = characterTyped + " /200";

  if (characterTyped >= 200) {
    warning.textContent = "Character limit exceeded";
    console.log("warning added");
    warning.classList.remove("opacity-0");
    warning.classList.add("opacity-100");
  } else {
    warning.textContent = "";
    warning.classList.remove("opacity-100");
    warning.classList.add("opacity-0");
  }
});
