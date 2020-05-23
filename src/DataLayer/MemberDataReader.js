const Member = require("../Models/Member"); // not sure about this
const fs = require("fs");

module.exports = class MemberDataReader {   // Data Reader reads and writes to the json data file
    constructor(fileName) {
        this.fileName = fileName;
    }

    getArrayFromFile() {                 // this retrieves the Members.json file 
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(memberRaw => new Member(
            memberRaw.firstName,
            memberRaw.lastName,
            memberRaw.membershipNumber,
        ));
    }

    writeArrayToFile(arrayValue) {      // this converts the Members.json file into js string format
        fs.writeFileSync(this.fileName, JSON.stringify(arrayValue));
    }

    getMember(membership) {                      // this retrieves the member that belongs to a given membershipnumber
        return this.getArrayFromFile().find(m => m.membership == membership);
    }

    updateMember(member) {                       // this will update member details if membership nbr matches the entered membership nbr
        this.writeArrayToFile(this.getArrayFromFile().map(m => {
            if (m.membershipNumber == member.membershipNumber) {
                return member;
            } else {
                return m;
            }
        }));
    }

    deleteTeacher(id) {
        this.writeArrayToFile(this.getArrayFromFile().filter(s => s.id != id));
    }

    addTeacher(teacher) {
        this.writeArrayToFile(this.getArrayFromFile().concat([teacher]));
    }


    // WARNING: THIS WILL OVERRIDE ANY DATA CURRENTLY IN THE "Members.json" FILE
    generateRandomMembers() {
        this.writeArrayToFile(Member.generateRandomPeople(10));  // this will create 10 random members
    }
}