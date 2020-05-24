
module.exports = class MemberService {     // executes instructions and updates json file 
    constructor(memberDataReader) {
        this.memberDataReader = memberDataReader;
    }

    getMember(membership) {
        console.log(`${this.memberDataReader.getMember()}`);
        return this.memberDataReader.getMember(membership);  // refers to getMember method in data reader and will retrieve member
    }

    deleteMember(membership) {
        let member = this.getMember(membership);
        if (!member) {
            console.log("Error: No Matching Member Found");
        } else {
            this.MemberDataReader.deleteMember(membership);
        }
    }
  /// Why does it have to run through validation?
    updateMember(member) {
        let dataMember = this.getMember(member.membership);
        console.log(`${this.getMember(member.membership)}`);
        if (!dataMember) {
            console.log("Error: No Matching Member Found");
        } else if (this.validateMember(member)) {
            this.memberDataReader.updateMember(member);
        } else {
            console.log("Error: Teacher object was invalid");
        }
    }

    addMember(member) {
        let dataStudent = this.getMember(member.membership);
        if (dataStudent) {
            console.log(`Error: Student Already Found With id: + ${member.membership}`);
        } else if (this.validateMember(member)) {
            console.log("are you here after validating membership?");
            this.memberDataReader.addMember(member);
        } else {
            console.log("Error: Student object was invalid");
        }
    }

    searchByName(searchTerm) {
        let memberData = this.memberDataReader.getArrayFromFile();
        let matchingDetails = [];
        for (let i = 0; i < memberData.length; i++) {
            const member = memberData[i];
            let memberDetails = `${member.firstName} ${member.lastName} ${member.membership}`.toLowerCase();
            if (memberDetails.includes(searchTerm.toLowerCase())) {
                matchingDetails.push(member);
            // } else {
            //     console.log(`Error: Could not find any results including ${searchTerm}`);
            }
        }
        return matchingDetails;


        // return this.studentDataReader.getArrayFromFile()
        //     .filter(student => `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm));
    }


    validateMember(membership) {
        let memberData = this.memberDataReader.getArrayFromFile();
        if (memberData) {
            return true;
        } else {
            return false;
        }
    }
    // doesMemberExist(membership) {
    //     let member = this.memberDataReader.getMember(membership);
    //     console.log(`The value of member is: ${this.memberDataReader.getMember(membership)}. memberservice line64`)
    //     if (member) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // validateMember(member) {
    //     if (!this.doesMemberExist(member.membershipNumber)) {
    //         console.log("Error: Could not find matching membership number")
    //         return false;
    //     }
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
    //     return true;
    // }
}