// XHR
//let xhr = new XMLHttpRequest();
	//xhr.open('GET','https://my-json-server.typicode.com/shahin321/dbarticles/articles');
//	xhr.open('GET','article.html.tpl');
//	xhr.onload = function() {
		//template article.html
		// créer un parser
//		let parserHTML = new DOMParser();
		//récupérer le template
//		let template   = parserHTML.parseFromString(xhr.response,'text/html').body.firsChild

//      let xhrJSON = new XMLHttpRequest();
//          xhrJSON.open('GET','https://my-json-server.typicode.com/shahin321/dbarticles/articles');
//	        xhr.onload = function() {
	        	//article.JSON
//	        	let articles;
//	        	try {
//	        		article = JSON.parse(xhrJSON.response);
//	        	}catch(e){}

//                if (articles) {
//                		 let clone = template.cloneNode(true);
//                		     clone.querySelector('[article-content]').innerText = article.content;
                		//crée un clone
//                		document.querySelector('#articles').appendChild(clone);
//                	}
//               }
//	        }
//	        xhrJSON.send();

//    xhr.send();


//FETCH
function myFunction(id){
  fetch('content-article.html.tpl')
  .then(response => response.text())
  .then(templateString => {
    let parserHTML = new DOMParser();
    let template = parserHTML.parseFromString(templateString, 'text/html').body.firstChild;

    fetch('https://my-json-server.typicode.com/shahin321/dbarticles/articles' + id)
      .then(response => response.json())
      .then(articles => {
        if (articles){
          let clone = template.cloneNode(true);
          clone.querySelector('[article-title]').innerText = articles.title;
          clone.querySelector('[article-content]').innerText = articles.content;
          clone.querySelector('[article-image]').setAttribute("src", articles.image );
          document.querySelector('#articles').appendChild(clone);
        }
      });
  });
};
 fetch('article.html.tpl')
    .then( response => response.text() )
    .then( templateString => {
      let parserHTML = new DOMParser();
      let template   = parserHTML.parseFromString(templateString,'text/html').body.firstChild;

      fetch('https://my-json-server.typicode.com/shahin321/dbarticles/articles')
        .then( response => response.json() )
        .then( articles => {

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



