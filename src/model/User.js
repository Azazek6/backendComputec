import mongoose from "mongoose";

const User = new mongoose.Schema({
  document: { type: String, require: true },
  name: { type: String, require: true },
  lastnamep: { type: String, require: true },
  lastnamem: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  rol: { type: String, require: true },
  idSucursal: { type: String, require: true },
  idCompany: { type: String, require: true },
  status: { type: String, require: true, default: "ACTIVO" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("users", User);
