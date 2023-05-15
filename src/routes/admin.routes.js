import { Router } from "express";
import { insertCompany } from "../controller/company.controller.js";

const router = Router();

router.post("/companys", insertCompany);

export default router;
