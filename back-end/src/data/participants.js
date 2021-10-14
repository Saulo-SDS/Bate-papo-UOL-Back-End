import fs from "fs";

let path = process.cwd()+"/data/participants.txt";
let participants = [];

if (fs.existsSync(path)) {
    participants = JSON.parse(fs.readFileSync(path));
}

export default participants;