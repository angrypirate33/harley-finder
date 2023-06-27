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
                    {motorcycle.type && <li>Type: {motorcycle.type}</li>}
                    {motorcycle.displacement && <li>Displacement: {motorcycle.displacement}</li>}
                    {motorcycle.engine && <li>Engine: {motorcycle.engine}</li>}
                    {motorcycle.power && <li>Power: {motorcycle.power}</li>}
                    {motorcycle.torque && <li>Torque: {motorcycle.torque}</li>}
                    {motorcycle.top_speed && <li>Top Speed: {motorcycle.top_speed}</li>}
                    {motorcycle.gearbox && <li>Gearbox: {motorcycle.gearbox}</li>}
                    {motorcycle.transmission && <li>Transmission: {motorcycle.transmission}</li>}
                    {motorcycle.fuel_capacity && <li>Fuel Capacity: {motorcycle.fuel_capacity}</li>}
                    {motorcycle.fuel_consumption && <li>Fuel Consumption: {motorcycle.fuel_consumption}</li>}
                    {motorcycle.seat_height && <li>Seat Height: {motorcycle.seat_height}</li>}
                    {motorcycle.compression && <li>Compression Ratio: {motorcycle.compression}</li>}
                    {motorcycle.bore_stroke && <li>Bore Stroke: {motorcycle.bore_stroke}</li>}
                    {motorcycle.valves_per_cylinder && <li>Valves Per Cylinder: {motorcycle.valves_per_cylinder}</li>}
                    {motorcycle.fuel_system && <li>Fuel System: {motorcycle.fuel_system}</li>}
                    {motorcycle.fuel_control && <li>Fuel Control: {motorcycle.fuel_control}</li>}
                    {motorcycle.ignition && <li>Ignition: {motorcycle.ignition}</li>}
                    {motorcycle.lubrication && <li>Lubrication: {motorcycle.lubrication}</li>}
                    {motorcycle.cooling && <li>Cooling: {motorcycle.cooling}</li>}
                    {motorcycle.clutch && <li>Clutch: {motorcycle.clutch}</li>}
                    {motorcycle.emission && <li>Emissions: {motorcycle.emission}</li>}
                    {motorcycle.frame && <li>Frame: {motorcycle.frame}</li>}
                    {motorcycle.front_suspension && <li>Front Suspension: {motorcycle.front_suspension}</li>}
                    {motorcycle.front_wheel_travel && <li>Front Wheel Travel: {motorcycle.front_wheel_travel}</li>}
                    {motorcycle.rear_suspension && <li>Rear Suspension: {motorcycle.rear_suspension}</li>}
                    {motorcycle.rear_wheel_travel && <li>Rear Wheel Travel: {motorcycle.rear_wheel_travel}</li>}
                    {motorcycle.front_tire && <li>Front Tire: {motorcycle.front_tire}</li>}
                    {motorcycle.rear_tire && <li>Rear Tire: {motorcycle.rear_tire}</li>}
                    {motorcycle.front_brakes && <li>Front Brakes: {motorcycle.front_brakes}</li>}
                    {motorcycle.rear_brakes && <li>Rear Brakes: {motorcycle.rear_brakes}</li>}
                    {motorcycle.dry_weight && <li>Dry Weight: {motorcycle.dry_weight}</li>}
                    {motorcycle.total_weight && <li>Total Weight: {motorcycle.total_weight}</li>}
                    {motorcycle.total_height && <li>Total Height: {motorcycle.total_height}</li>}
                    {motorcycle.total_length && <li>Total Length: {motorcycle.total_length}</li>}
                    {motorcycle.total_width && <li>Total Width: {motorcycle.total_width}</li>}
                    {motorcycle.ground_clearance && <li>Ground Clearance: {motorcycle.ground_clearance}</li>}
                    {motorcycle.wheelbase && <li>Wheelbase: {motorcycle.wheelbase}</li>}
                    {motorcycle.starter && <li>Starter: {motorcycle.starter}</li>}
                </ul>
            </div>
        </div>
    )
}