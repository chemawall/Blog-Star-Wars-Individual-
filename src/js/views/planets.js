import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const Planets = props => {

    const [planetDetail,setPlanetDetail] = useState([])
    const params = useParams();
    
    useEffect(() =>{
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`) 
        

    .then((response) => {
    console.log(response.ok); // will be true if the response is successfull
    console.log(response.status); // the status code = 200 or code = 400 etc.
    return response.json();
        })

    .then((response) => {
    setPlanetDetail(response.result.properties)
        })
    .catch(error => console.error("Error:", error))

        },[])



           
            
    return (
        <div className="container">
            <div className="row pb-3 border-bottom border-danger border-1">
                <div className="col-md-5">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} width="500px" className=""/>
                </div>
                <div className="col-md-7">
                        <h2 className="d-flex justify-content-center">{planetDetail.name}</h2>
                        <p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>
                
            
            <div class="row pt-4">
                        <h6 className="col-md-2"><p>Name</p><p>{planetDetail.name}</p></h6>
                        <h6 className="col-md-2"><p>Climate</p><p> {planetDetail.climate}</p> </h6>
                        <h6 className="col-md-2"><p>Population</p><p> {planetDetail.population}</p> </h6>
                        <h6 className="col-md-2"><p>Orbital</p><p> Period {planetDetail.orbital_period}</p> </h6>
                        <h6 className="col-md-2"><p>Rotation</p><p> Period {planetDetail.rotation_period}</p> </h6>
                        <h6 className="col-md-2"><p>Diameter</p><p> {planetDetail.diameter}</p> </h6>
            </div>
		</div>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};

/*<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

<hr className="my-4" />*/
