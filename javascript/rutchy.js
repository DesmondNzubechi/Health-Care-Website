//nurse Rutchy PROFILE
let Rutchy = {
	name: 'Nurse Rutchy',
	img: 'images/nurses/Rutchyrv.png',
	Fdescrip: `Rutchy loves helping people of 
	all ages and prides himself on being a caring 
	and diligent nurse. She particularly enjoys
	 relating to her patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Rutchy enjoys spending 
	time with her  family at USA including trips to the 
	Zoo and all things Lego .`,
};
let RutchyPro = document.querySelector('.Rutchy');
let renderRutchy = () => {
	RutchyPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${Rutchy.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${Rutchy.name}</p>
  			<p>${Rutchy.Fdescrip}</p>
  			<p>${Rutchy.Sdescrip}</p>
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
renderRutchy();
