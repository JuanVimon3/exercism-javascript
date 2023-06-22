// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let n = 0;
  stack.forEach((currentCard) => {
    if (currentCard === card) {
      n += 1;
    }
  });
  return n;
}
/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let n = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const number of stack) {
    const comparationType = type ? 0 : 1;
    if (number % 2 === comparationType) {
      n += 1;
    }
  }
  return n;
}
