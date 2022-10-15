//DOCTOR CLINTON PROFILE
let clinton = {
	name: 'Doctor Clinton',
	img: 'images/doctors/clintonrv.png',
	Fdescrip: `Clinton loves helping people of 
	all ages and prides himself on being a caring 
	and diligent Doctor. He particularly enjoys
	 relating to his patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Clinton enjoys spending 
	time with his young family at London including trips to the 
	Zoo and all things Lego.He also enjoys playing tennis .`,
};
let clintonPro = document.querySelector('.clinton');
let renderClinton = () => {
	clintonPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${clinton.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${clinton.name}</p>
  			<p>${clinton.Fdescrip}</p>
  			<p>${clinton.Sdescrip}</p>
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
renderClinton();
