import { useState, useEffect } from 'react'
import * as motorcyclesAPI from '../../utilities/motorcycles-api'
import './MotorcycleSearchPage.css'


export default function MotorcycleSearchPage() {

    const [motorcycles, setMotorcycles] = useState([])

    useEffect(() => {
        const fetchMotorcycles = async () => {
            try {
                const response = await motorcyclesAPI.getMotorcycles()
                const slicedMotorcycles = response.slice(0, 10)
                setMotorcycles(slicedMotorcycles)
            } catch(error) {
                console.log(error)
            }
        }
        fetchMotorcycles()
    }, [])

    return (
        <div>
            <h2>MotorcycleSearchPage</h2>
            <div className="row">
                {motorcycles.map(motorcycle => (
                    <div className="col s12 m6 l4" key={motorcycle._id}>
                        <div className="card orange">
                            <div className="card-content">
                                <span className="card-title black-text">{motorcycle.year} {motorcycle.model}</span>
                                <ul>
                                <li className='black-text'>Type: {motorcycle.type}</li>
                                <li className='black-text'>Displacement: {motorcycle.displacement}</li>
                                <li className='black-text'>Power: {motorcycle.power}</li>
                                <li className='black-text'>Gearbox: {motorcycle.gearbox}</li>
                                <li className='black-text'>Seat Height: {motorcycle.seat_height}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}