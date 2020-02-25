const co = require('co');
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

co(function *(){
  const result = yield Promise.all([getPokemon(1), getPokemon(2)]);
}).catch(onerror);

function onerror(err) {
  console.error(err.stack);
}
