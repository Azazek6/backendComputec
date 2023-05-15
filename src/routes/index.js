import { Router } from "express";
//Rutas administrativas
import Admin from "./admin.routes.js";
import Store from "./store.routes.js";
import configuration from "./configuration.routes.js";

const router = Router();

router.use("/api/administrator", Admin);
router.use("/api/store", Store);
router.use("/api/configuration", configuration);

export default router;
