"use strict";function _createForOfIteratorHelper(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var URL_ALL_POKEMONS="https://pokeapi.co/api/v2/pokemon?limit=151",allPokemonInfo=[],correctAnswer="",pokeImage=document.getElementById("pokemon-img"),answersList=document.getElementById("answers"),getRandomNumber=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150;return Math.round(Math.random()*e+1)},getAllPokemons=function(){fetch(URL_ALL_POKEMONS).then((function(e){return e.json()})).then((function(e){allPokemonInfo=_toConsumableArray(e.results),getAnswers()}))},getAnswers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=[],t=getRandomNumber(),n=allPokemonInfo[t];for(r.push(n);r.length<e;)t=getRandomNumber(),n=allPokemonInfo[t],r.find((function(e){var r=e.name;return n.name!==r}))&&r.push(n);var o=r.map((function(e){return e.name}));getPokeImage(r[0].url.substring(34).replace("/","")),correctAnswer=r[0].name,console.log(correctAnswer),o=o.sort((function(){return Math.random()-.5})),writeAnswers(o)},getPokeImage=function(e){fetch("https://pokeapi.co/api/v2/pokemon-form/".concat(e)).then((function(e){return e.json()})).then((function(e){pokeImage.src=e.sprites.front_default}))},writeAnswers=function(e){var r,t=document.createDocumentFragment(),n=_createForOfIteratorHelper(e);try{for(n.s();!(r=n.n()).done;){var o=r.value,a=document.createElement("li");a.textContent=o,t.append(a)}}catch(e){n.e(e)}finally{n.f()}answersList.append(t)};answersList.addEventListener("click",(function(e){"LI"===e.target.tagName&&(e.target.textContent===correctAnswer?console.log("CORRECTO"):console.log("FALLASTE"))})),getAllPokemons();