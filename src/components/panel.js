import React from 'react';
import Card from './card';

import "./style.css";

function Panel(props) {
    const { data, onSuccessClick,
        onLandSucessClick,
        onLaunchYearClick, success, landSuccess, launchYear } = props;

    const yearButtons = () => {
        let arr = [];
        for (let i = 2006; i <= 2020; i++) {
            arr.push(i);
        }
        return arr;
    }

    return (
        <div>
            <div className="heading">SpaceX Launch Programs</div>
            <div className="mainbody">
                <div className="panel">
                    <div className="filters">
                        <div className="subHeading"> Filters</div>
                        <div className="subSubHeading">Launch Year</div>
                        <hr />

                        <div className="buttonGrid">
                            {yearButtons().map(item => {
                                return (
                                    <button className={launchYear == item ? "infocus" : null} key={item} value={item} onClick={(e) => onLaunchYearClick(e)}>
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                        <div>
                            <div className="subSubHeading">Successful Launch</div>
                            <hr />
                            <div className="buttonGrid">
                                <button className={success == "true" ? "infocus" : null} value={"true"} onClick={(e) => onSuccessClick(e)}>
                                    True
                    </button>
                                <button className={success == "false" ? "infocus" : null} value={"false"} onClick={(e) => onSuccessClick(e)}>
                                    {console.log("success", success)}
                                    False
                    </button>
                            </div>
                        </div>
                        <div className="subSubHeading">Successful Landing</div>
                        <hr />

                        <div class="buttonGrid">
                            <button className={landSuccess == "true" ? "infocus" : null} value={"true"} onClick={(e) => onLandSucessClick(e)}>
                                True
                    </button>
                            <button className={landSuccess == "false" ? "infocus" : null} value={"false"} onClick={(e) => onLandSucessClick(e)}>
                                {console.log("landSuccess", landSuccess)}
                                False

                    </button>
                        </div>
                    </div>
                </div>
                <div className="cardGrid">
                    {data ? data.map(item => {
                        return (
                            <Card item={item} />
                        )
                    }) : <div>data not available</div>}
                </div>
            </div>
            <div><span className="bottomHeading">Developed By: </span> Aditya Acharya</div>
        </div>

    )
}

export default Panel;