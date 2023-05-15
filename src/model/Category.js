import mongoose from "mongoose";

const Category = new mongoose.Schema({
  name: { type: String, require: true },
  idCompany: { type: String, require: true },
  status: { type: String, require: true, default: "ACTIVO" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("categories", Category);
