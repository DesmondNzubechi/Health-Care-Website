let header = document.querySelector('.headin');

function renderHeader(argument) {
	header.innerHTML = `<!--logo-->
	<div class="logo">
		<a href="index.html"><i class="fa-solid fa-notes-medical"></i>Healthy</a>
	</div>
	<!--nav links-->
	<div class="links">
		<ul> <li><a href="index.html">Home</a></li> 
			<li class="drop"><a class="subnav">Services </a><i class="fa-sharp fa-solid fa-caret-down" id="down"></i> <i class="fa-sharp fa-solid fa-caret-up" id="up"></i>
				<ul class="drp">
					<li><a href="Immunisation.html">< Immunisation</a></li>
					<li><a href="Surgery.html">< Medical Surgery</a></li>
					<li><a href="Skin.html">< Skin Care</a></li>
					<li><a href="Fitnes.html">< Physical Fitnes</a></li>
					<li><a href="travel_vaccine.html">< Travel Vaccination</a></li>
					<li><a href="Antenatal.html">< Pregnancy Antenatal</a></li>
					<li><a href="aged.html">< Aged Care</a></li>
				</ul></li> 
				<li><a href="">About</a></li>
			<li class="drop abt"><a class="subnav">Our Team</a> <i class="fa-sharp fa-solid fa-caret-down" id="downn"></i> <i class="fa-sharp fa-solid fa-caret-up" id="upp"></i>
      <ul class="sub">
		<li><a href="Doctors.html">< Our Doctors</a></li>
		<li><a href="Nurses.html">< Our Nurses</a></li>
		<li><a href="Management.html">< Our Management</a></li>
      </ul>
			</li>
			<li><a href="#">Contact</a></li>
		</ul>
	</div>
	
	<!--accounts-->
	<div class="acct">
		<li class="ac">Account <i class="fa-solid fa-user"></i></li>
		<ul class="users">
			<li><a href="accounts.html" class="sign">Sign Up</a></li>
		</ul>
	</div>
	<div class="bars">
		<i id="open" class="fa-solid fa-bars"></i>
		<i id="close" class="fa-regular fa-x"></i>
	</div>`;
};

renderHeader();
