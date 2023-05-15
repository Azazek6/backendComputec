import Sucursal from "../model/Sucursal.js";
import { HTTP_STATUS } from "../config/configuration.js";

//Obtener datos por empresa
export const getSucursalForCompany = async (req, res) => {
  const data = await Sucursal.find({ idCompany: req.params.company });
  res.status(HTTP_STATUS.OK).json(data);
};

export const insertSucursal = async (req, res) => {
  const { name, schedule, location, address, phone, idCompany } = req.body;
  if (!name || !schedule || !location || !address || !phone || !idCompany) {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "Faltan Campos",
    });
  }

  try {
    const SucursalData = Sucursal({
      name: name.toUpperCase(),
      schedule: schedule.toUpperCase(),
      location: location.toUpperCase(),
      address: address.toUpperCase(),
      phone,
      idCompany,
    });
    // Guardar marca en la base de datos
    await SucursalData.save();
    res
      .status(HTTP_STATUS.CREATED)
      .json({ status: "success", message: "Se ha creado una nueva sucursal" });
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al crear sucursal: ${error}`,
    });
  }
};
