"use strict";
//---------------------------------------------------------------------------------
//Fighters object w/ powerlevel values as RNG
const fighters = {
  goku: Math.trunc(Math.random() * 80) + 30,
  vegeta: Math.trunc(Math.random() * 60) + 40,
  piccolo: Math.trunc(Math.random() * 45) + 5,
  gohan: Math.trunc(Math.random() * 70) + 30,
  android18: Math.trunc(Math.random() * 40) + 10,
  krillen: Math.trunc(Math.random() * 35) + 5,
  yamcha: Math.trunc(Math.random() * 30) + 1,
};
//---------------------------------------------------------------------------------
//Fighter names array from object
const fighterNames = Object.keys(fighters);
//---------------------------------------------------------------------------------

//Other repeated DOM queries as variables
const fighter1 = document.querySelector(`.fighter-1`);
const fighter2 = document.querySelector(`.fighter-2`);
const modalHeader = document.querySelector(`.modal-header`);

//---------------------------------------------------------------------------------

//Function to re-roll power level values for all fighters
const reRollPowerLevel = function () {
  fighters.goku = Math.trunc(Math.random() * 80) + 30;
  fighters.vegeta = Math.trunc(Math.random() * 60) + 40;
  fighters.piccolo = Math.trunc(Math.random() * 45) + 5;
  fighters.gohan = Math.trunc(Math.random() * 70) + 30;
  fighters.android18 = Math.trunc(Math.random() * 40) + 10;
  fighters.krillen = Math.trunc(Math.random() * 35) + 5;
  fighters.yamcha = Math.trunc(Math.random() * 30) + 1;
};

//---------------------------------------------------------------------------------

//Function to remove all dynamic classes
const removeDynamicClasses = function () {
  fighter1.classList.remove(`winner`);
  fighter2.classList.remove(`winner`);
  fighter1.classList.remove(`draw`);
  fighter2.classList.remove(`draw`);
};
//---------------------------------------------------------------------------------

//Function to add hidden class to modal window + overlay
const closeModalWindow = function () {
  document.querySelector(`.modal`).classList.add(`hidden`);
  document.querySelector(`.overlay`).classList.add(`hidden`);
};

//---------------------------------------------------------------------------------

//Function to remove hidden close and display modal window + overlay
const openModalWindow = function () {
  document.querySelector(`.modal`).classList.remove(`hidden`);
  document.querySelector(`.overlay`).classList.remove(`hidden`);
};
//---------------------------------------------------------------------------------

//Function to select random fighters
let fighter1Selection;
let fighter2Selection;
const generateFighters = function () {
  //randomly select a fighter from array for fighter 1
  fighter1Selection =
    fighterNames[Math.trunc(Math.random() * fighterNames.length)];

  //randomly select a fighter from array for fighter 2
  fighter2Selection =
    fighterNames[Math.trunc(Math.random() * fighterNames.length)];

  //replace image of fighter 1 with randomly selected fighter
  document.querySelector(
    `.fighter-1-image`
  ).src = `fighter-${fighter1Selection}.png`;

  //replace image of fighter 2 with randomly selected fighter
  document.querySelector(
    `.fighter-2-image`
  ).src = `fighter-${fighter2Selection}.png`;

  //remove winner/draw classes from both fighters
  removeDynamicClasses();
};
//---------------------------------------------------------------------------------

//Function to generate winner of 2 selected fighters
const whoWins = function () {
  //regenerate fighter power levels on click
  reRollPowerLevel();

  //log the fighters to console
  console.log(fighter1Selection, fighter2Selection);
  //log fighter power levels to console
  console.log(fighters[fighter1Selection], fighters[fighter2Selection]);
  //remove winner/draw classes from both containers
  removeDynamicClasses();

  //conditional statement adding `winner` class to the winner of the fight
  if (fighters[fighter1Selection] > fighters[fighter2Selection]) {
    console.log(`${fighter1Selection} is the winner!`);
    fighter1.classList.add(`winner`);
    openModalWindow();
    modalHeader.innerHTML = `${fighter1Selection} is the winner!`;
  } else if (fighters[fighter1Selection] === fighters[fighter2Selection]) {
    fighter1.classList.add(`draw`);
    fighter2.classList.add(`draw`);
    openModalWindow();
    modalHeader.innerHTML = `It's a draw!`;
    console.log(`It's a draw!`);
  } else {
    console.log(`${fighter2Selection} is the winner!`);
    fighter2.classList.add(`winner`);
    openModalWindow();
    modalHeader.innerHTML = `${fighter2Selection} is the winner!`;
  }
};
//---------------------------------------------------------------------------------

//Event listener for "generate fighters" button
document
  .querySelector(`.btn-generate`)
  .addEventListener(`click`, generateFighters);

//---------------------------------------------------------------------------------

//Event listener for "fight" button
document.querySelector(`.btn-fight`).addEventListener(`click`, whoWins);

//---------------------------------------------------------------------------------

//Event listener for "close model" x button on click
document
  .querySelector(`.close-modal`)
  .addEventListener(`click`, closeModalWindow);

//---------------------------------------------------------------------------------

//Event listener for to close modal on keypress
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) {
    closeModalWindow();
  }
});

//---------------------------------------------------------------------------------

//Event listener to close modal window on click of overlay
document.querySelector(`.overlay`).addEventListener(`click`, closeModalWindow);
