// this will generate a random Given name from the array below
const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}
// this will generate a random Family name from the array below
const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}
// this will create a random 6-digit number that will not begin with 0 - which will be the membership number
const getRandomMemberNumber = max => Math.floor((Math.floor(100000 + Math.random() * 900000)));

module.exports = {
    getRandomGivenName,
    getRandomFamilyName,
    getRandomMemberNumber
}