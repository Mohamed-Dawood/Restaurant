//start validation form
let userInput = document.querySelector("[name='username']");
let passwordInput = document.querySelector("[name='password']");

document.onclick = function (e) {
  let userValid = false;
  let passwordValid = false;
  if (userInput !== '' && userInput.value.length >= 10) {
    userValid = true;
  }
  if (passwordInput !== '' && passwordInput.value.length >= 7) {
    passwordValid = true;
  }
  if (userValid === false || passwordValid === false) {
    e.preventDefault();
  }
};

let btn = document.getElementById('btn-icon');
let uln = document.getElementById('uln');
// let home = document.getElementById("home");
console.log(uln);
console.log(btn);

btn.addEventListener('click', function () {
  uln.classList.toggle('toggle');
  btn.classList.toggle('toggle-i');
  console.log('work');
  console.log(uln);
});
let btn2 = document.getElementById('btn2');

window.onscroll = function () {
  if (scrollY >= 400) {
    btn2.style.display = `block`;
  } else {
    btn2.style.display = `none`;
  }
};

btn2.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
};
let exploreMenu = document.querySelector('.explore-menu');

exploreMenu.addEventListener(
  'click',
  () => (window.location.href = 'Filter.html')
);
