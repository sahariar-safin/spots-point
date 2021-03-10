import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import Male from '../../image/male.png';
import Female from '../../image/female.png';
import Twitter from '../../Icon/Twitter.png';
import Facebook from '../../Icon/Facebook.png';
import Youtube from '../../Icon/YouTube.png';

const LeagueDetails = () => {
    const leagueId = useParams();
    const [leagueDetails, setLeagueDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${ leagueId.leagueId }`)
            .then(res => res.json())
            .then(data => setLeagueDetails(data.leagues[0]))
    }, [leagueId.leagueId])

    const { strBanner, strLeagueAlternate, dateFirstEvent, strCountry, strGender, strDescriptionEN } = leagueDetails;

    let gender;
    if (strGender === 'Male') {
        gender = true;
    } else {
        gender = false;
    }
    return (
        <div className='league-details-container'>
            <div className="league-banner">
                <img src={strBanner} alt="" />
            </div>
            <div className="league-details container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <h2 className='mt-5'>{strLeagueAlternate}</h2>
                        <h6>Founded: {dateFirstEvent} </h6>
                        <h6>Country: {strCountry} </h6>
                        <h6>Sports type: Football</h6>
                        <h6>Gender: {strGender} </h6>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        {gender
                            ? <img src={Male} className='league-image' alt="" />
                            : <img src={Female} className='league-image' alt="" />}
                    </div>
                </div>
            </div>
            <div className="league-description container">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="social-icon container text-center">
                <img src={Twitter} alt="" />
                <img src={Facebook} alt="" />
                <img src={Youtube} alt="" />
            </div>
        </div>
    );
};

export default LeagueDetails;