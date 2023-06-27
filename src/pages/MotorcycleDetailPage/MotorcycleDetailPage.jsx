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
        <div>
            <h2 className='white-text'>{motorcycle.year} {motorcycle.model}</h2>
        </div>
    )
}