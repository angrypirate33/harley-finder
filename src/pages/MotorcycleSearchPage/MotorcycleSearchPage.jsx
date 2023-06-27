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
            <ul>
                {motorcycles.map(motorcycle => (
                    <li className='white-text' key={motorcycle._id}>{motorcycle.year} {motorcycle.model}</li>
                ))}
            </ul>
        </div>
    )
}