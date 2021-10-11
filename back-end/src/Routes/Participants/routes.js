import addUser from "./addParticipants.js";
import listParticipants from "./listParticipants.js";

const participantsRoutes = (app) => {
    app.post('/participants', addUser);
    app.get('/participants', listParticipants);
}

export default participantsRoutes;