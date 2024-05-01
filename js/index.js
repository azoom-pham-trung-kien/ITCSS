const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const wrapper = document.querySelector(".wrapper");

signInBtn.addEventListener("click", () => {
  wrapper.classList.remove("-right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  wrapper.classList.add("-right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
