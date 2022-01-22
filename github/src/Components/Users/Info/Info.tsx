import React from 'react';
import './Info.css'

interface Data{
    email:string | null,
    company:string | null;
}

function Info(props:Data) {
    return (
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                <div className="data">
                    <h4>Email</h4>
                    <p>{props.email }</p>
                </div>
                <div className="data">
                    <h4>company</h4>
                    <p>{props.company}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;