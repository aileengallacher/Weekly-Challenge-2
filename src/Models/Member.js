const Person = require("./Person");
const random = require("../Common/Random")

module.exports = class Member extends Person {
    constructor(firstName, lastName, membership) { 
        super(firstName,lastName)
        this.membership = membership;
        //this.points;     ** play around with this idea later 1pt for every dollar$ spent
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} ${this.membership}`;
    }

    static generateRandomMembers(numberOfMembers) {
        return super.generateRandomPeople(numberOfMembers).map(member => new Member(
            member.firstName,
            member.lastName,
            this.generateRandomNumbers(),
        ));
    }
    static generateRandomNumbers() {
        let memberNumber = random.getRandomMemberNumber(1);
        return memberNumber;
        // return getRandomMemberNumber = max => Math.floor((Math.floor(100000 + Math.random() * 900000)));

    }
}