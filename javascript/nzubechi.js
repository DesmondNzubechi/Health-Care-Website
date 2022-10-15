//DOCTOR NZUBECHI PROFILE
let nzubechi = {
	name: 'Doctor Nzubechi',
	img: 'images/doctors/nzuberv.png',
	Fdescrip: `Dr Nzubechi completed her studies in 
	Medicine at Enugu State University in 2015.
	 After several years of residency, she undertook training 
	 with The Nigeria College of General Practitioners,
	  where she was the awarded. `,
	Sdescrip: `Outside of medicine, She loves spending
	 time with her young family whilst finding opportunities 
	 to pursue her love of basketball and cooking.`,
};
let nzubechiPro = document.querySelector('.nzubechi');
let renderNzubechi = () => {
	nzubechiPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${nzubechi.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${nzubechi.name}</p>
  			<p>${nzubechi.Fdescrip}</p>
  			<p>${nzubechi.Sdescrip}</p>
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
renderNzubechi();


