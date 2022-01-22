import React from 'react';
import './Stats.css'

interface stats{
    watchers_count:number,
    stars:number,
    open_issues_count:number,
    forks_count:number
}

function Stats({watchers_count, stars, open_issues_count, forks_count}:stats) {
    return (
        <div className="stats">
            <div className="box">
                <span className="value">{stars}</span>
                <span className="parameter">Stars</span>
            </div>
            <div className="box">
                <span className="value">{open_issues_count}</span>
                <span className="parameter">open_issues_count</span>
            </div>
            <div className="box">
                <span className="value">{watchers_count}</span>
                <span className="parameter">watchers_count</span>
            </div>
            <div className="box">
                <span className="value">{forks_count}</span>
                <span className="parameter">fork_count</span>
            </div>
        </div>
    );
}

export default Stats;