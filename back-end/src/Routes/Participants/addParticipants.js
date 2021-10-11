import dayjs from "dayjs";
import participants from "../../data/participants.js";
import messages from "../../data/messages.js";

const addUser = (req, res) => {
    
    const nameExist = participants.find((participant) => participant.name === req.body.name);

    if(nameExist || !req.body.name) {
        res.sendStatus(400); 
        return;
    }

    const newParticipant = {
        name: req.body.name,
        lastStatus: Date.now(),
    }

    const newMessage = {
        from: req.body.name,
		to: 'Todos',
		text: 'entra na sala...',
		type: 'status',
		time: dayjs().format('HH:mm:ss'),
    }

    participants.push(newParticipant);
	messages.push(newMessage);
	res.sendStatus(200);
}

export default addUser;