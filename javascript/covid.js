

let healthNews = document.querySelector('.healthNews');
let replaceImg = {image: 'images/covid.jpg'};
	let getNewsApi = async function() {
	try{
		let getNes = await fetch(`http://api.mediastack.com/v1/news?
			access_key=73f391e95c48456f79f368e5df4d5e74
			&categories=health
			&languages=en
			&keywords=covid
			&limit=12
			
	`)
		let res = await getNes.json();
		let getdat = res.data;
		getdat.forEach(function(data) {
			healthNews.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-12"><div class="newS">
  			<p class="title">${data.title}</p>
  			<img class="newsImg img-flui" src="${!data.image ? replaceImg.image : data.image }">
  			<p class="description">${data.description}
  			<a class="readMore text-center" href="${data.url}">Read More >></a></p>
  			
  		</div></div>`
  		console.log(data)
		})
	} catch(err) {
		console.log(err)
	};
};
/*
let body = document.querySelector("body");
*/
window.addEventListener('load', getNewsApi())
