const { greeting } = require("./greeting");

const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

console.log(greeting);

module.exports = {
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName
}
