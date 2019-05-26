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
  document.querySelectorAll('.col-md-4').forEach(function(a){
    a.remove()
  })
  document.querySelectorAll('input').forEach(function(b){
    b.remove()
  })
  fetch('content_article.html.tpl')
  .then(response => response.text())
  .then(templateString => {
    let parserHTML = new DOMParser();
    let template = parserHTML.parseFromString(templateString, 'text/html').body.firstChild;

    fetch('https://my-json-server.typicode.com/shahin321/db-articles/articles/' + id)
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

      fetch('https://my-json-server.typicode.com/shahin321/db-articles/articles')
        .then( response => response.json() )
        .then( articles => {

            if (articles){
              for(let article of articles){
                let clone = template.cloneNode(true);
                clone.querySelector('[article-title]').innerText = article.title;
                clone.querySelector('[article-content]').innerText = article.content;
                clone.querySelector('[article-image]').setAttribute("src", article.image );
                document.querySelector('#articles').appendChild(clone);
                clone.addEventListener('click', function(){
                  myFunction(article.id)
                });
              }
            } 

        });
    });



