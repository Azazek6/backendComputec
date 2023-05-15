import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  brand: { type: String, require: true },
  category: { type: String, require: true },
  stock: { type: Number, require: true },
  price: { type: Number, require: true },
  igv: { type: Number, require: true, default: 18.00 },
  idCompany: { type: String, require: true },
  status: { type: String, require: true, default: "ACTIVO" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("products", Product);
