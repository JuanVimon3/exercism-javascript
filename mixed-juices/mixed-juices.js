// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let juiceTime = 0;
  switch (name) {
    case 'Pure Strawberry Joy':
      juiceTime = 0.5;
      break;
    case 'Energizer':
      juiceTime = 1.5;
      break;
    case 'Green Garden':
      juiceTime = 1.5;
      break;
    case 'Tropical Island':
      juiceTime = 3;
      break;
    case 'All or Nothing':
      juiceTime = 5;
      break;
    default:
      juiceTime = 2.5;
  }
  return juiceTime;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let currentWedges = 0;
  let limesCounter = 0;
  while ((limesCounter < limes.length) && (wedgesNeeded > currentWedges)) {
    switch (limes[limesCounter]) {
      case 'small':
        currentWedges += 6;
        break;
      case 'medium':
        currentWedges += 8;
        break;
      case 'large':
        currentWedges += 10;
        break;
      default:
        currentWedges = 0;
    }
    limesCounter += 1;
  } return limesCounter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    const pendentOrders = timeToMixJuice(orders[0]);
    // eslint-disable-next-line no-param-reassign
    timeLeft -= pendentOrders;
    orders.shift();
  } while ((timeLeft > 0) && (orders.length > 0));
  return orders;
}
