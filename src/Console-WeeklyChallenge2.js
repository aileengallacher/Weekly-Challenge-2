const readline = require('readline');
const path = require("path");
const MemberDataReader = require("./DataLayer/MemberDataReader");
const MemberService = require("./Services/MemberService");
const Member = require("./Models/Member");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    const baseFilePath = path.join(__dirname, "../", "JSONData");
    const _memberDataReader = new MemberDataReader(path.join(baseFilePath, "Members.json"));
    const _memberService = new MemberService(_memberDataReader);

    let shouldLoop = true;
    while (shouldLoop) {
        console.log("[1] Add a member");
        console.log("[2] Search a member");
        console.log("[3] Update member details");
        console.log("[4] Delete a member");
        console.log("[5] Exit");
        let userInput = await askQuestion("Select an option from above: ");
        switch (userInput) {
            case "1":     // CREATE: add a member
                let memberFirstName = await askQuestion("Enter First Name: ");
                let memberLastName = await askQuestion("Enter Last Name: ");
                let memberNumber = await askQuestion("Enter 6-digit Member Number: ");
                let newMember = new Member(
                    memberFirstName,
                    memberLastName,
                    memberNumber
                );
                _memberService.addMember(newMember);
                console.log("New member has been created.");
                break;
            case "2":     // READ: search a member
                let searchTerm = await askQuestion("Enter member details to search: ");
                let matchingMembers = _memberService.searchByName(searchTerm);
                console.log(matchingMembers);
                break;
            case "3":     // UPDATE: update member details
                let searchMemberToUpdate = await askQuestion("Enter member to update: ");
                let matchMember = _memberService.updateMember(searchMemberToUpdate);
                console.log(matchMember);
                console.log(`What is this first name ${this.firstName}`);
                console.log("What would you like to update?");
                console.log("[1] First Name");
                console.log("[2] Last Name");
                console.log("[3] Membership Number");
                console.log("[4] Exit - no changes to be made");
                let userInput = await askQuestion("Select an option from above: ");
                switch (userInput) {
                    case "1":     // Change first name
                        let member = await askQuestion("Enter new First Name: ");
                        return 
                        
                      //  let matchMember = _memberService.updateMember(member);
                     //   console.log(`What is matchMember: ${matchMember}`);


                        // let memberLastName = await askQuestion("Enter Last Name: ");
                        // let memberNumber = await askQuestion("Enter 6-digit Member Number: ");
                        // let newMember = new Member(
                        //     memberFirstName,
                        //     memberLastName,
                        //     memberNumber
                        // );
                        // _memberService.addMember(newMember);
                        break;
                    case "2":     // READ: search a member          
                        break;
                    default:
                        break;
                }
            case "4":     // DELETE: delete member details
                break;
            case "5":
                shouldLoop = false;
                console.log("Back to main menu");
                break;
            default:
                console.log("Error: Please make a selection between 1 and 5");
        }
    }
}

Program().then(() => {
    process.exit(0);
});