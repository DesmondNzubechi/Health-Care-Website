//DOCTOR FREEMAN PROFILE
let freeman = {
	name: 'Doctor Freeman',
	img: 'images/doctors/freemanrv.png',
	Fdescrip: `Dr Freeman graduated from Oxford University
	 in 2015. He has been at MyHealth Clinic since 2016 and enjoys general medicine.
	 Over the years Freeman has established a holistic care 
	 approach with his patients and their families`,
	Sdescrip: `During his free time,
	 he enjoys going to the gym, fermenting foods, reading 
	 non-fiction and playing strategy board games.`,
};
let freemanPro = document.querySelector('.freeman');
let renderFreeman = () => {
	freemanPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${freeman.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${freeman.name}</p>
  			<p>${freeman.Fdescrip}</p>
  			<p>${freeman.Sdescrip}</p>
  			<div class="drSoc">
  				<i class="fa-brands fa-facebook"></i>
  				<i class="fa-brands fa-twitter"></i>
  				<i class="fa-brands fa-instagram"></i>
  				<i class="fa-brands fa-linkedin"></i>
  				<i class="fa-brands fa-whatsapp"></i>
  				<i class="fa-brands fa-square-whatsapp"></i>

  			</div>
  		</div>
  	</div>`
};
renderFreeman();
