import mongoose from "mongoose";

const workSchema = mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  totalHours: { type: Number, required: true },
});

const workModel = mongoose.models.work || mongoose.model("work", workSchema);

export default workModel;
