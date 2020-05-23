const MemberDataReader = require("./DataLayer/MemberDataReader")
const fs = require("fs");
const path = require("path");

const baseFilePath = path.join(__dirname, "../", "JSONData");

if (!fs.existsSync(baseFilePath)) {
    fs.mkdirSync(baseFilePath);
}

let _memberDataSet = new MemberDataReader(path.join(baseFilePath, "Members.json"));  // will produce random data executed into this json file name

_memberDataSet.generateRandomMembers(10);