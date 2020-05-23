
module.exports = class MemberService {     // executes instructions and updates json file 
    constructor(memberDataReader) {
        this.memberDataReader = memberDataReader;
    }

    getMember(membership) {
        return this.memberDataReader.getMember(membership);  // refers to getMember method in data reader and will retrieve member
    }

    // deleteMember(membership) {
    //     let member = this.getMember(membership);
    //     if (!member) {
    //         console.log("Error: No Matching Member Found");
    //     } else {
    //         this.MemberDataReader.deleteMember(membership);
    //     }
    // }

    // updateMember(member) {
    //     let dataMember = this.getMember(member.id);
    //     if (!dataMember) {
    //         console.log("Error: No Matching Teacher Found");
    //     } else if (this.validateMember(member)) {
    //         this.memberDataReader.updateMember(member);
    //     } else {
    //         console.log("Error: Teacher object was invalid");
    //     }
    // }

    addMember(member) {
        let dataMember = this.getMember(member.membershipNumber);
        console.log(`whatis the member number ${member.membership}`)
        console.log(`what is the value of ${dataMember}`)
        if (!dataMember) {  // i think i need to put a "find.() in here to validate"
            console.log(`Error: Member already exists with this membership number." + ${member.membershipNumber}`);
        } else if (this.validateMember(member)) {
            console.log(`are you validating?? datamember value is ${dataMember}`)
            this.memberDataReader.addMember(member);
        } else {
            console.log("Error: Teacher object was invalid //  change this error message.");
        }
    }

    // searchByName(searchTerm) {
    //     let memberData = this.memberDataReader.getArrayFromFile();
    //     let matchingNames = [];
    //     for (let i = 0; i < memberData.length; i++) {
    //         const member = memberData[i];
    //         let memberFullName = `${member.firstName} ${member.lastName}`.toLowerCase();
    //         if (memberFullName.includes(searchTerm.toLowerCase())) {
    //             matchingNames.push(teacher);
    //         }
    //     }
    //     return matchingNames;


    // return this.studentDataReader.getArrayFromFile()
    //     .filter(student => `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm));
    // }

    doesMemberExist(membership) {
        let member = this.memberDataReader.getMember(membership);
        if (member) {
            return true;
        } else {
            return false;
        }
    }

    validateMember(member) {
        if (!this.doesMemberExist(member.membershipNumber)) {
            console.log("Error: Could not find matching membership number")
            return false;
        }
        // if (isNaN(student.age)) {
        //     return false;
        // }
        // for (let i = 0; i < student.grades.length; i++) {
        //     const grade = student.grades[i];
        //     if (isNaN(grade)) {
        //         console.log("Error: One or more of the entered grades was invalid")
        //         return false;
        //     }
        // }
        return true;
    }
}