import addMesseger from "./addMessage.js";

const messagesRoutes = (app) => {
    app.post('/messages', addMesseger);
}

export default messagesRoutes;