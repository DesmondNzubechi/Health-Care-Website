//DOCTOR MUSK PROFILE
let musk = {
	name: 'Doctor Musk',
	img: 'images/doctors/musk.png',
	Fdescrip: `Dr Musk graduated from Medicine at 
	University of Harvard in 1995. He worked at several
	 hospitals in various medical areas and went on to 
	 obtain his Fellowship in General Practice.`,
	Sdescrip: `He is a father of three 
	 and when not at work he likes being a spectator 
	 in sports. 
	 He shares many things in common with people in 
	 general- he loves Fridays`,
};
let muskPro = document.querySelector('.musk');
let renderMusk = () => {
	muskPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${musk.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${musk.name}</p>
  			<p>${musk.Fdescrip}</p>
  			<p>${musk.Sdescrip}</p>
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
renderMusk();

