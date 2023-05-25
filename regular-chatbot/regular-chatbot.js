/* eslint-disable max-len */
// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const re = /^Chatbot/gi;
  return !!command.match(re);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const re = /emoji\d*/g;
  return message.replace(re, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const re = /\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}/;
  const correct = 'Thanks! You can now download me to your phone.';
  const incorrect = `Oops, it seems like I can't reach out to ${number}`;
  if (re.test(number)) {
    return correct;
  } return incorrect;
}
/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const re = /\w*\.\w*/g;
  return (userInput.match(re));
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const re = /\w/;
  const greet = 'Nice to meet you, ';
  fullName.replace(re, (c) => c.toUpperCase());
  const name = fullName.split(/,\s/).reverse().join(' ');
  return greet + name;
}
