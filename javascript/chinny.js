//DOCTOR CHINNY PROFILE
let chinny = {
	name: 'Doctor Chinny',
	img: 'images/doctors/chinnyrv.png',
	Fdescrip: `Dr Chinny is a friendly and approachable doctor.
	She enjoys all aspects of General Practice and she is 
	passionate about empowering other people.`,
	Sdescrip: `She graduated from Nnamdi Azikiwe University’s 
	School of Medicine in 2019, to realise her passion in helping
	 others achieve their best health. He has gained a wide range 
	 of experience including emergency medicine,
	  and children’s health, at Eastern Health.`,
};
let chinnyPro = document.querySelector('.chinny');
let renderChinny = () => {
	chinnyPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${chinny.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${chinny.name}</p>
  			<p>${chinny.Fdescrip}</p>
  			<p>${chinny.Sdescrip}</p>
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
renderChinny();

