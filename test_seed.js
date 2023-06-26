require('dotenv').config()
require('./config/database')

const Motorcycle = require('./models/motorcycle')

(async function() {

    await Motorcycle.deleteMany({})

    await Motorcycle.create([
        {
            make: "Harley-Davidson",
            model: "Electra Glide Standard",
            year: "2022",
            type: "Touring",
            displacement: "1746.0 ccm (106.54 cubic inches)",
            engine: "V2, four-stroke",
            power: "90.0 HP (65.7  kW)) @ 5450 RPM",
            torque: "150.5 Nm (15.3 kgf-m or 111.0 ft.lbs) @ 3250 RPM",
            compression: "10.0:1",
            bore_stroke: "100.0 x 111.0 mm (3.9 x 4.4 inches)",
            fuel_system: "Injection. Electronic Sequential Port Fuel Injection",
            fuel_control: "Double Overhead Cams/Twin Cam (DOHC)",
            cooling: "Oil & air",
            gearbox: "6-speed",
            transmission: "Belt  (final drive)",
            clutch: "Multi-plate with diaphragm spring in oil bath",
            fuel_consumption: "5.47 litres/100 km (18.3 km/l or 43.00 mpg)",
            emission: "126.9 CO2 g/km. (CO2 - Carbon dioxide emission) ",
            front_suspension: "49 mm Dual Bending Valve fork",
            rear_suspension: "Premium Low Hand-Adjustable Rear Suspension",
            front_tire: "130/80-B17 ",
            rear_tire: "180/65-B16 ",
            front_brakes: "Double disc. Optional ABS. 4-piston",
            rear_brakes: "Single disc. Optional ABS. 4-piston",
            dry_weight: "354.3 kg (781.0 pounds)",
            total_weight: "372.0 kg (820.0 pounds)",
            seat_height: "663 mm (26.1 inches) If adjustable, lowest setting.",
            total_length: "2400 mm (94.5 inches)",
            ground_clearance: "119 mm (4.7 inches)",
            wheelbase: "1625 mm (64.0 inches)",
            fuel_capacity: "22.71 litres (6.00 US gallons)",
            starter: "Electric"
        }
    ])

    process.exit()

})()