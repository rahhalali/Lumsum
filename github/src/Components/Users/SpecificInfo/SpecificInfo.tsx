import React from 'react';
import './SpecificInfo.css'

interface special_Info{
    location:string | null,
    followers:number
}

function SpecificInfo(props:special_Info) {
    return (
        <div className="projects">
            <h3>Specific Info</h3>
            <div className="projects_data">
                <div className="data">
                    <h4>Location</h4>
                    <p>{props.location}</p>
                </div>
                <div className="data">
                    <h4>Followers</h4>
                    <p>{props.followers}</p>
                </div>
            </div>
        </div>
    );
}

export default SpecificInfo;