import mongoose from "mongoose";

const coinNetSchema = mongoose.Schema({
  capital: { type: Number },
  description: { type: String },
  lastMovements: { type: String },
});

export default mongoose.model("coinNet", coinNetSchema)