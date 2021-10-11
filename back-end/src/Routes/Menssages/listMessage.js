import messages from "../../data/messages.js";

const listMessages = (req, res) => {

    const limit = req.query.limit;
    let dataMessages = messages.filter((message) => message.to === 'Todos' ||
                                                    message.type == 'message' ||
                                                    message.to === req.get('user') ||
                                                    message.from === req.get('user'));

    if(limit) dataMessages = dataMessages.slice(-parseInt(limit));

    res.send(dataMessages);
}

export default listMessages;