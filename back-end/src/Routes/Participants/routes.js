import addUser from "./addParticipants.js";

const participantsRoutes = (app) => {
    app.post('/participants', addUser);
}

export default participantsRoutes;