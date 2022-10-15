//DOCTOR MARIA PROFILE
let maria = {
	name: 'Doctor Maria',
	img: 'images/doctors/mariarv.png',
	Fdescrip: `Dr Maria started at MyHealth Clinic
	 in 2017 and obtained her Fellowship of
	 the NUM in 2019. She enjoys the variety of general
	  practice and the surprises each day brings.`,
	Sdescrip: `Maria usually is available on Tuesdays all 
	day and Thursday afternoons. As well as clinical work,
	 she also has interests in medical education and in
	  medical editing.`,
};
let mariaPro = document.querySelector('.maria');
let renderMaria = () => {
	mariaPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${maria.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${maria.name}</p>
  			<p>${maria.Fdescrip}</p>
  			<p>${maria.Sdescrip}</p>
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
renderMaria();

