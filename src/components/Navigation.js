import React from 'react'
import { Icon, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
export default function Navigation() {
    // const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Navbar className='menu' alignLinks='right'
            id='mobile-nav'
            menuIcon={<Icon>menu</Icon>}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li to='/about'>
                    <Link to='/about'>About</Link>
                </li>
                <li tp='/news'>
                    <Link tp='/news'>News</Link>
                </li>
                <li href='/contact'>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </Navbar>
        // <div className='box'>
        //     <nav className='task' >

        //         <a className='active' href='#home'>Home</a>
        //         <a className='active' href='#news'>News</a>
        //         <a className='active' href='#about'>About</a>
        //         <a className='active' href='#contact'>Contact</a>
        //     </nav>
        // </div>
    )
}