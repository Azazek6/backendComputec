import Products from "../model/Products.js";
import { HTTP_STATUS } from "../config/configuration.js";

//Traer todos los productos
export const getProducts = async (req, res) => {
  const data = await Products.find({ idCompany: req.params.company });
  res.status(HTTP_STATUS.OK).json(data);
};

//Traer un producto por categoria
export const getProductsForCategory = async (req, res) => {
  const { company, category } = req.params;

  if (company != "643225d2b48bc28f4f03ac00") {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "El codigo de la empresa no es la correcta..!",
    });
  }

  try {
    const products = await Products.find({ category, idCompany: company });

    res.status(HTTP_STATUS.OK).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al buscar productos en la categoría: ${error}`,
    });
  }
};

//Traer un producto por marca
export const getProductsForBrand = async (req, res) => {
  const { company, brand } = req.params;

  if (company != "643225d2b48bc28f4f03ac00") {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "El codigo de la empresa no es la correcta..!",
    });
  }

  try {
    const products = await Products.find({ brand, idCompany: company });

    res.status(HTTP_STATUS.OK).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al buscar productos en la marca: ${error}`,
    });
  }
};

//Traer todos los productos
export const getOneProduct = async (req, res) => {
  try {
    const data = await Products.findOne({
      idCompany: req.params.company,
      _id: req.params.id,
    });
    if (data.length != 0) {
      res.status(HTTP_STATUS.OK).json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error obtener producto: ${error}`,
    });
  }
};

//Registrar producto
export const insertProduct = async (req, res) => {
  const { name, description, brand, category, stock, price, idCompany } =
    req.body;
  if (
    !name ||
    !description ||
    !brand ||
    !category ||
    !stock ||
    !price ||
    !idCompany
  ) {
    return res.status(HTTP_STATUS.OK).json({
      status: "error",
      message: "Faltan Campos",
    });
  }

  try {
    const productData = Products({
      name: name.toUpperCase(),
      description: description.toUpperCase(),
      brand: brand.toUpperCase(),
      category: category.toUpperCase(),
      stock,
      price,
      idCompany,
    });
    // Guardar producto en la base de datos
    await productData.save();
    res
      .status(201)
      .json({ status: "success", message: "Se ha creado un nuevo producto" });
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: `Error al crear producto: ${error}`,
    });
  }
};
