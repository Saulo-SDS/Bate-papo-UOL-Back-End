import dayjs from "dayjs";
import participants from "../data/participants.js";
import messages from "../data/messages.js";

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
}

export default checkUser;