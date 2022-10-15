//nurse CLINTON PROFILE
let Sophia = {
	name: 'Nurse Sophia',
	img: 'images/nurses/Sophiarv.png',
	Fdescrip: `Sophia loves helping people of 
	all ages and prides herself on being a caring 
	and diligent nurse. He particularly enjoys
	 relating to her patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Sophia enjoys spending 
	time with her young family .She also enjoys playing tennis .`,
};
let SophiaPro = document.querySelector('.Sophia');
let renderSophia = () => {
	SophiaPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${Sophia.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${Sophia.name}</p>
  			<p>${Sophia.Fdescrip}</p>
  			<p>${Sophia.Sdescrip}</p>
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
renderSophia();
