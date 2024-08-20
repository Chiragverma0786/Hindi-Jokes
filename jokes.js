var joke = document.querySelector(".jokes>h3");
var url = "https://hindi-jokes-api.onrender.com/jokes?api_key=3be222bdd03ec55f53c141dc3597";

function submitJoke(){
    getJoke();
}

let getJoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => joke.textContent = data.jokeContent);
    // .then(data => console.log(data.jokeContent) );

}

// 3be222bdd03ec55f53c141dc3597