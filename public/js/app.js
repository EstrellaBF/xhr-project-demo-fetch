window.addEventListener('load', function(){
  // Creando variables
  const form = document.getElementById('search-form');
  const searchField = document.getElementById('search-keyword');
  const responseContainer = document.getElementById('response-container');
  let searchedForText;
  // const uri = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=347d672874fd431eb13860e1a3f4d50b';

  // Confirmando que el navegador sea compatible con XHR, no con ActiveXObject
  if(this.window.XMLHttpRequest){
    
    form.addEventListener('click',function(e){
      e.preventDefault();
      searchedForText = searchField.value;
      fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=347d672874fd431eb13860e1a3f4d50b`)
      .then(function(response){
        // console.log(response);
        return response.json(); // cambia a formato JSON, equivale a JSON.parse();
      }).then(function(data){
        console.log(data); //devuelve el staatus en formato JSON
        console.log(data.response.docs[0]);
        let article = data.response.docs[0];
        let title = article.headline.main;
        let snippet = article.snippet;
        // Ingresando al DOM
        let li = document.createElement('li');
        let p = document.createElement('p');
        li.className = 'articleClass';
        p.innerText = title;
        li.innerText = snippet;
        responseContainer.appendChild(p);
        responseContainer.appendChild(li);
      });
    });

  }
});

