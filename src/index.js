import app from "./app.js";
import { connectionDB as conexion } from "./config/database.js";

// Inicio del servidor API
const initBD = async () => {
  await conexion();
};

initBD();
app.listen(app.get("PORT"), () => {
  console.log(`server in port ${app.get("PORT")}`);
});
