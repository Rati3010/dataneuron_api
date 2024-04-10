import { Schema, model } from "mongoose";

const updateTrackingSchema = new Schema({
  update_count: {
    type: Number,
    default: 0
  }
});

const UpdateTracking = model('UpdateTracking', updateTrackingSchema);

export default UpdateTracking;
