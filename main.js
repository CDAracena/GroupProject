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

          document.querySelector(".modalName2").innerText = delibird.name;
          document.querySelector(".modalAttack2").innerText = delibird.attack
          document.querySelector(".modalDefense2").innerText = delibird.defense;
          document.querySelector(".modalHp2").innerText = delibird.hp;
          let abilityArr = delibird.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector(".modalAbilities2").innerText = text
        };
      })
      axios.get(squirtleAPI)
      .then (function(response) {

        let squirtle = new Pokemon(response);

        document.querySelector(".modalName3").innerText = squirtle.name
        document.querySelector(".modalAttack3").innerText = squirtle.attack;
        document.querySelector(".modalDefense3").innerText = squirtle.defense;
        document.querySelector(".modalHp3").innerText = squirtle.hp;
        let abilityArr = squirtle.abilities;
        let text=[""];
        for (let i = 0; i < abilityArr.length; i++) {
          text += abilityArr[i].ability.name + ", ";
          document.querySelector(".modalAbilities3").innerText = text;
        }
      })
      axios.get(loudredAPI)
      .then(function(response) {

        let loudred = new Pokemon(response);

        document.querySelector('.modalName1').innerText = loudred.name;
        document.querySelector('.modalAttack1').innerText = loudred.attack;
        document.querySelector('.modalDefense1').innerText = loudred.defense;
        document.querySelector('.modalHp1').innerText = loudred.hp;
        let abilityArr = loudred.abilities;
        let text=[""];
        for (let i = 0; i < abilityArr.length; i++) {
          text += abilityArr[i].ability.name + ", ";
          document.querySelector('.modalAbilities1').innerText = text;
        }
      })
    } else if (trainerId === "trainer2"){
        firstGif.attr('src', "pokemonSprites/squirtleSprite.gif");
        secondGif.attr('src', "pokemonSprites/bouncingMeowth.gif");
        thirdGif.attr('src', "pokemonSprites/charmanderSprite.gif");
        axios.get(squirtleAPI)
        .then (function(response) {

          let squirtle = new Pokemon(response);

          document.querySelector(".modalName1").innerText = squirtle.name
          document.querySelector(".modalAttack1").innerText = squirtle.attack;
          document.querySelector(".modalDefense1").innerText = squirtle.defense;
          document.querySelector(".modalHp1").innerText = squirtle.hp;
          let abilityArr = squirtle.abilities;
          let text=[""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector(".modalAbilities1").innerText = text;
          }
        })

        axios.get(meowthAPI)
        .then(function(response){

          let meowth = new Pokemon(response);

          document.querySelector('.modalName2').innerText = meowth.name;
          document.querySelector('.modalAttack2').innerText = meowth.attack;
          document.querySelector('.modalDefense2').innerText = meowth.defense;
          document.querySelector('.modalHp2').innerText = meowth.hp;

          let abilityArr = meowth.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector('.modalAbilities1').innertext = text;
          }
        })
        axios.get(charmanderAPI)
        .then(function(response){

          let charmander = new Pokemon(response);

          document.querySelector('.modalName3').innerText = charmander.name;
          document.querySelector('.modalAttack3').innerText = charmander.attack;
          document.querySelector('.modalDefense3').innerText = charmander.defense;
          document.querySelector('.modalHp3').innerText = charmander.hp;
          let abilityArr = charmander.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector('.modalAbilities3').innerText = text;
          }
        })
    }  else {
        firstGif.attr('src', "pokemonSprites/haunterSprite.gif")
        secondGif.attr('src', "pokemonSprites/absolSprite.gif")
        thirdGif.attr('src', "pokemonSprites/groundonSprite.gif")

        axios.get(haunterAPI)
        .then(function(response){

          let haunter = new Pokemon(response);

          document.querySelector('.modalName1').innerText = haunter.name;
          document.querySelector('.modalAttack1').innerText = haunter.attack;
          document.querySelector('.modalDefense1').innerText = haunter.defense;
          document.querySelector('.modalHp1').innerText = haunter.hp;
          let abilityArr = haunter.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector('.modalAbilities1').innerText = text;
          }
        })

        axios.get(absolAPI)
        .then(function(response){

          let absol = new Pokemon(response);

          document.querySelector('.modalName2').innerText = absol.name;
          document.querySelector('.modalAttack2').innerText = absol.attack;
          document.querySelector('.modalDefense2').innerText = absol.defense;
          document.querySelector('.modalHp2').innerText = absol.hp;
          let abilityArr = absol.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector('.modalAbilities2').innerText = text;
          }
        })
        axios.get(groudonAPI)
        .then(function(response){

          let groudon = new Pokemon(response);

          document.querySelector('.modalName3').innerText = groudon.name;
          document.querySelector('.modalAttack3').innerText = groudon.attack;
          document.querySelector('.modalDefense3').innerText = groudon.defense;
          document.querySelector('.modalHp3').innerText = groudon.hp;
          let abilityArr = groudon.abilities;
          let text = [""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + ", ";
            document.querySelector('.modalAbilities3').innerText = text;
          }
        })
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
