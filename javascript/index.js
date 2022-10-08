let open = document.querySelector('#open');
let close = document.querySelector('#close');
let navLinks = document.querySelector('.links');
let dropdownLinks = document.querySelectorAll('.dropdownLinks');
let dropdown = document.querySelectorAll('.dropdown');

open.addEventListener('click', (e) => {
console.log(e.target.parentElement)

navLinks.style.left = '0';
open.style.display = 'none';
close.style.display = 'block';

});

close.addEventListener('click', (e) => {
console.log(e.target.parentElement)

navLinks.style.left = '-1000px';
open.style.display = 'block';
close.style.display = 'none';

});


let act = document.querySelector('.acct');
let ac =  document.querySelector('.ac');
act.addEventListener('mouseover', () => {
	let user = document.querySelector('.users');
	user.style.display = 'block';
});
act.addEventListener('mouseout', () => {
	let user = document.querySelector('.users');
	user.style.display = 'none';

});

let drop = document.querySelector('.drop');

drop.addEventListener('mouseover', () => {
	let drp = document.querySelector('.drp');
	drp.style.display = 'block';
	let down = document.querySelector('#down');
	down.style.display = 'none';
	let up = document.querySelector('#up');
	up.style.display = 'inline-flex';

});
drop.addEventListener('mouseout', () => {
	let drp = document.querySelector('.drp');
	drp.style.display = 'none';
	let down = document.querySelector('#down');
	down.style.display = 'inline-flex';
	let up = document.querySelector('#up');
	up.style.display = 'none';

});

let abt = document.querySelector('.abt')
abt.addEventListener('mouseover', () => {
	let sub = document.querySelector('.sub');
	sub.style.display = 'block';
	let down = document.querySelector('#downn');
	down.style.display = 'none';
	let up = document.querySelector('#upp');
	up.style.display = 'inline-flex';

});
abt.addEventListener('mouseout', () => {
	let sub = document.querySelector('.sub');
	sub.style.display = 'none';
	let down = document.querySelector('#downn');
	down.style.display = 'inline-flex';
	let up = document.querySelector('#upp');
	up.style.display = 'none';

});

/*

let logIn = document.querySelector('.login');
let signUp = document.querySelector('.signUp');
let logInView = document.querySelector('.logInView');
let signUpView = document.querySelector('.signUpView');
let log = document.querySelector('.log');
let sign = document.querySelector('.sign');

log.addEventListener('click', () => {
signUp.style.display = 'none';
logIn.style.display = 'block';
});

sign.addEventListener('click', () => {
signUp.style.display = 'block';
logIn.style.display = 'none';
})
*/

let question = document.querySelectorAll('.faQ');
let answer = document.querySelectorAll('.answer'); 


question.forEach(q => {
	q.addEventListener('click', (e) => {
 /*let getPlus = e.target.children.querySelectorAll('.plus');
 getPlus.forEach*/
		let getParent = e.target.parentElement;
		let answer = getParent.querySelectorAll('.answer'); 
		answer.forEach(ans => {
			if (ans.style.display === 'block' ) {
				ans.style.display = 'none'
			} else {
				ans.style.display = 'block'
			};
		});

		/*console.log(getParent);
		console.log(getParent.children[1])
		let getAnswer = getParent.children[1];
		getAnswer.style.display = 'inline-block';
		if (getAnswer) {
			getAnswer.style.display = 'none';
		} else {
			getAnswer.style.display = 'inline-block';

		};*/
	});
});


