const joke = document.querySelector(".joke")
const punchline = document.querySelector(".punchline")
const punchlineButton = document.querySelector(".punchlineButton")
const newJoke = document.querySelector(".newJoke")

newJoke.addEventListener("click", getJoke)

punchlineButton.addEventListener("click", function(){
    punchline.style.display = "block";
    this.style.display = "none"
    newJoke.style.display = "block"
})

async function getJoke(){
    punchline.style.display = "none";
    newJoke.style.display = "none"
    punchlineButton.style.display = "block"
    joke.textContent = "loading..."
    const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    const data = await response.json();
    
    joke.textContent = data[0].setup;
    punchline.textContent = data[0].punchline;
}

getJoke();


