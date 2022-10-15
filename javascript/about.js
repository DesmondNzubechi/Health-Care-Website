
let aboutPage = document.querySelector('.about');


let about = 
{
	abt: 'ABOUT US',
	abtImg: 'images/hospitalrv.png',
	firstP: `MyHealth has been servicing the local
	 community since 1990. The doctors from our clinics
	  have always endeavoured to provide the highest
	   quality of service with professionalism and 
	   compassion.  With the wide range of special 
	   areas of interest, expertise and skills among
	    the medical staff at our clinics, you will find 
	    all your healthcare needs will be well managed. 
	     All the staff believe in holistic management of
	      each individual, encompassing mental, physical 
	      and emotional health.`,
	   secondP: `Our staff will inform you about your health 
	   condition, treatment options and care planning 
	   in a way that you can understand. It means that
	    we want to know what is important to you and 
	    partner with you in making decisions that meet 
	    your individual needs.` ,

};

let renderAbout = () => {
aboutPage.innerHTML = `<div class="row abtt animate">
  		<div class="col-sm-12 col-md-12 col-lg-6">
  			<p class="abtHead">${about.abt}</p>
  			<p class="abtDes">${about.firstP}</p>
	      <p class="abtDes">${about.secondP}</p>
	    <div class="abtSoc">
  				<i class="fa-brands fa-facebook"></i>
  				<i class="fa-brands fa-twitter"></i>
  				<i class="fa-brands fa-instagram"></i>
  				<i class="fa-brands fa-linkedin"></i>
  			

  			</div>
  		</div>
  		<div class="col-sm-12 col-md-12 col-lg-6 abtPics animate">
  			<img  src="${about.abtImg}">
  		</div>
  	</div>
  	`
}

renderAbout();