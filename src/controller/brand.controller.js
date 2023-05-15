import Brand from "../model/Brand.js";
import { HTTP_STATUS } from "../config/configuration.js";

//Obtener datos por empresa
export const getBrandsForCompany = async (req, res) => {
  const data = await Brand.find({ idCompany: req.params.company });
  res.status(HTTP_STATUS.OK).json(data);
};

//Registrar marca
export const insertBrand = async (req, res) => {
  const { name, idCompany } = req.body;
  if (!name || !idCompany) {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "Faltan Campos",
    });
  }

  try {
    const upperCaseName = name.toUpperCase();
    const brandData = Brand({
      name: upperCaseName,
      idCompany,
    });
    // Guardar marca en la base de datos
    await brandData.save();
    res
      .status(HTTP_STATUS.CREATED)
      .json({ status: "success", message: "Se ha creado una nueva marca" });
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al crear marca: ${error}`,
    });
  }
};
