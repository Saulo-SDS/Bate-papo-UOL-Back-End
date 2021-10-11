import dayjs from "dayjs";
import participants from "../../data/participants.js";
import messages from "../../data/messages.js";

const addMensseger = (req, res) => {

    const fromUser = req.get('user');
    const message = req.body;
    const userExist = participants.find((participant) => participant.name === fromUser);
    const typeValid = message.type === 'message' || message.type === 'private_message';

    const messageInvalid = !message.to || !message.text || !userExist || !typeValid;

    if(messageInvalid) {
        res.sendStatus(400);
        return;
    }

    message.from = fromUser;
    message.time = dayjs().format('HH:mm:ss');
    messages.push(message);
    console.log(messages)
    res.sendStatus(200);
}

export default addMensseger;