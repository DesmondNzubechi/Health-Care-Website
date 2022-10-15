//DOCTOR CLINTON PROFILE
let Chinenye = {
	name: 'Nurse Chinenye',
	img: 'images/nurses/Chinenyerv.png',
	Fdescrip: `Chinenye loves helping people of 
	all ages and prides himself on being a caring 
	and diligent nurse. She particularly enjoys
	 relating to her patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Chinenye enjoys spending 
	time with her young family including trips to the 
	Zoo and all things Lego.He also enjoys playing tennis .`,
};
let ChinenyePro = document.querySelector('.chinenye');
let renderChinenye = () => {
	ChinenyePro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${Chinenye.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${Chinenye.name}</p>
  			<p>${Chinenye.Fdescrip}</p>
  			<p>${Chinenye.Sdescrip}</p>
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
renderChinenye();
