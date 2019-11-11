import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { deletedCityDelete } from '../../store/actions/cityActions'

const CityDetails = (props) => {
    const { city, auth} = props
    
    if (!auth.token) return <Redirect to='/signin' /> 


    if(city){
        return (
            <div className="container section">
                <div className="row">
                    <div className="card z-depth-0 col s12 m6">
                        <div className="card-content">
                            <span className="card-title">{city.name}</span>
                        </div>
                        <div className="card-action">
                            <button className="waves-effect waves-teal btn-flat" onClick={() => {
                                props.deleteCity(city._id);
                                props.history.push('/');
                            }} >
                                <i className="material-icons">remove_circle</i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container center">
              <p>Loading City..</p>
            </div>
          )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const cities = state.city.cities;
    const city = cities ? cities.find(city => {
        return city._id === id
    }) : null
    return {
        auth: state.auth.currentUser,
        city: city
    }
};

const mapDispatchToProps = dispatch => ({
    deleteCity: _id => dispatch(deletedCityDelete(_id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CityDetails)
