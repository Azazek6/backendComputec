import mongoose from "mongoose";

const Sucursal = new mongoose.Schema({
  name: { type: String, require: true },
  schedule: { type: String, require: true },
  location: { type: String, require: true },
  address: { type: String, require: true },
  phone: { type: Number, require: true },
  idCompany: { type: String, require: true },
  status: { type: String, require: true, default: "ACTIVO" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("branchs", Sucursal);
