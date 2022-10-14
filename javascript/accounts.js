let logIn = document.querySelector('.login');
let signUp = document.querySelector('.signUp');
let logInView = document.querySelector('.logInView');
let signUpView = document.querySelector('.signUpView');
let button =  document.querySelectorAll('button');


signUpView.addEventListener('click', () => {
logIn.style.display = 'none';
signUp.style.display = 'block';
});

logInView.addEventListener('click', () => {
logIn.style.display = 'block';
signUp.style.display = 'none';
});

button.forEach(btn => {
	btn.addEventListener('submit', (e) => e.prevDefault())
});
let footer = document.querySelector('.foote');

function footerRendering() {
	footer.innerHTML = `<div class="row foot">
		<div class="col-lg-4 col-md-4 col-sm-12 descrip">
			<p class="descripMainH">MyHealthCare</p>
			<p class="descripSubH">MyHealthCare Is an adminitrative support entry and clinical service</p>
      <div class="soc">
      	<i class="fa-brands fa-linkedin-in"></i>
      	<i class="fa-brands fa-twitter"></i>
      	<i class="fa-brands fa-facebook"></i>
      	<!--<i class="fa-brands fa-instagram"></i>-->
      </div>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 importantL">
			<p>Important Links</p>
			<div>
				<a href="index.html">Home</a>
				<a href="#">Privacy Policy</a>
				<a href="about.html">About</a>
				<a href="doctors.html">Team</a>
			</div>

		</div>
		<div class="col-lg-4 col-md-4 col-sm-12 subscribe">
			<p>
				Subscribe To Our Newsletter
			</p>
			<div>
				<form>
				<input type="email" name="email" placeholder="Email Address" required>
				<button type="submit" class="newsLBt">Subscribe Now</button>
			</div>
		</div>
	</div>
	<div class="dev text-center"><a href="https://nzubechukwu.netlify.app">Built with love by <span>Nzubechukwu</span></a></div>
	<div class="text-center copy">
		<p>&copy; MyHealth 2022 All Right Reserved.</p>
	</div>`
};

footerRendering();


