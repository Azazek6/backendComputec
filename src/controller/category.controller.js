import Category from "../model/Category.js";
import { HTTP_STATUS } from "../config/configuration.js";

//Obtener datos por empresa
export const getCategoryForCompany = async (req, res) => {
  const data = await Category.find({ idCompany: req.params.company });
  res.status(HTTP_STATUS.OK).json(data);
};

//Registrar categoria
export const insertCategory = async (req, res) => {
  const { name, idCompany } = req.body;
  if (!name || !idCompany) {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "Faltan Campos",
    });
  }

  try {
    const upperCaseName = name.toUpperCase();
    const categoyData = Category({
      name: upperCaseName,
      idCompany,
    });
    // Guardar categoria en la base de datos
    await categoyData.save();
    res
      .status(HTTP_STATUS.CREATED)
      .json({ status: "success", message: "Se ha creado una nueva categoria" });
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al crear categoria: ${error}`,
    });
  }
};
