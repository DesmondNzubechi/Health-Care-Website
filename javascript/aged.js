

//Contents on immunisation page
let servicesPageContent = [
 /*{
 	immHeading: 'IMMUNISATION',
 	immContent: `Vaccination is a vital part of preventive medicine, 
 	from new born babies through to adulthood. At our practices we have
 	 multiple immunisation practitioner nurses, who together with our doctors
 	  provide this service to our patients.`,
 	immBook: 'Book Now',
 	immImage: 'images/immuniseBg.png'
 },
 */
  {
  	tVHeading: 'AGED CARE',
 	tVContent: `We lead the way in aged care, providing specialised 
 	medical care for people over 65 years for issues including dementia,
 	 falls, continence problems and rheumatology.`,
 	tVBook: 'Book Now',
 	tVImage: 'images/AgedC.png',
  },
];

///rendering immunisaton content to its html page 
let mainMenu = document.querySelector('.travelVaccine');
function renderImmunisation() {

	 servicesPageContent.forEach(content => {
		mainMenu.innerHTML += `<div>
		<div class="row imm ">
			<div class="immT col-lg-5 col-md-6 col-sm-12 animate">
				<div class="topV">
			<p>${content.tVHeading}</p>
		</div>
				<p>
					${content.tVContent}</p>
				<p class="bt">
		<a href="#" class="bookNow">${content.tVBook} >></a>
	</p>
			</div>
			<div class="immI col-lg-5 col-md-6 col-sm-12 animate">
				<img src="${content.tVImage}" class="img-fluid">
			</div>
		</div>
	</div>`

	});
};
renderImmunisation();

//rendering patient form on html
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
               <option  value="Aged Care">AGED CARE</option> 
           </select>
                
			</div>
			<div>
				<button type="" class="subM">Submit </button>
			</div>
		</form>`;

};
renderForm();


//Displaying ppatient booking form when booking button is clicked
bookNow.addEventListener('click', () => {
	patientForm.style.top = '0';
});

let closeForm = document.querySelector('#closeForm');

//removing patient booking form when close button is clicked
closeForm.addEventListener('click', () => {
	patientForm.style.top = '-2000px';
});



let submitBtn = document.querySelector('.subM');
let inputt = document.querySelectorAll('.input');
let successful = document.querySelector('.patientFormRegStatFailed');
let unsuccessful = document.querySelector('.patientFormRegStatSuccess');

//displaying success and error message conditionally when submit button is clicked
submitBtn.addEventListener('click', () => {
inputt.forEach(checkValue => {
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
