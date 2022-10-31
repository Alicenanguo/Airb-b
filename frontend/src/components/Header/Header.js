import React from 'react';
import './Header.css'


function Header() {
    return (
        <div className='header'>
            <img className='icon' src='http://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
                alt="loading"
            />
            <div className='search_bar'>
                <input type="text" />
                <i className='fa-solid fa-magnifying-glass' />

            </div>
            <div className='upper_right'>
                <p>Become a host</p>
                <i className='fa-solid fa-globe' />
                <div className='drop_down'>
                <i className='fa-solid fa-caret-down' />
                    <i className='fa-solid fa-user' />
                    </div>

            </div>
        </div>
    )
}

export default Header;
