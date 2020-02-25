const Promise = require('bluebird');
const axios = require('axios');

const getPokemon = (id) =>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      console.log(`Name: ${response.data.name} Height: ${response.data.height} Weight: ${response.data.weight}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function getPokemonsAll(){
  try{
    await Promise.all([
      getPokemon(1),
      getPokemon(2),
      getPokemon(3)
    ]);
  }
  catch(err){
    console.error(err);
  }
}

async function getPokemonsAny(){
  try{
    await Promise.any([
      getPokemon(1),
      getPokemon(2),
      getPokemon(3)
    ]);
  }
  catch(err){
    console.error(err);
  }
}

//getPokemonsAll();
//getPokemonsAny();
