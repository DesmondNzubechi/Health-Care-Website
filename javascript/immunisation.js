let mainMenu = document.querySelector('.main');

let immC = [
 {
 	immHeading: 'IMMUNISATION',
 	immContent: 'Vaccination is a vital part of preventive medicine, from new born babies through to adulthood. At our practices we have multiple immunisation practitioner nurses, who together with our doctors provide this service to our patients.',
 	immBook: 'Book Now',
 	immImage: 'images/immuniseBg.png'
 }
];

let renderImmunisation = () => {
	immC.forEach(content => {
		mainMenu.innerHTML += `<div>
		
		<div class="row imm">
			<div class="immT col-lg-5 col-md-6 col-sm-12">
				<div class="topV">
			<p>${content.immHeading}</p>
		</div>
				<p>
					${content.immContent}</p>
				<p class="bt">
		<a href="#" class="bookNow">${content.immBook} >></a>
	</p>
			</div>
			<div class="immI col-lg-5 col-md-6 col-sm-12">
				<img src="${content.immImage}" class="img-fluid">
			</div>
		</div>
	</div>`
	})
};



renderImmunisation();

let patientForm = document.querySelector('.patientForm');
let bookNow = document.querySelector('.bookNow');

function renderForm(argument) {
	patientForm.innerHTML = `<form class="formY">
			<div class="formYH">
				<i id="closeForm" class="fa-regular fa-x"></i>
				<p>
					Please Enter The Patients Details
				</p>
			</div>
			<div>
				<label>*Patient Name</label>
				<input type="text" class="input" name="" placeholder="Full Name">
			</div>
			<div>
				<label>*Email</label>
				<input type="text" class="input" name="" placeholder="Email Address">
			</div>
			<div>
				<label>*Location</label>
				<input type="text" class="input" name="" placeholder="City Name">
			</div>
			<div>
				<label>*Booking For</label>
				<select disabled>
               <option  value="Immunisation"> Immunisation</option> 
           </select>
                
			</div>
			<div>
				<button type="submit" class="subM">Submit </button>
			</div>
		</form>`;

};

renderForm();

bookNow.addEventListener('click', () => {
	patientForm.style.top = '0';
});

let closeForm = document.querySelector('#closeForm');

closeForm.addEventListener('click', () => {
	patientForm.style.top = '-1000px';
});



let submitBtn = document.querySelector('.subM');
let input = document.querySelectorAll('.input');
let successful = document.querySelector('.patientFormRegStatFailed');
let unsuccessful = document.querySelector('.patientFormRegStatSuccess');

submitBtn.addEventListener('click', () => {
input.forEach(checkValue => {
 
	if (checkValue.value === '') {
    successful.style.top = '30%';
	} else {
      unsuccessful.style.top = '30%';
	};
})

});


//clear form reg status
function unsuccesfulMsg() {
	if (unsuccessful.style.top === '-1000px') {
		unsuccessful.style.top = '-1000px';
	} else {
setInterval(() =>{
	unsuccessful.style.top = '-1000px';
}, 4000);
	};
};

unsuccesfulMsg();

//clear form reg status
function successMsg() {
	if (successful.style.top === '-1000px') {
		successful.style.top = '-1000px';
	} else {
setInterval(() =>{
	successful.style.top = '-1000px';
}, 4000);
	};
};

successMsg();
