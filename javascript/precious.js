//DOCTOR PRECIOUS PROFILE
let precious = {
	name: 'Doctor Precious',
	img: 'images/doctors/preciousrv.png',
	Fdescrip: `Dr Precious has been providing a
	 service to the MyHealth community for a number
	  of years now, and has assisted in the expansion of the 
	  clinic, which now includes God's own health Centre.`,
	Sdescrip: `She has special interests in cardiology,
	 emergency medicine, and the provision of aged care 
	 for our patients.`,
};
let preciousPro = document.querySelector('.precious');
let renderPrecious = () => {
	preciousPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${precious.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${precious.name}</p>
  			<p>${precious.Fdescrip}</p>
  			<p>${precious.Sdescrip}</p>
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
renderPrecious();

 

 