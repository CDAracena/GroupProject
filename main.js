$( document ).ready(function() {
let delibirdAPI = "http://pokeapi.co/api/v2/pokemon/225/";

let squirtleAPI = "http://pokeapi.co/api/v2/pokemon/7/";

let loudredAPI = "http://pokeapi.co/api/v2/pokemon/294/";

let absolAPI = "http://pokeapi.co/api/v2/pokemon/359/";

let meowthAPI = "http://pokeapi.co/api/v2/pokemon/52/";

let charmanderAPI = "http://pokeapi.co/api/v2/pokemon/4/";

let groudonAPI = "http://pokeapi.co/api/v2/pokemon/383/";

let haunterAPI ="http://pokeapi.co/api/v2/pokemon/93/";


class Pokemon {
  constructor(response){
    this.name = response.data.name;
    this.hp = response.data.stats[5].base_stat;
    this.attack = response.data.stats[4].base_stat;
    this.defense = response.data.stats[3].base_stat;
    this.abilities = response.data.abilities;
  }
}

class Trainer{
    constructor(name){
        this.name=name;
        this.roster = {};

        }
        //lets you add a pokemon AND then gets the API info and plugs it in
        add(thisName){
            let pokemonIndex = Object.keys(this.roster).length+1;
            let thisApi = thisName+"API"
            console.log(thisApi)
            this.roster.thisApi = thisApi;
            this.roster[pokemonIndex] = thisName;
        }
        get(pokemonName){
            return this.roster.pokemonName;
        }
        all(){
            return this.roster;
        }

    }


// Absol Info
axios.get(absolAPI)
.then(function(response){
  console.log(response)

  let absol = new Pokemon(response);

  document.querySelector('.modal-body').innerText = absol.name + absol.hp + absol.attack + absol.defense;
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

  document.querySelector('.modal-body').innerText = haunter.name + haunter.hp + haunter.attack + haunter.defense;
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

  document.querySelector('.modal-body').innerText = groudon.name + groudon.hp + groudon.attack + groudon.defense;
  let abilityArr = groudon.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})


// Meowth Info
axios.get(meowthAPI)
.then(function(response){
  console.log(response)

  let meowth = new Pokemon(response);

  document.querySelector('.modal-body').innerText = meowth.name + meowth.hp + meowth.attack + meowth.defense;
  let abilityArr = meowth.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})


// Charmander Info
axios.get(charmanderAPI)
.then(function(response){
  console.log(response)

  let charmander = new Pokemon(response);

  document.querySelector('.modal-body').innerText = charmander.name + charmander.hp + charmander.attack + charmander.defense;
  let abilityArr = charmander.abilities;
  let text = [""];
  for (let i = 0; i < abilityArr.length; i++) {
    text += abilityArr[i].ability.name + "<br>";
  }
})

// TypeWriter Function
let i = 0;
let txt = 'You have arrived to the VAPORWAVE GYM. Here you can see the stats of the best pokemon trainers in the district. HOVER TO BEGIN!';
let speed = 100
function typeWriter() {
   if (i < txt.length) {
      $("#typeWriter").html($("#typeWriter").html() + txt.charAt(i));
      i++
      setTimeout(typeWriter, speed);
    }
  }
typeWriter();


let trainer1 = new Trainer;
trainer1.add("squirtle");
trainer1.add("meowth");
trainer1.add("charmander");
console.log(trainer1);
let trainer2 = new Trainer;
let trainer3 = new Trainer;

let firstGif = $('#firstGif');
let secondGif = $('#secondGif');
let thirdGif = $('#thirdGif');

function trainerCLicked(){
    let trainerId = this.id;
    console.log(trainerId);
    if (trainerId === "trainer1"){
        firstGif.attr('src', "pokemonSprites/loudredSprite.gif");
        secondGif.attr('src', "pokemonSprites/delibirdSprite.gif");
        thirdGif.attr('src', "pokemonSprites/squirtleSprite.gif");

        axios.get(delibirdAPI)
        .then (function(response) {
          console.log(response);
        delibird = new Pokemon(response);
        console.log(delibird)

          document.querySelector(".modalName1").innerText = delibird.name;
          document.querySelector(".modalAttack1").innerText = delibird.attack
          document.querySelector(".modalDefense1").innerText = delibird.defense;
          document.querySelector(".modalHp1").innerText = delibird.hp;
          let abilityArr = delibird.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector(".modalAbilities1").innerText = text
        };
      })
      axios.get(squirtleAPI)
      .then (function(response) {
        console.log(response)

        let squirtle = new Pokemon(response);

        document.querySelector(".modalName2").innerText = squirtle.name
        document.querySelector(".modalAttack2").innerText = squirtle.attack;
        document.querySelector(".modalDefense2").innerText = squirtle.defense;
        document.querySelector(".modalHp2").innerText = squirtle.hp;
        let abilityArr = squirtle.abilities;
        let text=[""];
        for (let i = 0; i < abilityArr.length; i++) {
          text += abilityArr[i].ability.name + ", ";
          document.querySelector(".modalAbilities2").innerText = text;
        }
      })
      axios.get(loudredAPI)
      .then(function(response) {
        console.log(response)

        let loudred = new Pokemon(response);

        document.querySelector('.modalName3').innerText = loudred.name;
        document.querySelector('.modalAttack3').innerText = loudred.attack;
        document.querySelector('.modalDefense3').innerText = loudred.defense;
        document.querySelector('.modalHp3').innerText = loudred.hp;
        let abilityArr = loudred.abilities;
        let text=[""];
        for (let i = 0; i < abilityArr.length; i++) {
          text += abilityArr[i].ability.name + ", ";
          document.querySelector('.modalAbilities3').innerText = text;
        }
      })
    } else if (trainerId === "trainer2"){
        firstGif.attr('src', "pokemonSprites/squirtleSprite.gif");
        secondGif.attr('src', "pokemonSprites/bouncingMeowth.gif");
        thirdGif.attr('src', "pokemonSprites/charmanderSprite.gif")
    }  else {
        firstGif.attr('src', "pokemonSprites/haunterSprite.gif")
        secondGif.attr('src', "pokemonSprites/absolSprite.gif")
        thirdGif.attr('src', "pokemonSprites/groundonSprite.gif")
    }
}

$(".trainer").click(trainerCLicked);

let Trainer1 = document.querySelector("#trainer1");
let Trainer2 = document.querySelector("#trainer2");
let Trainer3 = document.querySelector("#trainer3");
let trainerInfo1 = document.querySelector("#trainer-info-1");
let trainerInfo2 = document.querySelector("#trainer-info-2");
let trainerInfo3 = document.querySelector("#trainer-info-3");



Trainer1.addEventListener('mouseover', function(){
 trainerInfo1.classList.remove("hidden");
})
Trainer1.addEventListener('mouseout', function(){
 trainerInfo1.classList.add("hidden");
})
Trainer2.addEventListener('mouseover', function(){
trainerInfo2.classList.remove("hidden");
})
Trainer2.addEventListener('mouseout', function(){
trainerInfo2.classList.add("hidden");
})
Trainer3.addEventListener('mouseover', function(){
trainerInfo3.classList.remove("hidden");
})
Trainer3.addEventListener('mouseout', function(){
trainerInfo3.classList.add("hidden");
})

});
