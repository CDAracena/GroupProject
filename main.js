let delibirdAPI = "http://pokeapi.co/api/v2/pokemon/225/";

let squirtleAPI = "http://pokeapi.co/api/v2/pokemon/7/";

let loudredAPI = "http://pokeapi.co/api/v2/pokemon/294/";

let absolAPI = "http://pokeapi.co/api/v2/pokemon/359/";

let meowthAPI = "http://pokeapi.co/api/v2/pokemon/52/";

let charmanderAPI = "http://pokeapi.co/api/v2/pokemon/4/";

let groudonAPI = "http://pokeapi.co/api/v2/pokemon/383/";

let haunterAPI ="http://pokeapi.co/api/v2/pokemon/93/";

class Pokemon {
  constructor(response) {
    this.name = response.data.name;
    this.hp = response.data.stats[5].base_stat;
    this.attack = response.data.stats[4].base_stat;
    this.defense = response.data.stats[3].base_stat;
    this.abilities = response.data.abilities;
  }
}


// DeliBird Response
axios.get(delibirdAPI)
.then (function(response) {
  console.log(response);
let delibird = new Pokemon(response);

  document.querySelector("#pokemonModal").innerText = delibird.name + delibird.hp + delibird.attack + delibird.defense;
  let abilityArr = delibird.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})

// Squirtle Info
axios.get(squirtleAPI)
.then (function(response) {
  console.log(response)

  let squirtle = new Pokemon(response);

  document.querySelector("#pokemonModal").innerText = squirtle.name + squirtle.hp + squirtle.attack + squirtle.defense;
  let abilityArr = squirtle.abilities;
  let text=[""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})

// Loudred Info
axios.get(loudredAPI)
.then(function(response) {
  console.log(response)

  let loudred = new Pokemon(response);

  document.querySelector('#pokemonModal').innerText = loudred.name + loudred.hp + loudred.attack + loudred.defense;
  let abilityArr = loudred.abilities;
  let text=[""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})

// Absol Info
axios.get(absolAPI)
.then(function(response){
  console.log(response)

  let absol = new Pokemon(response);

  document.querySelector('#pokemonModal').innerText = absol.name + absol.hp + absol.attack + absol.defense;
  let abilityArr = absol.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})

// Haunter Info
axios.get(haunterAPI)
.then(function(response){
  console.log(response)

  let haunter = new Pokemon(response);

  document.querySelector('#pokemonModal').innerText = haunter.name + haunter.hp + haunter.attack + haunter.defense;
  let abilityArr = haunter.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})

// Groudon Info
axios.get(groudonAPI)
.then(function(response){
  console.log(response)

  let groudon = new Pokemon(response);

  document.querySelector('#pokemonModal').innerText = groudon.name + groudon.hp + groudon.attack + groudon.defense;
  let abilityArr = groudon.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += ability[i].ability.name + "<br>";
  }
})

// Meowth Info
axios.get(meowthAPI)
.then(function(response){
  console.log(response)

  let meowth = new Pokemon(response);

  document.querySelector('#pokemonModal').innerText = meowth.name + meowth.hp + meowth.attack + meowth.defense;
  let abilityArr = meowth.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += ability[i].ability.name + "<br>";
  }
})


// Charmander Info
axios.get(charmanderAPI)
.then(function(response){
  console.log(response)

  let charmander = new Pokemon(response);

  document.querySelector('#pokemonModal').innerText = charmander.name + charmander.hp + charmander.attack + charmander.defense;
  let abilityArr = charmander.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})
