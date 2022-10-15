
//DOCTOR HENRY PROFILE
let henry = {
	name: 'Doctor Henry',
	img: 'images/doctors/henryrv.png',
	Fdescrip: `Dr Henry completed his studies in Medicine
	 at the University of Nigeria Nsukka, and graduated in 2006. His
	  hospital training was through the Shanahan Hospital.
	  He has always enjoyed working with
	  people and the various challenges in general medicine 
	  thus pursued a path in General Practice.`,
	Sdescrip: `In his spare time He enjoys spending
	 time with his family. He especially enjoys activities
	  with his two son.`,
};
let henryPro = document.querySelector('.henry');
let renderHenry = () => {
	henryPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${henry.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${henry.name}</p>
  			<p>${henry.Fdescrip}</p>
  			<p>${henry.Sdescrip}</p>
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
renderHenry();