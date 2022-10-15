//DOCTOR ESTHER PROFILE
let esther = {
	name: 'Doctor Esther',
	img: 'images/doctors/estherrv.png',
	Fdescrip: `Dr Esther joined our team in 2020.
	 She graduated from Enugu state University and completed her
	  hospital training through Parklane Hospital. she enjoys 
	  working with people and has particular interests in family
	   medicine and skin cancer medicine.`,
	Sdescrip: `She has a special interest in skin 
	cancer, and has a Diploma in Skin Cancer Medicine. Esther
	 can provide head to toe skin checks and management options 
	 based on current best evidence guidelines`,
};
let estherPro = document.querySelector('.esther');
let renderEsther = () => {
	estherPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${esther.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${esther.name}</p>
  			<p>${esther.Fdescrip}</p>
  			<p>${esther.Sdescrip}</p>
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
renderEsther();
