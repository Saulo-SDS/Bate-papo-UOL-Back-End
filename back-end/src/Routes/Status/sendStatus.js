import participants from "../../data/participants";

const sendStatus = (req, res) => {

    const fromUser = req.get('user');
    const userExist = participants.find((participant) => participant.name === fromUser);

    if(!userExist) {
        res.sendStatus(400); 
        return;
    }

    userExist.lastStatus = Data.now();
    res.sendStatus(200); 
}

export default sendStatus;