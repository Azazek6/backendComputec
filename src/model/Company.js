import mongoose from "mongoose";

const Company = new mongoose.Schema({
  ruc: { type: Number, require: true },
  companyName: { type: String, require: true },
  address: { type: String, require: true },
  province: { type: String, require: true },
  district: { type: String, require: true },
  department: { type: String, require: true },
  phone: { type: Number, require: true },
  logo: { type: String, require: true, default: null },
  status: { type: String, require: true, default: "ACTIVO" },
  website: { type: String, require: true, default: "DESACTIVADO" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("companys", Company);
