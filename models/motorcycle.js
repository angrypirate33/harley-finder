const mongoose = require('mongoose')
const Schema = mongoose.Schema

const motorcycleSchema = new Schema({
    make: {
      type: String
    },
    model: {
      type: String
    },
    year: {
      type: String
    },
    type: {
      type: String
    },
    displacement: {
      type: String
    },
    engine: {
      type: String
    },
    power: {
      type: String
    },
    torque: {
      type: String
    },
    top_speed: {
      type: String
    },
    compression: {
      type: String
    },
    bore_stroke: {
      type: String
    },
    valves_per_cylinder: {
      type: String
    },
    fuel_system: {
      type: String
    },
    fuel_control: {
      type: String
    },
    ignition: {
      type: String
    },
    lubrication: {
      type: String
    },
    cooling: {
      type: String
    },
    gearbox: {
      type: String
    },
    transmission: {
      type: String
    },
    clutch: {
      type: String
    },
    fuel_consumption: {
      type: String
    },
    emission: {
      type: String
    },
    frame: {
      type: String
    },
    front_suspension: {
      type: String
    },
    front_wheel_travel: {
      type: String
    },
    rear_suspension: {
      type: String
    },
    rear_wheel_travel: {
      type: String
    },
    front_tire: {
      type: String
    },
    rear_tire: {
      type: String
    },
    front_brakes: {
      type: String
    },
    rear_brakes: {
      type: String
    },
    dry_weight: {
      type: String
    },
    total_weight: {
      type: String
    },
    seat_height: {
      type: String
    },
    total_height: {
      type: String
    },
    total_length: {
      type: String
    },
    total_width: {
      type: String
    },
    ground_clearance: {
      type: String
    },
    wheelbase: {
      type: String
    },
    fuel_capacity: {
      type: String
    },
    starter: {
      type: String
    }
  })

  module.exports = mongoose.model('Motorcycle', motorcycleSchema)