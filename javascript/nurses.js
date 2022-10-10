let slide = document.querySelector('.slide');



let nurses = [
  {
	nurseName: 'Chukwubuike',
	profile: 'View Profile',
	link: 'buike.html',
	nurseImage: 'images/nurses/buikervv.png'
},
{
	nurseName: 'Chinenye',
	profile: 'View Profile',
	link: 'chinenye.html',
	nurseImage: 'images/nurses/chinenyervv.png'
},
{
	nurseName: 'Julie',
	profile: 'View Profile',
	link: 'julie.html',
	nurseImage: 'images/nurses/juliervv.png'
},
{
	nurseName: 'Mark',
	profile: 'View Profile',
	link: 'mark.html',
	nurseImage: 'images/nurses/markrvv.png'
},
{
	nurseName: 'Rutchy',
	profile: 'View Profile',
	link: 'rutchy.html',
	nurseImage: 'images/nurses/rutchyrvv.png'
},
{
	nurseName: 'Sophia',
	profile: 'View Profile',
	link: 'sophia.html',
	nurseImage: 'images/nurses/sophiarvv.png'
},

];


let renderNurses = () => {
	nurses.forEach(nurse => {
		slide.innerHTML += `<div class="teamlead animate col-sm-12 col-lg-4 col-md-6">
   		<div class="nurse">
   		<div class="doc-img">
   			<img src="${nurse.nurseImage}">
   		</div>
   			<div class="team-bio">
   			<span class="nn">
   			<span class="namE"><strong>${nurse.nurseName}</strong></span>
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
   				<a href="${nurse.link}" >${nurse.profile}</a>
   			</p>
   		</div>
   		</div>
   		`;
	});
};
	renderNurses();


