import React from 'react';
import CityList from '../cities/CityList'


const AllCitieDashboard = (props) => {
    const { cities } = props
    return(
        <div className="section">
            <CityList cities={cities} />
        </div>
    )
}

export default AllCitieDashboard