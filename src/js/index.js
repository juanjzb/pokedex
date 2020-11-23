// const URL_ALL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon?limit=151';
// let allPokemonInfo = [];
// let correctAnswer = '';

// // DOM
// const pokeImage = document.getElementById('poke-image');
// const answersList = document.getElementById('poke-answers');

// const getRandomNumber = (max = 150) => Math.round(Math.random() * max + 1);

// const getAllPokemons = () => {
//   fetch(URL_ALL_POKEMONS)
//     .then(res => res.json())
//     .then(allPokemons => {
//       allPokemonInfo = [...allPokemons.results];
//       getAnswers();
//     });
// };

// const getAnswers = (answers = 3) => {
//   const options = [];
//   let randomNumber = getRandomNumber();
//   let currentPokemon = allPokemonInfo[randomNumber];
//   options.push(currentPokemon);
//   while (options.length < answers) {
//     randomNumber = getRandomNumber();
//     currentPokemon = allPokemonInfo[randomNumber];
//     if (options.find(({ name }) => currentPokemon.name !== name)) {
//       options.push(currentPokemon);
//     }
//   }

//   let allAnswers = options.map(answer => answer.name);

//   getPokeImage(options[0].url.substring(34).replace('/', ''));

//   correctAnswer = options[0].name;
//   console.log(correctAnswer);

//   allAnswers = allAnswers.sort(() => Math.random() - 0.5);

//   writeAnswers(allAnswers);
// };

// const getPokeImage = id => {
//   fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
//     .then(res => res.json())
//     .then(pokeInfo => {
//       pokeImage.src = pokeInfo.sprites.front_default;
//     });
// };

// const writeAnswers = answers => {
//   const fragment = document.createDocumentFragment();
//   for (const answer of answers) {
//     const listItem = document.createElement('li');
//     listItem.textContent = answer;
//     fragment.append(listItem);
//   }
//   answersList.append(fragment);
// };

// answersList.addEventListener('click', e => {
//   if (e.target.tagName === 'LI') {
//     if (e.target.textContent === correctAnswer) {
//       console.log('CORRECTO');
//     } else {
//       console.log('FALLASTE');
//     }
//   }
// });

// getAllPokemons();
