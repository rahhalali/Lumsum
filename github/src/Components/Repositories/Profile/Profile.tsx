import React from 'react';
import './Profile.css'

interface profile{
    repo_name:string,
    author:string | null,
    image:string
}
function Profile({image, author ,repo_name}:profile) {
    return (
        <div className="profile">
            <div className="image">
                <div className="circle-1"/>
                <div className="circle-2"/>
                <img src={image} width={130} height={130}
                     alt="Jessica Potter"/>
            </div>
            <div className="name">Name: {author}</div>
            <div className="job">Repository-Name: {repo_name}</div>
        </div>
    );
}

export default Profile;