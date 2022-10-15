
//DOCTOR EBUKA PROFILE
let ebuka = {
	name: 'Doctor Ebuka',
	img: 'images/doctors/ebukarv.png',
	Fdescrip: `Dr Ebuka graduated from 
	Medicine at Nnamdi Azikiwe University in 2018 and went on 
	to work in a variety of medical areas in hospitals. 
	During this time he completed additional training in 
	men’s health and obtained a Diploma in Obstetrics
	 and Gynaecology.`,
	Sdescrip: `Perhaps surprisingly, in his free time,
	 he enjoys going to the gym, fermenting foods, reading 
	 non-fiction and playing strategy board games.`,
};
let ebukaPro = document.querySelector('.ebuka');
let renderEbuka = () => {
	ebukaPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${ebuka.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${ebuka.name}</p>
  			<p>${ebuka.Fdescrip}</p>
  			<p>${ebuka.Sdescrip}</p>
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
renderEbuka();

