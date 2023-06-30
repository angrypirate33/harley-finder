import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as motorcyclesAPI from '../../utilities/motorcycles-api'
import './MotorcycleSearchPage.css'


const RangeSlider = ({ min, max, value, step, onChange }) => {
    const [minValue, setMinValue] = useState(value ? value.min : min)
    const [maxValue, setMaxValue] = useState(value ? value.max : max)

    useEffect(() => {
        if (value) {
            setMinValue(value.min)
            setMaxValue(value.max)
        }
    }, [value])

   const handleMinChange = (evt) => {
    evt.preventDefault()
    const newMinVal = Math.min(+evt.target.value, maxValue - step)
    if (!value) setMinValue(newMinVal)
    onChange({ min: newMinVal, max: maxValue })
   }
   
   const handleMaxChange = (evt) => {
    evt.preventDefault()
    const newMaxVal = Math.max(+evt.target.value, minValue + step)
    if (!value) setMaxValue(newMaxVal)
    onChange({ min: minValue, max: newMaxVal })
   }

    const minPos = ((minValue - min) / (max - min)) * 100 
    const maxPos = ((maxValue - min) / (max - min)) * 100

    return (
        <div className='wrapper'>
            <div className='input-wrapper'>
                <input
                    className='input' 
                    type='range'
                    value={minValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleMinChange}
                />
                <input
                    className='input' 
                    type='range'
                    value={maxValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleMaxChange}
                />
            </div>
            <div className='control-wrapper'>
                <div className='control' style={{ left: `${minPos}%` }} />
                <div className='rail'>
                    <div 
                        className='inner-rail'
                        style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                    />
                </div>
                <div className='control' style={{ left: `${maxPos}%` }} />
            </div>
        </div>
    )
}

export default function MotorcycleSearchPage() {

    const [motorcycles, setMotorcycles] = useState([])
    const [yearRange, setYearRange] = useState({ min: 1941, max: 2022 })

    const handleYearRangeChange = (value) => {
        setYearRange(value)
    }

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
                <div className="col s12">
                    <label htmlFor="year-range-slider">Select Year Range:</label>
                    <RangeSlider
                        min={1941}
                        max={2022}
                        step={1}
                        value={yearRange}
                        onChange={handleYearRangeChange}
                    />
                    <span id='minYear'>{yearRange.min}</span>
                    &nbsp;-&nbsp;
                    <span id='maxYear'>{yearRange.max}</span>
                </div>
            </div>
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