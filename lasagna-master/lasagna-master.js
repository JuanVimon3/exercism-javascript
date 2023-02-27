/// <reference path="./global.d.ts" />

import { createUnzip } from "zlib"

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
  if(time == 0){
    return 'Lasagna is done.';
  }else if(time > 0){
    return 'Not done, please wait.';
  }else{
    return 'You forgot to set the timer.';
  }
}

export function preparationTime(layers,time = 2) {
 return layers.length * time
}

export function quantities(layers) {
let sauce = 0;
let noodles = 0;
let sauceCant = 0;
let noodlesCant = 0;
for(let i = 0; i < layers.length; i++) {
  if(layers[i].includes('sauce')) {
    sauceCant++
  }else if(layers[i].includes('noodles')){
    noodlesCant++
  }
  sauce = sauceCant * 0.2;
  noodles = noodlesCant * 50
}return {sauce, noodles}
}

export function addSecretIngredient(friendsList,myList) {
let lastOne= friendsList[friendsList.length-1];
myList.push(lastOne);
}

export function scaleRecipe(recipe, amount) {
  let cant= amount / 2;
  let newRecipe = {};
  for(let i in recipe){
    newRecipe[i] = recipe[i] * cant
  }
  return newRecipe; 
}