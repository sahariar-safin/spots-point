import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import League from '../League/League';
import './LeaguesList.css';

const LeaguesList = () => {
    const [league, setLeague] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues.slice(0, 10)))
    }, []);
    return (
        <div className="leagues-list">
            <div className='d-flex justify-content-evenly flex-wrap container'>
                {league.map(league => <League league={league}></League>)}
            </div>
        </div>
    );
};

export default LeaguesList;