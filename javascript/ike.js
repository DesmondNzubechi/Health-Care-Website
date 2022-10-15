//DOCTOR IKE PROFILE
let ike = {
	name: 'Doctor Ike',
	img: 'images/doctors/ikerv.png',
	Fdescrip: `Dr Ike graduated from University
	 of Lagos in 2014 and completed his Fellowship 
	 at the Nigeria College of General Practitioners
	  in 2016`,
	Sdescrip: `He joined MyHealth Clinic in 2018 and 
	continues to find his work both challenging and 
	rewarding especially in the area of mental health. 
	Outside of the work, he has interest in photography
	and travel`,
};
let ikePro = document.querySelector('.ike');
let renderIke = () => {
	ikePro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${ike.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${ike.name}</p>
  			<p>${ike.Fdescrip}</p>
  			<p>${ike.Sdescrip}</p>
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
renderIke();



