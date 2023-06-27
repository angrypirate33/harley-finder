import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as motorcyclesAPI from '../../utilities/motorcycles-api'
import './MotorcycleDetailPage.css'


export default function MotorcycleDetailPage() {

    const { id } = useParams()
    const [motorcycle, setMotorcycle] = useState(null)

    useEffect(() => {
        const fetchMotorcycle = async () => {
            try {
                const response = await motorcyclesAPI.getMotorcycle(id)
                setMotorcycle(response)
            } catch (error) {
                console.log(error)
            }
        }

        fetchMotorcycle()
    }, [id])

    if (!motorcycle) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="card orange">
            <div className="card-content black-text">
                <span className="card-title">{motorcycle.year} {motorcycle.model}</span>
                <ul>
                    <li>Type: {motorcycle.type}</li>
                    <li>Displacement: {motorcycle.displacement}</li>
                    <li>Engine: {motorcycle.engine}</li>
                    <li>Power: {motorcycle.power}</li>
                    <li>Torque: {motorcycle.torque}</li>
                    <li>Top Speed: {motorcycle.top_speed}</li>
                    <li>Gearbox: {motorcycle.gearbox}</li>
                    <li>Transmission: {motorcycle.transmission}</li>
                    <li>Fuel Capacity: {motorcycle.fuel_capacity}</li>
                    <li>Fuel Consumption: {motorcycle.fuel_consumption}</li>
                    <li>Compression Ratio: {motorcycle.compression}</li>
                    <li>Bore Stroke: {motorcycle.bore_stroke}</li>
                    <li>Valves Per Cylinder: {motorcycle.valves_per_cylinder}</li>
                    <li>Fuel System: {motorcycle.fuel_system}</li>
                    <li>Fuel Control: {motorcycle.fuel_control}</li>
                    <li>Ignition: {motorcycle.ignition}</li>
                    <li>Lubrication: {motorcycle.lubrication}</li>
                    <li>Cooling: {motorcycle.cooling}</li>
                    <li>Clutch: {motorcycle.clutch}</li>
                    <li>Emissions: {motorcycle.emission}</li>
                    <li>Frame: {motorcycle.frame}</li>
                    <li>Front Suspension: {motorcycle.front_suspension}</li>
                    <li>Front Wheel Travel: {motorcycle.front_wheel_travel}</li>
                    <li>Rear Suspension: {motorcycle.rear_suspension}</li>
                    <li>Rear Wheel Travel: {motorcycle.rear_wheel_travel}</li>
                    <li>Front Tire: {motorcycle.front_tire}</li>
                    <li>Rear Tire: {motorcycle.rear_tire}</li>
                    <li>Front Brakes: {motorcycle.front_brakes}</li>
                    <li>Rear Brakes: {motorcycle.rear_brakes}</li>
                    <li>Dry Weight: {motorcycle.dry_weight}</li>
                    <li>Total Weight: {motorcycle.total_weight}</li>
                    <li>Seat Height: {motorcycle.seat_height}</li>
                    <li>Total Height: {motorcycle.total_height}</li>
                    <li>Total Length: {motorcycle.total_length}</li>
                    <li>Total Width: {motorcycle.total_width}</li>
                    <li>Ground Clearance: {motorcycle.ground_clearance}</li>
                    <li>Wheelbase: {motorcycle.wheelbase}</li>
                    <li>Starter: {motorcycle.starter}</li>
                </ul>
            </div>
        </div>
    )
}