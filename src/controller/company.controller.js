import Company from "../model/Company.js";
import { HTTP_STATUS } from "../config/configuration.js";
import { isValidObjectId } from 'mongoose';

export const getCompanyForId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: `El ID proporcionado no es válido: ${id}`,
      });
    }

    const data = await Company.findOne({ _id: id });

    if (!data) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        message: `No se encontró ninguna compañía con el ID: ${id}`,
      });
    }

    res.status(HTTP_STATUS.OK).json(data);
  } catch (error) {
    console.error(error);

    // Puedes personalizar el mensaje de error según tus necesidades
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: 'Ocurrió un error al buscar la compañía',
    });
  }
};


export const insertCompany = async (req, res) => {
  const { ruc, companyName, address, province, district, department, phone } =
    req.body;

  if (
    !ruc ||
    !province ||
    !district ||
    !department ||
    !companyName ||
    !address ||
    !phone
  ) {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "Faltan Campos",
    });
  }

  try {
    const campanyData = Company({
      ruc,
      companyName,
      address,
      province,
      district,
      department,
      phone,
    });
    // Guardar empresa en la base de datos
    await campanyData.save();
    res
      .status(HTTP_STATUS.CREATED)
      .json({ status: "success", message: "Se ha agregado una nueva empresa" });
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al crear nueva empresa: ${error}`,
    });
  }
};
