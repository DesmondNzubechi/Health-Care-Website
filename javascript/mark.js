//nurse Mark PROFILE
let Mark = {
	name: 'Nurse Mark',
	img: 'images/nurses/Markrv.png',
	Fdescrip: `Mark loves helping people of 
	all ages and prides himself on being a caring Nurse . He particularly enjoys
	 relating to his patients and working with them 
	 to achieve their best health outcomes.`,
	Sdescrip: `Outside work, Mark enjoys spending 
	time with his young family at Abuja including trips to the 
	Zoo .He also enjoys going to gym .`,
};
let MarkPro = document.querySelector('.Mark');
let renderMark = () => {
	MarkPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 animate drImage">
  			<img src="${Mark.img}">
  		</div>
  		<div class="col-sm-12 animate col-lg-5 col-md-12 drDescript">
  			<p class="drName">${Mark.name}</p>
  			<p>${Mark.Fdescrip}</p>
  			<p>${Mark.Sdescrip}</p>
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
renderMark();
