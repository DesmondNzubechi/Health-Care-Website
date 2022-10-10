//DOCTOR CHIDOZIE PROFILE
let chidozie = [ {
	name: 'Doctor Chidozie',
	img: 'images/doctors/chidozierv.png',
	Fdescrip: `Dr Chidozie graduated from Lagos state
	 university in 2016, and has recently jointed the 
	 team at MyHealth Medical Centre as a GP registrar.
	  Prior to this, he trained at Unique Healthiness, 
	  which includes rotations in psychiatry, gynaecology 
	  and rehabilitation.`,
	Sdescrip: `Perhaps surprisingly, in his free time,
	 he enjoys going to the gym, fermenting foods, reading 
	 non-fiction and playing strategy board games.`,
}];
let chidoziePro = document.querySelector('.chidozie');
let renderChidozie = () => {

chidozie.forEach( chidozie => {

	chidoziePro.innerHTML += `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${chidozie.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${chidozie.name}</p>
  			<p>${chidozie.Fdescrip}</p>
  			<p>${chidozie.Sdescrip}</p>
  			<div class="drSoc"><i class="fa-brands fa-facebook"></i>
  				<i class="fa-brands fa-twitter"></i>
  				<i class="fa-brands fa-instagram"></i>
  				<i class="fa-brands fa-linkedin"></i>
  				<i class="fa-brands fa-whatsapp"></i>
  				<i class="fa-brands fa-square-whatsapp"></i>

  			</div>
  		</div>
  	</div>`
  });
};
renderChidozie();