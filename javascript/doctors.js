let slide = document.querySelector('.slide');


let doctors = [
{
	doctorName: 'Dr. Chidozie',
	profile: 'View Profile',
	link: 'chidozie.html',
	doctorImage: 'images/doctors/Chidoziervv.png'
},

{
	doctorName: 'Dr. Chinny',
	profile: 'View Profile',
	link: 'chinny.html',
	doctorImage: 'images/doctors/chinnyrvv.png'
},
{
	doctorName: 'Dr. Clinton',
	profile: 'View Profile',
	link: 'clinton.html',
	doctorImage: 'images/doctors/clintonrvv.png'
},
{
	doctorName: 'Dr. Esther',
	profile: 'View Profile',
	link: 'esther.html',
	doctorImage: 'images/doctors/estherrvv.png'
},
{
	doctorName: 'Dr. Ebuka',
	profile: 'View Profile',
	link: 'ebuka.html',
	doctorImage: 'images/doctors/ebukarvv.png'
},
{
	doctorName: 'Dr. Freeman',
	profile: 'View Profile',
	link: 'freeman.html',
	doctorImage: 'images/doctors/freemanrvv.png'
},
{
	doctorName: 'Dr. Henry',
	profile: 'View Profile',
	link: 'henry.html',
	doctorImage: 'images/doctors/henryrvv.png'
},
{
	doctorName: 'Dr. Ike',
	profile: 'View Profile',
	link: 'ike.html',
	doctorImage: 'images/doctors/ikervv.png'
},
{
	doctorName: 'Dr. Nzubechi',
	profile: 'View Profile',
	link: 'nzubechi.html',
	doctorImage: 'images/doctors/nzubervv.png'
},
{
	doctorName: 'Dr. Maria',
	profile: 'View Profile',
	link: 'maria.html',
	doctorImage: 'images/doctors/mariarvv.png'
},
{
	doctorName: 'Dr. Musk',
	profile: 'View Profile',
	link: 'musk.html',
	doctorImage: 'images/doctors/musk.png'
},
{
	doctorName: 'Dr. Precious',
	profile: 'View Profile',
	link: 'precious.html',
	doctorImage: 'images/doctors/preciousrvv.png'
},

];



let renderDoctors = () => {
	doctors.forEach(doctor => {
		slide.innerHTML += `<div class="teamlead animate col-sm-12 col-lg-3 col-md-6">
   		<div>
   		<div class="doc-img">
   			<img src="${doctor.doctorImage}">
   		</div>
   			<div class="team-bio">
   			<span class="nn">
   			<span class="namE"><strong>${doctor.doctorName}</strong></span>
   			<!--
   			<span class="specialty">Autopedic</span>
   -->
   		</span>
   		<!--
   			<span class="ss">
   				<span class="patientS "> 2K+ Patients</span>
   				<span class="rating"><i class="fa-sharp fa-solid fa-star"> </i>4.8(500)</span>
   			</span>
   		-->
   		</div>
       <p class="viewProfile">
   				<a href="${doctor.link}" >${doctor.profile}</a>
   			</p>
   		</div>
   		</div>
   		`;
	});
};
	renderDoctors();





