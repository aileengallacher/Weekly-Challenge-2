const random = require("../Common/Random");

module.exports = class Member {
    constructor(firstName, lastName, membership) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.membership = membership
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} ${this.membership}`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Member(
                random.getRandomGivenName(),      // will create a randomly generated given name
                random.getRandomFamilyName(),     // will create a randomly generated family name
               random.getRandomMemberNumber(42) + 18   // will create a randomly generated number to be used as an ID number
            );
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}