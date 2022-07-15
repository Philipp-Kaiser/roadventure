import mongoose from 'mongoose'

const { Schema } = mongoose
mongoose.Promise = global.Promise

const roadtripSchema = new Schema({
  name: { type: String, required: true },
  locations: Array,
  costs: Array,
})
const Roadtrip = mongoose.models.Roadtrip || mongoose.model('Roadtrip', roadtripSchema)

export default Roadtrip
