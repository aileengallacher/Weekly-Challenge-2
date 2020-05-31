const Member = require("../Models/Member"); // not sure about this
const fs = require("fs");

module.exports = class MemberDataReader {   // Data Reader reads and writes to the json data file
    constructor(fileName) {
        this.fileName = fileName;
    }

    getMembersFromFile() {                 // this retrieves the array from Members.json file 
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(obj => new Member(
            obj.firstName,
            obj.lastName,
            obj.membership,
        ));
    }

    writeArrayToFile(members) {      // this converts the Members.json file into js string format
        fs.writeFileSync(this.fileName, JSON.stringify(members));
    }

    addMember(member) {
        let memberArray = this.getMembersFromFile();
        memberArray.push(member);
        this.writeArrayToFile(memberArray);
    }

    getMember(membership) {
        return this.getMembersFromFile().find(m => m.membership == membership);
    }

    updateMember(member) {                       // this will update member details if membership nbr matches the entered membership nbr
        this.writeArrayToFile(this.getMembersFromFile().map(m => {
            if (m.membershipNumber == member.membershipNumber) {
                return member;
            } else {
                return m;
            }
        }));
    }

    deleteMember(membershipNumber) {
        this.writeArrayToFile(this.getMembersFromFile().filter(m => m.membershipNumber != membership));
    }

    // WARNING: THIS WILL OVERRIDE ANY DATA CURRENTLY IN THE "Members.json" FILE
    writeToFile() {
        this.writeArrayToFile(this.fileName, JSON.stringify(Member.generateRandomPeople(10)));
    }
}