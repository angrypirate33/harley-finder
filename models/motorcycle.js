const mongoose = require('mongoose')
const Schema = mongoose.Schema

const motorcycleSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    type: String,
    displacement: String,
    engine: String,
    power: String,
    torque: String,
    compression: String,
    bore_stroke: String,
    fuel_system: String,
    fuel_control: String,
    cooling: String,
    gearbox: String,
    transmission: String,
    clutch: String,
    fuel_consumption: String,
    emission: String,
    front_suspension: String,
    rear_suspension: String,
    front_tire: String,
    rear_tire: String,
    front_brakes: String,
    rear_brakes: String,
    dry_weight: String,
    total_weight: String,
    seat_height: String,
    total_length: String,
    ground_clearance: String,
    wheelbase: String,
    fuel_capacity: String,
    starter: String
  })

  module.exports = mongoose.model('Motorcycle', motorcycleSchema)