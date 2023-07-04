import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal'
import AsyncSelect from 'react-select/async'
import * as motorcyclesAPI from '../../utilities/motorcycles-api'
import * as wishlistsAPI from '../../utilities/wishlists-api'
import comingSoon from '../../components/Images/image_coming_soon.png'
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
    const [userWishlists, setUserWishlists] = useState([])
    const [selectedWishlist, setSelectedWishlist] = useState(null)
    const [selectedMotorcycle, setSelectedMotorcycle] = useState(null)

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

    const handleSearch = async () => {
        try {
            const response = await motorcyclesAPI.searchMotorcycles({
                yearRange: yearRange,
                models: selectedModels.map(model => model.value)
            })
            setMotorcycles(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddToWishlist = async (motorcycle) => {
        try {
            await wishlistsAPI.addMotorcycle(motorcycle._id, selectedWishlist)
            setSelectedWishlist(null)
            document.querySelector(`#motorcycle-${motorcycle._id} .card-reveal .card-title i`).click()
        } catch (error) {
            console.log(error)
        }
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

    useEffect(() => {
        const fetchWishlists = async () => {
            try {
                const wishlists = await wishlistsAPI.getAllWishlists()
                setUserWishlists(wishlists)
            } catch (error) {
                console.log(error)
            }
        }
        fetchWishlists()
    }, [])

    useEffect(() => {
        let elems = document.querySelectorAll('select');
        let instances = window.M.FormSelect.init(elems, {});
    }, [motorcycles])

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
                                    input: (provided) => ({ 
                                        ...provided, 
                                        color: 'white' 
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
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                    </div>
                </div>
                <div className='row'>
                    {motorcycles.map(motorcycle => (
                        <div className='col s12 m6 l4' key={motorcycle._id}>
                                <div className='card orange' id={`motorcycle-${motorcycle._id}`}>
                                    <div className='card-image waves-effect waves-block waves-light'>
                                        <img className='activator' src={comingSoon} alt='coming soon' />
                                    </div>
                                    <div className='card-content'>
                                    <span className='card-title activator black-text text-darken-4'>{motorcycle.year} {motorcycle.model}<i className='material-icons right'>more_vert</i></span>
                                    </div>
                                    <div>

                                    </div>
                                    <div className='card-reveal orange'>
                                    <span 
                                        className='card-title black-text text-darken-4'>
                                        <Link 
                                            id='card-reveal-link'
                                            to={`/motorcycles/${motorcycle._id}`}>{motorcycle.year} {motorcycle.model}
                                        </Link>
                                        <i className='material-icons right'>close</i></span>
                                        <ul>
                                            <li className='black-text truncate'>Type: {motorcycle.type}</li>
                                            <li className='black-text truncate'>Displacement: {motorcycle.displacement}</li>
                                            <li className='black-text truncate'>Power: {motorcycle.power}</li>
                                            <li className='black-text truncate'>Gearbox: {motorcycle.gearbox}</li>
                                            <li className='black-text truncate'>Seat Height: {motorcycle.seat_height}</li>
                                        </ul>
                                        <div className='row'>
                                           <p id='select-wishlist-card-title'>Select Wishlist:</p> 
                                        </div>
                                        <div className='row'>
                                            <select
                                                id='wishlist-select'
                                                value={selectedWishlist}
                                                onChange={evt => setSelectedWishlist(evt.target.value)}
                                            >
                                                {userWishlists.map(wishlist => (
                                                    <option value={wishlist._id} key={wishlist._id}>{wishlist.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button
                                            className='btn black waves-effect waves-light'
                                            type='submit'
                                            name='action'
                                            onClick={() => handleAddToWishlist(motorcycle)}
                                        >
                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}