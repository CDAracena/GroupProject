class Pokemon {
    constructor(response) {
      this.hp = response.data.stats[5].base_stat;
      this.attack = response.data.stats[4].base_stat;
      this.defense = response.data.stats[3].base_stat;
      this.abilities = response.data.abilities;
      this.name = response.data.name;
    }
   }

let groudon = new Pokemon() {

}
// this is gonna be the trainers with two methods to bring back some or ALL of their pokemon
class Trainer {
    constructor(trainerName, roster) {
       this.name = trainerName;
       this.roster = [];

       
    //    this method will bring back their array of pokemon entirely
        all(){
            return this.roster;
        };
        get(pokemonName){
        //loop through the entire pokemon Arrauy and then check the pokemon response.data.name
        for (let i = 0; i < this.roster.length; i++){
            if (pokemonName === this.roster[i]){
                return this.roster[i];}
                 console.log("pokemon not found! Try again!")
            }
        }
    }
}

let kiko = new Trainer;
let takeshi = new Trainer;
let sharhar = new Trainer;

$(".trainer").click (function(){
    


})

   
  