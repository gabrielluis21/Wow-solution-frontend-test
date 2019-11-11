import React from 'react'

const CitySumary = (city) => {
    return (
        <div className="card z-depth-0 city-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{city.name}</span>
            </div>
        </div>
    )
}

export default CitySumary
