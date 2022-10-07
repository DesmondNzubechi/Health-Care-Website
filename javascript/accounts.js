let logIn = document.querySelector('.login');
let signUp = document.querySelector('.signUp');
let logInView = document.querySelector('.logInView');
let signUpView = document.querySelector('.signUpView');
let button =  document.querySelectorAll('button');


signUpView.addEventListener('click', () => {
logIn.style.display = 'none';
signUp.style.display = 'block';
});

logInView.addEventListener('click', () => {
logIn.style.display = 'block';
signUp.style.display = 'none';
});

button.forEach(btn => {
	btn.addEventListener('submit', (e) => e.prevDefault())
});

window.addEventListener('load', (e) => e.prevDefault())
