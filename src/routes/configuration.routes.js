import { Router } from "express";
import { getCompanyForId } from "../controller/company.controller.js";
import {
  getBrandsForCompany,
  insertBrand,
} from "../controller/brand.controller.js";
import {
  getCategoryForCompany,
  insertCategory,
} from "../controller/category.controller.js";
import {
  getSucursalForCompany,
  insertSucursal,
} from "../controller/sucursal.controller.js";
import { insertUser, getUsers } from "../controller/user.controller.js";

const router = Router();

// Usuario
router.get("/users/:company", getUsers);
router.post("/users", insertUser); //usuario

// Empresa
router.get("/company/:id", getCompanyForId);

// Marca
router.get("/brands/:company", getBrandsForCompany); //marca
router.post("/brands", insertBrand); //marca

// Sucursal
router.get("/branchs/:company", getSucursalForCompany); //sucursal
router.post("/branchs", insertSucursal); //sucursal

// Categoria
router.get("/categories/:company", getCategoryForCompany); //categoria
router.post("/categories", insertCategory); //categoria

export default router;
