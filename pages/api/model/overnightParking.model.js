import mongoose from 'mongoose'

const overnight_parkingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    notes: { type: String },
    trashCan: { type: Boolean },
    toilet: { type: Boolean },
  },
  geometry: {
    coordinates: { type: Array, required: true },
  },
})
const OvernightParking = mongoose.models.OvernightParking || mongoose.model('OvernightParking', overnight_parkingSchema)

export default OvernightParking
