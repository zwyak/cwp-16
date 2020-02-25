const Promise = require('bluebird');
const axios = require('axios');

// 1 - Parallel requests
axios.get('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
    console.log(`Name: ${response.data.name} Height: ${response.data.height} Weight: ${response.data.weight}`);
  })
  .catch((error) => {
    console.log(error);
  });

axios.get('https://pokeapi.co/api/v2/pokemon/2')
  .then((response) => {
    console.log(`Name: ${response.data.name} Height: ${response.data.height} Weight: ${response.data.weight}`);
  })
  .catch((error) => {
    console.log(error);
  });

axios.get('https://pokeapi.co/api/v2/pokemon/3')
  .then((response) => {
    console.log(`Name: ${response.data.name} Height: ${response.data.height} Weight: ${response.data.weight}`);
  })
  .catch((error) => {
    console.log(error);
  });
