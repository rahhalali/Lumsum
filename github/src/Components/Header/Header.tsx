import React from 'react';

import GitHub from '../../assets/Images/github_logo.png';

import './Header.css'

function Header() {
    return (
        <div className='first'>
            <div className='logo'>
                <img src={GitHub} alt='' />
            </div>
            <div className='header'>
                <h4>GitHub Searcher</h4>
                <p>Search users or repositories below</p>
            </div>
        </div>
    );
}

export default Header;