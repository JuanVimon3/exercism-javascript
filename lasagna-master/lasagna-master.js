/// <reference path="./global.d.ts" />

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
  if (time === 0) {
    return 'Lasagna is done.';
  } if (time > 0) {
    return 'Not done, please wait.';
  }
  return 'You forgot to set the timer.';
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  return {
    noodles: layers.filter((i) => i === 'noodles').length * 50,
    sauce: layers.filter((i) => i === 'sauce').length * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  const lastOne = friendsList[friendsList.length - 1];
  myList.push(lastOne);
}

export function scaleRecipe(recipe, amount) {
  const cant = amount / 2;
  const newRecipe = {};
  Object.keys(recipe)
    .forEach((i) => {
      newRecipe[i] = recipe[i] * cant;
    });
  return newRecipe;
}
