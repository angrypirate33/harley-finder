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
        <div className="card orange" id='detailCard'>
            <div className="card-content black-text">
                <span className="card-title" id='detailsTitle'>{motorcycle.year} {motorcycle.model}</span>
                <ul className='left-align'>
                    {motorcycle.type && <li><span className='detailHeader'>Type:</span> {motorcycle.type}</li>}
                    {motorcycle.displacement && <li><span className='detailHeader'>Displacement:</span> {motorcycle.displacement}</li>}
                    {motorcycle.engine && <li><span className='detailHeader'>Engine:</span> {motorcycle.engine}</li>}
                    {motorcycle.power && <li><span className='detailHeader'>Power:</span> {motorcycle.power}</li>}
                    {motorcycle.torque && <li><span className='detailHeader'>Torque:</span> {motorcycle.torque}</li>}
                    {motorcycle.top_speed && <li><span className='detailHeader'>Top Speed:</span> {motorcycle.top_speed}</li>}
                    {motorcycle.gearbox && <li><span className='detailHeader'>Gearbox:</span> {motorcycle.gearbox}</li>}
                    {motorcycle.transmission && <li><span className='detailHeader'>Transmission:</span> {motorcycle.transmission}</li>}
                    {motorcycle.fuel_capacity && <li><span className='detailHeader'>Fuel Capacity:</span> {motorcycle.fuel_capacity}</li>}
                    {motorcycle.fuel_consumption && <li><span className='detailHeader'>Fuel Consumption:</span> {motorcycle.fuel_consumption}</li>}
                    {motorcycle.seat_height && <li><span className='detailHeader'>Seat Height:</span> {motorcycle.seat_height}</li>}
                    {motorcycle.compression && <li><span className='detailHeader'>Compression Ratio:</span> {motorcycle.compression}</li>}
                    {motorcycle.bore_stroke && <li><span className='detailHeader'>Bore Stroke:</span> {motorcycle.bore_stroke}</li>}
                    {motorcycle.valves_per_cylinder && <li><span className='detailHeader'>Valves Per Cylinder:</span> {motorcycle.valves_per_cylinder}</li>}
                    {motorcycle.fuel_system && <li><span className='detailHeader'>Fuel System:</span> {motorcycle.fuel_system}</li>}
                    {motorcycle.fuel_control && <li><span className='detailHeader'>Fuel Control:</span> {motorcycle.fuel_control}</li>}
                    {motorcycle.ignition && <li><span className='detailHeader'>Ignition:</span> {motorcycle.ignition}</li>}
                    {motorcycle.lubrication && <li><span className='detailHeader'>Lubrication:</span> {motorcycle.lubrication}</li>}
                    {motorcycle.cooling && <li><span className='detailHeader'>Cooling:</span> {motorcycle.cooling}</li>}
                    {motorcycle.clutch && <li><span className='detailHeader'>Clutch:</span> {motorcycle.clutch}</li>}
                    {motorcycle.emission && <li><span className='detailHeader'>Emissions:</span> {motorcycle.emission}</li>}
                    {motorcycle.frame && <li><span className='detailHeader'>Frame:</span> {motorcycle.frame}</li>}
                    {motorcycle.front_suspension && <li><span className='detailHeader'>Front Suspension:</span> {motorcycle.front_suspension}</li>}
                    {motorcycle.front_wheel_travel && <li><span className='detailHeader'>Front Wheel Travel:</span> {motorcycle.front_wheel_travel}</li>}
                    {motorcycle.rear_suspension && <li><span className='detailHeader'>Rear Suspension:</span> {motorcycle.rear_suspension}</li>}
                    {motorcycle.rear_wheel_travel && <li><span className='detailHeader'>Rear Wheel Travel:</span> {motorcycle.rear_wheel_travel}</li>}
                    {motorcycle.front_tire && <li><span className='detailHeader'>Front Tire:</span> {motorcycle.front_tire}</li>}
                    {motorcycle.rear_tire && <li><span className='detailHeader'>Rear Tire:</span> {motorcycle.rear_tire}</li>}
                    {motorcycle.front_brakes && <li><span className='detailHeader'>Front Brakes:</span> {motorcycle.front_brakes}</li>}
                    {motorcycle.rear_brakes && <li><span className='detailHeader'>Rear Brakes:</span> {motorcycle.rear_brakes}</li>}
                    {motorcycle.dry_weight && <li><span className='detailHeader'>Dry Weight:</span> {motorcycle.dry_weight}</li>}
                    {motorcycle.total_weight && <li><span className='detailHeader'>Total Weight:</span> {motorcycle.total_weight}</li>}
                    {motorcycle.total_height && <li><span className='detailHeader'>Total Height:</span> {motorcycle.total_height}</li>}
                    {motorcycle.total_length && <li><span className='detailHeader'>Total Length:</span> {motorcycle.total_length}</li>}
                    {motorcycle.total_width && <li><span className='detailHeader'>Total Width:</span> {motorcycle.total_width}</li>}
                    {motorcycle.ground_clearance && <li><span className='detailHeader'>Ground Clearance:</span> {motorcycle.ground_clearance}</li>}
                    {motorcycle.wheelbase && <li><span className='detailHeader'>Wheelbase:</span> {motorcycle.wheelbase}</li>}
                    {motorcycle.starter && <li><span className='detailHeader'>Starter:</span> {motorcycle.starter}</li>}
                </ul>
            </div>
        </div>
    )
}