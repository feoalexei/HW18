/*eslint-disable*/

'use strict';
const $block = document.querySelector('.block');

fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then(film => {
        for(let i = 0; i < film.results.length; i++) {
            const $films = document.createElement('div');
            $films.classList.add('data-films');
            $block.append($films);
            $films.append(film.results[i].title);

            function showStarShip() {
                fetch('https://swapi.dev/api/films/')
                    .then(response => response.json())
                    .then(film => {
                        for (let j = 0; j < film.results[j].starships.length; j++) {
                            const $ships = document.createElement('span');
                            $ships.classList.add('data-ships');
                            $films.after($ships);
                            fetch(`${film.results[i].starships[j]}`)
                                .then(response => response.json())
                                .then(ship => $ships.append(ship.name))                              
                        }
                    })
                $films.removeEventListener('click', showStarShip);
            }

            $films.addEventListener('click', showStarShip);

        }
    });