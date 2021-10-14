import dayjs from "dayjs";
import participants from "../../data/participants.js";
import messages from "../../data/messages.js";
import Joi from "joi";
import { stripHtml } from "string-strip-html";

const addUser = (req, res) => {

    let name = req.body.name;
    name = stripHtml(name).result;

    const nameExist = participants.find((participant) => participant.name === name);
    const userSchema = Joi.object({
        name: Joi.string()
            .required()
    });  
    
    const schemaValidation = userSchema.validate({name});

    if(nameExist || schemaValidation.error) {
        res.sendStatus(400); 
        return;
    }

    name = name.trim();
    const newParticipant = {
        name: name,
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