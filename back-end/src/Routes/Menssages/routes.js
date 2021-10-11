import addMessage from "./addMessage.js";
import listMessages from "./listMessage.js";

const messagesRoutes = (app) => {

    app.post('/messages', addMessage);
    app.get('/messages', listMessages);
}

export default messagesRoutes;