import dayjs from "dayjs";
import participants from "../data/participants.js";
import messages from "../data/messages.js";
import fs from "fs";

const checkUser = () => {
    const users = participants.filter((participant) => {
        if (Date.now() - participant.lastStatus <= 10000) return true;
        userLogout(participant);
    });
    
    participants.length = 0;
    users.forEach((user) => participants.push(user));
}

const userLogout = (user) => {
    const message = {
        from: user.name,
		to: 'Todos',
		text: 'sai da sala...',
		type: 'status',
		time: dayjs().format('HH:mm:ss'),
    }
    messages.push(message);

    let pathMessage = process.cwd()+"/data/messages.txt";
    fs.writeFileSync(pathMessage, JSON.stringify(messages));

    let pathParticipants = process.cwd()+"/data/participants.txt";
    fs.writeFileSync(pathParticipants, JSON.stringify(participants));
}

export default checkUser;