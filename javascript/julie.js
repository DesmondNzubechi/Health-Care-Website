//JULIE PROFILE
let Julie = {
	name: 'Nurse Julie',
	img: 'images/nurses/julierv.png',
	Fdescrip: `Julie loves helping people of 
	all ages and prides herself on being a caring 
	and diligent nurse. She particularly enjoys
	 relating to his patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Julie enjoys spending 
	time with his young family at Lagos including trips to the 
	Zoo and all things .She also enjoys playing tennis .`,
};
let JuliePro = document.querySelector('.julie');
let renderJulie = () => {
	JuliePro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${Julie.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${Julie.name}</p>
  			<p>${Julie.Fdescrip}</p>
  			<p>${Julie.Sdescrip}</p>
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
renderJulie();
