import React from 'react'
import { Link } from 'react-router-dom'

import CitySummary from './CitySumary'

const CityList = ({ cities }) => {
    return (
        <div className="city-list section">
            <div className="container">
            {cities && cities.map(city => {
                return (
                 <Link to={"/cities/"+city._id } key={city._id} >
                    <CitySummary city={city} key={city._id} />
                 </Link>
                )
            })}
            </div>
        </div>
    )
}

export default CityList
