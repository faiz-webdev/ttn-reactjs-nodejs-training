import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <header>
                <div className='flex'>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li><Link to={'/home'}>About</Link></li>
                            <li><Link to={'contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className='right-menu'>
                        <div className='user-profile'>
                            <img src="" alt="" />
                            <span>User</span>
                        </div>
                        <div className='cart'>
                            <span>Cart <sup>4</sup></span>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default NavBar