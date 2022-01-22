import React from 'react';
import './SocialMedia.css'

interface social_media{
    profile:string
}
function SocialMedia(props:social_media) {
    return (
        <div className="social_media">
            <ul>
                <li><a href={`${props.profile}`} target="_blank" rel="noreferrer"><i className="fab fa-github" /></a></li>
            </ul>
        </div>
    );
}

export default SocialMedia;