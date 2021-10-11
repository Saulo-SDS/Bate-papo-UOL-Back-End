import participantsRoutes from "./Participants/routes.js";
import messagesRoutes from "./Menssages/routes.js";
import statusRoute from "./Status/Route.js";

const routes = (app) => {
    participantsRoutes(app);
    messagesRoutes(app);
    statusRoute(app);
}

export default routes;