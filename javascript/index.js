let open = document.querySelector('#open');
let close = document.querySelector('#close');
let navLinks = document.querySelector('.links');
let dropdownLinks = document.querySelectorAll('.dropdownLinks');
let dropdown = document.querySelectorAll('.dropdown');

//display nav menu when navbar is being clicked
open.addEventListener('click', (e) => {
console.log(e.target.parentElement)
navLinks.style.left = '0';
open.style.display = 'none';
close.style.display = 'block';
});

//undisplay nav menu when navbar is being clicked
close.addEventListener('click', (e) => {
navLinks.style.left = '-1000px';
open.style.display = 'block';
close.style.display = 'none';

});

/*
//LIGHT AND DARK MODE

let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let getBody = document.body;

moon.addEventListener('click', () => {
	getBody.classList.add('darkTheme');
	moon.style.display = 'none';
	sun.style.display = 'block';
});
sun.addEventListener('click', () => {
	getBody.classList.remove('darkTheme');
	moon.style.display = 'block';
	sun.style.display = 'none';
});
*/
//display sign up button on hover
let act = document.querySelector('.acct');
let ac =  document.querySelector('.ac');
act.addEventListener('mouseover', () => {
	let user = document.querySelector('.users');
	user.style.display = 'block';
});

//undisplay sign up button on mouse out
act.addEventListener('mouseout', () => {
	let user = document.querySelector('.users');
	user.style.display = 'none';

});


//display services sub nav link on hover
let drop = document.querySelector('.drop');
drop.addEventListener('mouseover', () => {
	let drp = document.querySelector('.drp');
	drp.style.display = 'block';
	let down = document.querySelector('#down');
	down.style.display = 'none';
	let up = document.querySelector('#up');
	up.style.display = 'inline-flex';

});
//undisplay services sub nav link on mouse out
drop.addEventListener('mouseout', () => {
	let drp = document.querySelector('.drp');
	drp.style.display = 'none';
	let down = document.querySelector('#down');
	down.style.display = 'inline-flex';
	let up = document.querySelector('#up');
	up.style.display = 'none';

});

//display Our Team sub nav link on mouse out
let abt = document.querySelector('.abt')
abt.addEventListener('mouseover', () => {
	let sub = document.querySelector('.sub');
	sub.style.display = 'block';
	let down = document.querySelector('#downn');
	down.style.display = 'none';
	let up = document.querySelector('#upp');
	up.style.display = 'inline-flex';

});
//undisplay our team sub nav link on mouse out
abt.addEventListener('mouseout', () => {
	let sub = document.querySelector('.sub');
	sub.style.display = 'none';
	let down = document.querySelector('#downn');
	down.style.display = 'inline-flex';
	let up = document.querySelector('#upp');
	up.style.display = 'none';

});

//display news sub nav link on hover
let news = document.querySelector('.news');
news.addEventListener('mouseover', () => {
	let subb = document.querySelector('.subb');
	subb.style.display = 'block';
	let downnn = document.querySelector('#downnn');
	downnn.style.display = 'none';
	let uppp = document.querySelector('#uppp');
	uppp.style.display = 'inline-flex';

});
//undisplay news sub nav link on mouse out
news.addEventListener('mouseout', () => {
	let subb = document.querySelector('.subb');
	subb.style.display = 'none';
	let down = document.querySelector('#downnn');
	downnn.style.display = 'inline-flex';
	let uppp = document.querySelector('#uppp');
	uppp.style.display = 'none';

});


//display answer when click on FAQ
let question = document.querySelectorAll('.faQ');
let answer = document.querySelectorAll('.answer'); 
question.forEach(q => {
	q.addEventListener('click', (e) => {
		let getParent = e.target.parentElement;
		let answer = getParent.querySelectorAll('.answer'); 
		answer.forEach(ans => {
			if (ans.style.display === 'block' ) {
				ans.style.display = 'none'
			} else {
				ans.style.display = 'block'
			};
		});
	});
});


//rendering footer on html page using javascript
let footer = document.querySelector('.footer');

function footerRendering() {
	footer.innerHTML = `<div class="row foot ">
		<div class="col-lg-4 col-md-4 col-sm-12 descrip">
			<p class="descripMainH">MyHealthCare</p>
			<p class="descripSubH">MyHealthCare Is an adminitrative support entry and clinical service</p>
      <div class="soc">
      	<i class="fa-brands fa-linkedin-in"></i>
      	<i class="fa-brands fa-twitter"></i>
      	<i class="fa-brands fa-facebook"></i>
      	<!--<i class="fa-brands fa-instagram"></i>-->
      </div>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 importantL">
			<p>Important Links</p>
			<div>
				<a href="index.html">Home</a>
				<a href="#">Privacy Policy</a>
				<a href="about.html">About</a>
				<a href="doctors.html">Team</a>
			</div>

		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 subscribe">
			<p>
				Subscribe To Our Newsletter
			</p>
			<div>
				<form>
				<input type="email" name="email" placeholder="Email Address" required>
				<button type="submit" class="newsLBt">Subscribe Now</button>
			</div>
		</div>
	</div>
	<div class="dev text-center"><a href="https://nzubechukwu.com">Built with love by <span>Nzubechukwu</span></a></div>
	<div class="text-center copy">
		<p>&copy; MyHealth 2022 All Right Reserved.</p>
	</div>`
};

