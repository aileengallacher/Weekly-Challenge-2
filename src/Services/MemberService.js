
module.exports = class MemberService {     // executes instructions and updates json file 
    constructor(memberDataReader) {
        this.memberDataReader = memberDataReader;
    }

    getMember(membership) {
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
        let dataMember = this.getMember(member.membership);  // will check getMember data if a membership number exists and set dataMember to true (data found) or false
        if (dataMember) {              // if dataMember exists, it will show what was found and give error message  
            console.log(dataMember);
            console.log(`Error: Member already found with this membership number: ${member.membership}`);
        } else if (this.validateMember(member)) {   // if no matching membership is found, continue to addMember function in memberdatareader
            this.memberDataReader.addMember(member);
        } else {                       // if details entered1
            console.log("Error: Member details invalid.");
        }
    }

    searchByName(searchTerm) {
        let memberData = this.memberDataReader.getMembersFromFile();getMembersFromFile
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
        let memberData = this.memberDataReader.getMembersFromFile(membership);
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