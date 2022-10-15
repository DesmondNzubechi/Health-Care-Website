//DOCTOR CLINTON PROFILE
let Chukwubuike = {
	name: 'Nurse Chukwubuike',
	img: 'images/nurses/buikerv.png',
	Fdescrip: `Chukwubuike loves helping people of 
	all ages and prides himself on being a caring 
	and diligent nurse. He particularly enjoys
	 relating to his patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Chukwubuike enjoys spending 
	time with his young family at London including trips to the 
	Zoo and all things Lego.He also enjoys playing tennis .`,
};
let ChukwubuikePro = document.querySelector('.buike');
let renderChukwubuike = () => {
	ChukwubuikePro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${Chukwubuike.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${Chukwubuike.name}</p>
  			<p>${Chukwubuike.Fdescrip}</p>
  			<p>${Chukwubuike.Sdescrip}</p>
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
renderChukwubuike();