//DOCTOR ESTHER PROFILE
let esther = {
	name: 'Doctor Esther',
	img: 'images/doctors/estherrv.png',
	Fdescrip: `Dr Esther joined our team in 2020.
	 She graduated from Enugu state University and completed her
	  hospital training through Parklane Hospital. she enjoys 
	  working with people and has particular interests in family
	   medicine and skin cancer medicine.`,
	Sdescrip: `She has a special interest in skin 
	cancer, and has a Diploma in Skin Cancer Medicine. Esther
	 can provide head to toe skin checks and management options 
	 based on current best evidence guidelines`,
};
let estherPro = document.querySelector('.esther');
let renderEsther = () => {
	estherPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${esther.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${esther.name}</p>
  			<p>${esther.Fdescrip}</p>
  			<p>${esther.Sdescrip}</p>
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
renderEsther();


//DOCTOR EBUKA PROFILE
let ebuka = {
	name: 'Doctor Ebuka',
	img: 'images/doctors/ebukarv.png',
	Fdescrip: `Dr Ebuka graduated from 
	Medicine at Nnamdi Azikiwe University in 2018 and went on 
	to work in a variety of medical areas in hospitals. 
	During this time he completed additional training in 
	men’s health and obtained a Diploma in Obstetrics
	 and Gynaecology.`,
	Sdescrip: `Perhaps surprisingly, in his free time,
	 he enjoys going to the gym, fermenting foods, reading 
	 non-fiction and playing strategy board games.`,
};
let ebukaPro = document.querySelector('.ebuka');
let renderEbuka = () => {
	ebukaPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${ebuka.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${ebuka.name}</p>
  			<p>${ebuka.Fdescrip}</p>
  			<p>${ebuka.Sdescrip}</p>
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
renderEbuka();



//DOCTOR FREEMAN PROFILE
let freeman = {
	name: 'Doctor Chidozie',
	img: 'images/doctors/freemanrv.png',
	Fdescrip: `Dr Mia Sovers graduated from Oxford University
	 in 2015. She has been at MyHealth Clinic since 2016 and enjoys general medicine.
	 Over the years Freeman has established a holistic care 
	 approach with his patients and their families`,
	Sdescrip: `During his free time,
	 he enjoys going to the gym, fermenting foods, reading 
	 non-fiction and playing strategy board games.`,
};
let freemanPro = document.querySelector('.freeman');
let renderFreeman = () => {
	freemanPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${freeman.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${freeman.name}</p>
  			<p>${freeman.Fdescrip}</p>
  			<p>${freeman.Sdescrip}</p>
  			<div class="drSoc">
  				<i class="fa-brands fa-facebook"></i>
  				<i class="fa-brands fa-twitter"></i>
  				<i class="fa-brands fa-instagram"></i>
  				<i class="fa-brands fa-linkedin"></i>
  				<i class="fa-brands fa-whatsapp"></i>
  				<i class="fa-brands fa-square-whatsapp"></i>

  			</div>freeman
  		</div>
  	</div>`
};
renderFreeman();



//DOCTOR HENRY PROFILE
let henry = {
	name: 'Doctor Henry',
	img: 'images/doctors/henryrv.png',
	Fdescrip: `Dr Henry completed his studies in Medicine
	 at the University of Nigeria Nsukka, and graduated in 2006. His
	  hospital training was through the Shanahan Hospital.
	  He has always enjoyed working with
	  people and the various challenges in general medicine 
	  thus pursued a path in General Practice.`,
	Sdescrip: `In his spare time He enjoys spending
	 time with his family. He especially enjoys activities
	  with his two son.`,
};
let henryPro = document.querySelector('.henry');
let renderHenry = () => {
	henryPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${henry.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${henry.name}</p>
  			<p>${henry.Fdescrip}</p>
  			<p>${henry.Sdescrip}</p>
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
renderHenry();




//DOCTOR IKE PROFILE
let ike = {
	name: 'Doctor Ike',
	img: 'images/doctors/ikerv.png',
	Fdescrip: `Dr Ike graduated from University
	 of Lagos in 2014 and completed his Fellowship 
	 at the Nigeria College of General Practitioners
	  in 2016`,
	Sdescrip: `He joined MyHealth Clinic in 2018 and 
	continues to find his work both challenging and 
	rewarding especially in the area of mental health. 
	Outside of the work, he has interest in photography
	and travel`,
};
let ikePro = document.querySelector('.ike');
let renderIke = () => {
	ikePro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${ike.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${ike.name}</p>
  			<p>${ike.Fdescrip}</p>
  			<p>${ike.Sdescrip}</p>
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
renderIke();




//DOCTOR NZUBECHI PROFILE
let nzubechi = {
	name: 'Doctor Nzubechi',
	img: 'images/doctors/nzubechirv.png',
	Fdescrip: `Dr Nzubechi completed her studies in 
	Medicine at Enugu State University in 2015.
	 After several years of residency, she undertook training 
	 with The Nigeria College of General Practitioners,
	  where she was the awarded. `,
	Sdescrip: `Outside of medicine, She loves spending
	 time with her young family whilst finding opportunities 
	 to pursue her love of basketball and cooking.`,
};
let nzubechiPro = document.querySelector('.nzubechi');
let renderNzubechi = () => {
	nzubechiPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${nzubechi.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${nzubechi.name}</p>
  			<p>${nzubechi.Fdescrip}</p>
  			<p>${nzubechi.Sdescrip}</p>
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
renderNzubechi();




//DOCTOR MARIA PROFILE
let maria = {
	name: 'Doctor Maria',
	img: 'images/doctors/mariarv.png',
	Fdescrip: `Dr Maria started at MyHealth Clinic
	 in 2017 and obtained her Fellowship of
	 the NUM in 2019. She enjoys the variety of general
	  practice and the surprises each day brings.`,
	Sdescrip: `Maria usually is available on Tuesdays all 
	day and Thursday afternoons. As well as clinical work,
	 she also has interests in medical education and in
	  medical editing.`,
};
let mariaPro = document.querySelector('.maria');
let renderMaria = () => {
	mariaPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${maria.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${maria.name}</p>
  			<p>${maria.Fdescrip}</p>
  			<p>${maria.Sdescrip}</p>
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
renderMaria();




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
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${musk.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
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


//DOCTOR PRECIOUS PROFILE
let precious = {
	name: 'Doctor Precious',
	img: 'images/doctors/preciousrv.png',
	Fdescrip: `Dr Precious has been providing a
	 service to the MyHealth community for a number
	  of years now, and has assisted in the expansion of the 
	  clinic, which now includes God's own health Centre.`,
	Sdescrip: `She has special interests in cardiology,
	 emergency medicine, and the provision of aged care 
	 for our patients.`,
};
let preciousPro = document.querySelector('.precious');
let renderPrecious = () => {
	preciousPro.innerHTML = `<div class="row container-fluid dr">
  		<div class="col-sm-12 col-lg-5 col-md-12 drImage">
  			<img src="${precious.img}">
  		</div>
  		<div class="col-sm-12 col-lg-5 col-md-12 drDescript">
  			<p class="drName">${precious.name}</p>
  			<p>${precious.Fdescrip}</p>
  			<p>${precious.Sdescrip}</p>
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
renderPrecious();

 

 