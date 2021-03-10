import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const League = (props) => {
    const { idLeague, strLeague } = props.league;
    const [badge, setBadge] = useState();

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${ idLeague }`)
            .then(res => res.json())
            .then(data => setBadge(data.leagues[0].strBadge))
    }, [idLeague])

    return (
        <div className='league-card'>
            <img src={badge} alt="" />
            <h3 className='m-3'>{strLeague}</h3>
            <h5 className='m-3'>Sports type: Football</h5>
            <Link to={'/league/' + idLeague}>
                <button className='btn btn-success'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default League;