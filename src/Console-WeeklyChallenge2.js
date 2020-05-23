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
    // const _teacherDataReader = new TeacherDataReader(path.join(baseFilePath, "Teachers.json"));
    const _memberService = new MemberService(_memberDataReader);

    // console.log(_studentDataReader.getArrayFromFile());
    // console.log(_teacherDataReader.getArrayFromFile());

    let shouldLoop = true;
    while (shouldLoop) {
        console.log("[1] Add a member");
        //         console.log("[2] Teachers");
        console.log("[3] Exit");
        let userInput = await askQuestion("Select an option from above: ");
        switch (userInput) {
            case "1":
                let memberFirstName = await askQuestion("Enter First Name: ");
                let memberLastName = await askQuestion("Enter Last Name: ");
                let memberNumber = await askQuestion("Enter 6-digit Member Number: ");
                let newMember = new Member(
                    memberFirstName,
                    memberLastName,
                    memberNumber
                );
                _memberService.addMember(newMember);
                break;
            //                     case "2":
            //                         let searchTerm = await askQuestion("Enter search term: ");
            //                         let matchingStudents = _studentService.searchByName(searchTerm);
            //                         console.log(matchingStudents);
            //                         break;
            //                     default:
            //                         console.log("Going back to main menu");
            //                 }
            //                 break;
            //             case "2":
            //                 break;
            //             case "3":
            //                 shouldLoop = false;
            //                 break;
            default:
                console.log("Error: Could not read user input. Please enter a number from 1 to 3");
        }
    }
}

Program().then(() => {
    process.exit(0);
});