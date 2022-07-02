import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       
            <div className='navbar' >
                <div className='navbar_links' >
                    <Link to='/'> Start</Link>
                    <Link to='/about'> Вторая страница</Link>
                </div>
           
        </div>
    );
};

export default Navbar;