import React from 'react';
import Demo from '../static/Demo.png'

import "./style.css";

function Card({ item }) {
    return (
        <div className="card" key={item.flight_number}>
            <img style={{ width: "200px" }} src={Demo} alt="mission_img" />
            <div className="subHeading spa">
                {item.mission_name} # {item.flight_number}

            </div>
            <div className="subSubHeading  spa">
                Mission Ids
                </div>
            <ul className="mission_ids spa">
                {item.mission_id.map(i => {
                    return (
                        <li>{i}</li>
                    )
                })}

            </ul>
            <div className="section spa">
                <span className="subSubHeading">Launch Year:</span>
                {item.launch_year}
            </div>
            <div className="section spa">
                <span className="subSubHeading">Successful Launch: </span>{item.launch_success ? item.launch_success.toString() : ""}
            </div>
            <div className="section spa" >
                <span className="subSubHeading">Land Success :</span> {item.launch_landing ? item.launch_landing.toString() : ""}
            </div>
        </div>
    )
}

export default Card;