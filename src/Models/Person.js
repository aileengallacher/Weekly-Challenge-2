const random = require("../Common/Random");

module.exports = class Person {
    constructor(firstName, lastName, membershipNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.membershipNumber = membershipNumber;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} ${this.membershipNumber}`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(
                random.getRandomGivenName(),      // will create a randomly generated given name
                random.getRandomFamilyName(),     // will create a randomly generated family name
                random.getRandomMemberNumber(42) + 18   // will create a randomly generated number to be used as an ID number
            );
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}