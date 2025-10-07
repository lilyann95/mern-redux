import mongoose from "mongoose";

const leaveSchema = mongoose.Schema({
  userId: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  type: [{ type: String, required: true }],
  status: [{ type: String, required: true }],
  reason: { type: String, required: true },
});

const workModel = mongoose.models.leave || mongoose.model("leave", leaveSchema);

export default workModel;
