import participantsRoutes from "./Participants/routes.js";
import messagesRoutes from "./Menssages/routes.js";
const routes = (app) => {
    participantsRoutes(app);
    messagesRoutes(app);
}

export default routes;