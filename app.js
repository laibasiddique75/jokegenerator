

let jokes = document.querySelector("#jokes");

function jokeGenerator(){
    let randomJokes = [
        "Why don't programmers like nature? It has too many bugs.",
        "Why did the JavaScript developer go broke? Because he used up all his cache.",
        "Why did the developer go broke? Because he lost his JQuery.",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        "Why did the developer go to therapy? Because he had too many callbacks.",
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 equals Dec 25.",
        "Why did the developer go broke? Because he used up all his gigs.",
        "Why did the developer get lost on the road? Because he followed the Google Maps API.",
        "Why don't programmers like nature? It has too many branches.",
        "Why did the developer sit on his keyboard? He wanted to shift his keys."
      ];
      
      let randJoke = Math.random() * randomJokes.length
    let randomValue = Math.floor(randJoke)
    let arrayValue = randomJokes[randomValue]



     jokes.innerText = arrayValue + "😂" ;
}











