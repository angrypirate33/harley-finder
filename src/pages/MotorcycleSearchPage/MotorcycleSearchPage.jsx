import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AsyncSelect from 'react-select/async'
import * as motorcyclesAPI from '../../utilities/motorcycles-api'
import './MotorcycleSearchPage.scss'


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
                    id='minYearSlider'
                    type='range'
                    value={minValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleMinChange}
                />
                <input
                    className='input' 
                    id='maxYearSlider'
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
    const [models, setModels] = useState([])
    const [selectedModels, setSelectedModels] = useState([])

    const handleYearRangeChange = (value) => {
        setYearRange(value)
    }

    const loadModelOptions = (inputValue, callback) => {
        motorcyclesAPI.getModelsBySearch(inputValue)
            .then(models => {
                const uniqueModels = Array.from(new Set(models)).sort()
                const options = uniqueModels.map(model => ({ value: model, label: model }))
                callback(options)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await motorcyclesAPI.getUniqueModels()
                setModels(response)
            } catch (error) {
                console.log(error)
            }
        }

        fetchModels()

    }, [])

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
                <div id='search-criteria'>
                    <h5>Search Criteria</h5>
                    <div className="row">
                        <div className="col s12">
                            <label htmlFor="year-range-slider" id='slider-label'>Select Year Range:</label>
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
                    <div className="row">
                        <div className="col s12">
                            <label htmlFor="model-select" id='dropdown-label'>Select Model:</label>
                            <AsyncSelect
                                id='dropdown-menu'
                                isMulti
                                cacheOptions
                                defaultOptions
                                loadOptions={loadModelOptions}
                                onChange={setSelectedModels}
                                value={selectedModels}
                                styles={{
                                    option: (provided, state) => ({
                                        ...provided,
                                        color: state.isFocused ? 'black' : 'white',
                                        backgroundColor: state.isFocused ? 'orange' : 'black',
                                    }),
                                    multiValue: (styles) => {
                                        return {
                                            ...styles,
                                            backgroundColor: 'orange',
                                        };
                                    },
                                    multiValueLabel: (styles) => ({
                                        ...styles,
                                        color: 'black',
                                    }),
                                    multiValueRemove: (styles) => ({
                                        ...styles,
                                        color: 'white',
                                        ':hover': {
                                            backgroundColor: 'red',
                                            color: 'white',
                                        },
                                    }),
                                    control: (base, state) => ({
                                        ...base,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        borderColor: state.isFocused ? 'orange' : 'white',
                                        boxShadow: state.isFocused ? '0 0 0 3px rgba(255, 165, 0, 0.5)' : null, // Orange shadow
                                        ":hover": {
                                            borderColor: 'white'
                                        }
                                    }),
                                    singleValue: (provided, state) => {
                                        const opacity = state.isDisabled ? 0.5 : 1;
                                        const transition = 'opacity 300ms';
                            
                                        return { ...provided, opacity, transition, color: 'white' };
                                    },
                                    placeholder: (defaultStyles) => {
                                        return {
                                            ...defaultStyles,
                                            color: 'white',
                                        }
                                    },
                                    dropdownIndicator: (defaultStyles) => {
                                        return {
                                            ...defaultStyles,
                                            color: 'white'
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className='row'>
                    <button
                        className='btn orange waves-effect waves-light'
                        id='search-button'
                        type='submit'
                        name='action'
                    >
                        Search
                    </button>
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