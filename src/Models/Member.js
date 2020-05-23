const random = require("../Common/Random");
const uuid = require("uuid");

module.exports = class Member {
    constructor(firstName, lastName, membership, points) { // = uuid.v4()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.membership = membership;
        this.points;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName}`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Member(
                random.getRandomGivenName(),      // will create a randomly generated given name
                random.getRandomFamilyName(),     // will create a randomly generated family name
                random.getRandomMemberNumber(10) + 18   // will create a randomly generated number to be used as an ID number
            );
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}