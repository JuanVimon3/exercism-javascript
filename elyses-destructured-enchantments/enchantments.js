/// <reference path="./global.d.ts" />
// @ts-nocheck

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  const amount = deck;
  return amount[0];
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const amount = deck;
  return amount[1];
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  // eslint-disable-next-line no-param-reassign
  [deck[0], deck[1]] = [deck[1], deck[0]];
  return deck;
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const a = deck.shift();
  const b = deck;
  const c = [a, ...[b]];
  return c;
}

// eslint-disable-next-line spaced-comment
/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  const [a, ...b] = deck;
  const newDeck = [a, ...FACE_CARDS, ...b];
  return newDeck;
}
