import fs from "fs";

let path = process.cwd()+"/data/messages.txt";
let messages = [];

if (fs.existsSync(path)) {
    messages = JSON.parse(fs.readFileSync(path));
}

export default messages;