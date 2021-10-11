import App from "./app.js";
import Routes from "./Routes/index.js";
import checkUser from "./Utils/index.js";

Routes(App);
App.listen(4000);
setInterval(checkUser, 15000);

console.log("Server on");