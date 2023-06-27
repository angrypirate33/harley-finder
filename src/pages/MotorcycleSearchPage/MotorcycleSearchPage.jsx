import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            <div className='row'>
                {motorcycles.map(motorcycle => (
                    <div className='col s12 m6 l4' key={motorcycle._id}>
                        <Link to={`/motorcycles/${motorcycle._id}`}>
                            <div className='card orange'>
                                <div className='card-content'>
                                    <span className='card-title black-text truncate' id='searchTitle'>{motorcycle.year} {motorcycle.model}</span>
                                    <ul>
                                    <li className='black-text truncate'>Type: {motorcycle.type}</li>
                                    <li className='black-text truncate'>Displacement: {motorcycle.displacement}</li>
                                    <li className='black-text truncate'>Power: {motorcycle.power}</li>
                                    <li className='black-text truncate'>Gearbox: {motorcycle.gearbox}</li>
                                    <li className='black-text truncate'>Seat Height: {motorcycle.seat_height}</li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}