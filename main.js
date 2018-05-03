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


axios.get(charmanderAPI)
.then (function(response){
  console.log(response);
})


let delibird = new Pokemon(response);
let squirtle = new Pokemon(response);
let loudred = new Pokemon(response);
let absol = new Pokemon(response);
let meowth = new Pokemon(response);
let charmander = new Pokemon(response);
let groudon = new Pokemon(response);
let haunter = new Pokemon(response);
