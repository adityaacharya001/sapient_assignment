import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import Panel from './panel';

import "./style.css";

function MainPage() {
    const history = useHistory();
    const [data, setData] = useState("");
    const [success, setSuccess] = useState("");
    const [landSuccess, setLandSucess] = useState("");
    const [launchYear, setLaunchYear] = useState("");

    const onSuccessClick = (data) => {
        setSuccess(data.target.value);
    }

    const onLandSucessClick = (data) => {
        setLandSucess(data.target.value);
    }

    const onLaunchYearClick = (data) => {
        setLaunchYear(data.target.value);
    }

    const apiCall = axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${success}&land_success=${landSuccess}&launch_year=${launchYear}`)

    useEffect(() => {
        const data = async () => {
            try {
                const result = await apiCall;
                setData(result.data);
            } catch (err) {
                console.log("err", err);
            }
        }
        data();
        history.push(`/success=${success ? success : "none"}/land_success=${landSuccess ? landSuccess : "none"}/year=${launchYear ? launchYear : "none"}`)
    }, [success, landSuccess, launchYear])

    return (
        <Route exact path="/:success/:land_success/:launch_year">
            <Panel
                data={data}
                onSuccessClick={onSuccessClick}
                onLandSucessClick={onLandSucessClick}
                onLaunchYearClick={onLaunchYearClick}
                success={success}
                landSuccess={landSuccess}
                launchYear={launchYear} />
        </Route>
    )
}

export default MainPage;