import { getBeers } from './api.js'

getBeers()
  .then(response => response.json())
  .catch(e => console.error('Something went wrong', e))
  .then(function(response) {
    document.getElementById("num").innerHTML += response.length;
    var result = "";
    result
    for (var i = 0; i < response.length; i++) {
      result += "<div class='col-lg-6'><b>Name:</b>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br><b>First brewed:</b>"+ response[i].first_brewed +"<br><b>Contributed by:</b>" + response[i].contributed_by+"<br><b>Tagline:</b>" + response[i].tagline +"<br><b>Yeast:</b>"+ response[i].ingredients.yeast +"<hr></div>";
     }
    document.getElementById("beers").innerHTML = result;
  })

   