footerRendering();


//Validating the book appointment form

let btnAppoint = document.querySelector('.appointBtn');
let fullName = document.querySelector('.fullName');
let emailAddress = document.querySelector('.emailAddress');
let phoneNum = document.querySelector('.phoneNum');
let inputDiv = document.querySelectorAll('.inputDiv');
let input = document.querySelectorAll('.input');
let appointmentBtn = document.querySelector('.appointBtn');
let select = document.querySelector('.select');
let booking = document.querySelector('.booking');
let sectionBooked = document.querySelector('.selected');

appointmentBtn.addEventListener('click', () => {
	let selectWarningSign = select.parentElement.children[1];
	inputDiv.forEach(ipt => {
      let getInput = ipt.children[0];
      let getInputValuee = getInput.value;
      let getWarningSign = ipt.children[1];

      if (getInput.type === 'text' && !getInputValuee.includes(' ')) {
      	 getWarningSign.style.display = 'inline-flex';
      	   ipt.style.border = '2px solid red';
      	   booking.style.top = '-2000px';
      	} else if (getInput.type === 'email' && !getInputValuee.includes('@gmail.com')) {
      		 getWarningSign.style.display = 'inline-flex';
      		   ipt.style.border = '2px solid red';
      		    booking.style.top = '-2000px';
      		} else if(getInput.type === 'number' && getInputValuee.length <= 10) {
      			 getWarningSign.style.display = 'inline-flex';
      			   ipt.style.border = '2px solid red';
      			    booking.style.top = '-2000px';
      			} else if(getInputValuee === 'Select Here'){
      				 getWarningSign.style.display = 'inline-flex';
      				   ipt.style.border = '2px solid red';
      				    booking.style.top = '-2000px';
      				} else {
      					let selectValue = select.value;
      					 sectionBooked.innerText = selectValue;
      					booking.style.top = '0';
      					 ipt.style.border = 'none';

      				};
	});
});


input.forEach(getInputValue => {
	getInputValue.addEventListener('blur', () => {
		let getval = getInputValue.value;
		let getInputPa = getInputValue.parentElement;
		let good = getInputPa.querySelector('.good');
		let bad = getInputPa.querySelector('.bad'); 

//validating user name
	if (getInputValue.type === 'text' ) {
		 if (!getval || !getval.includes(' ')) {
       
       bad.style.display = 'inline-flex';
       good.style.display = 'none';
       getInputPa.style.border = '2px solid red';
       booking.style.top = '-2000px';
          } else {
 good.style.display = 'inline-flex';
       bad.style.display = 'none';
          getInputPa.style.border = 'none';
          };
		};

//Validating user email
		if (getInputValue.type === 'email' ) {
		 if (!getval || !getval.includes('@gmail.com')) {
       
       bad.style.display = 'inline-flex';
       good.style.display = 'none';
       getInputPa.style.border = '2px solid red';
        booking.style.top = '-2000px';
          } else {
 good.style.display = 'inline-flex';
       bad.style.display = 'none';
         getInputPa.style.border = 'none';
          };
		};


//Validating phone number
	if (getInputValue.type === 'number' ) {
		 if (!getval || getval.length <= 10 ) {
       
       bad.style.display = 'inline-flex';
       good.style.display = 'none';
       getInputPa.style.border = '2px solid red';
        booking.style.top = '-2000px';
          } else {
 good.style.display = 'inline-flex';
       bad.style.display = 'none';
       getInputPa.style.border = 'none';
          };
		};

	});
});

//validation of select option
select.addEventListener('click', () => {
	let selectParent = select.parentElement;
	let bad  = selectParent.querySelector('.bad');
	let good = selectParent.querySelector('.good')
  if (select.value === 'Select Here') {
  	 bad.style.display = 'inline-flex';
       good.style.display = 'none';
       selectParent.style.border = '2px solid red';
        booking.style.top = '-2000px';
  } else {
  	 good.style.display = 'inline-flex';
       bad.style.display = 'none';
       selectParent.style.border = 'none';
  }
});

let x = document.querySelector('.x');
x.addEventListener('click', () => {
	x.parentElement.parentElement.style.top = '-2000px';
});

/*
//ADDING ANIMATION
let getAnimated = document.querySelectorAll('.animate');

let revealSection = (entries, observer) => {
const [entry] = entries;
console.log(entry);
entry.target.classList.remove('animation');
getAnimated.style.transition = '1s';
};
const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});
getAnimated.forEach(animation => {
	sectionObserver.observe(animation);
	animation.classList.add('animation');
});*/
