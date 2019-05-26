 fetch('article.html.tpl')
.then(response => response.text())
.then(templateString => {
let parserHTML = new DOMParser();
let template = parserHTML.parseFromString(templateString, 'text/html').body.firstChild;

     fetch('https://my-json-server.typicode.com/shahin321/dbarticles/articles')
	.then(response => response.json())
	.then(articles => {
		if (articles){
			for(let article of articles){
				let clone = template.cloneNode(true);
				clone.querySelector('[article-title]').innerText = article.title;
				clone.querySelector('[article-content]').innerText = article.content;
				clone.querySelector('[article-image]').setAttribute("src", article.image );
				var input = document.createElement('input');
				input.setAttribute("type", "hidden")
				input.id = 'input_' + article.id ;
				input.value = article.id ;
				var button = document.createElement('input');
				button.setAttribute('type', 'submit');
				button.innerHTML = 'Lire plus';
				button.addEventListener('click', function(){myFunction(article.id)});
				document.querySelector('#articles').appendChild(clone);
				document.querySelector('#articles').appendChild(input);
				document.querySelector('#articles').appendChild(button);
			}
		}
	});
});
