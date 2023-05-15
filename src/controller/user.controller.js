import User from "../model/User.js";
import { HTTP_STATUS } from "../config/configuration.js";

export const insertUser = async (req, res) => {
  const {
    document,
    name,
    lastnamep,
    lastnamem,
    username,
    password,
    idSucursal,
    idCompany,
    rol,
  } = req.body;

  if (
    !document ||
    !name ||
    !lastnamep ||
    !lastnamem ||
    !username ||
    !password ||
    !idSucursal ||
    !idCompany ||
    !rol
  ) {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "Faltan Campos",
    });
  }

  try {
    const UserData = User({
      document,
      name,
      lastnamep,
      lastnamem,
      username,
      password,
      rol,
      idSucursal,
      idCompany,
    });
    // Guardar marca en la base de datos
    await UserData.save();
    res
      .status(HTTP_STATUS.CREATED)
      .json({ status: "success", message: "Se ha creado un nuevo usuario" });
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al crear usuario: ${error}`,
    });
  }
};

