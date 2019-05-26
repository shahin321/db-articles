 fetch('article.html.tpl')
.then(response => response.text())
.then(templateString => {
let parserHTML = new DOMParser();
let template = parserHTML.parseFromString(templateString, 'text/html').body.firstChild;

     fetch('https://my-json-server.typicode.com/shahin321/db-articles/articles')
	.then(response => response.json())
	.then(articles => {
		if (articles){
			for(let article of articles){
				let clone = template.cloneNode(true);
				clone.querySelector('[article-title]').innerText = article.title;
				clone.querySelector('[article-content]').innerText = article.content;
				clone.querySelector('[article-image]').setAttribute("src", article.image );
			}
		}
	});
});
