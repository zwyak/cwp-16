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

const fn = co.wrap(function *(){
  yield Promise.all([getPokemon(1)]);
  yield Promise.all([getPokemon(2)]);
});

fn(true).then(function() {
  console.info('Fs was done')
});
