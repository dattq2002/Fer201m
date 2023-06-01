import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeConText';
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <div className='box'>
            {/* <div className='back-ground'> */}
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul>
                        <li><a className='active' href='#home'>Home</a></li>
                        <li><a className='active' href='#news'>News</a></li>
                        <li><a className='active' href='#about'>About</a></li>
                        <li><a className='active' href='#contact'>Contact</a></li>
                    </ul>
                    <div className='switch-color' style={{ position: 'relative' }}>
                        <a className='switch-mode' href='#' onClick={toggle}
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none',
                                float: 'right'
                            }} data-testid="toggle-theme-btn"
                        >
                            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                        </a>
                    </div>
                </nav>
            {/* </div> */}
        </div>
    )
}
{/* <div class='box'>
            <div className='back-ground'>
                <nav>
                    <a className='active' href='#home'>Home</a>
                    <a className='active' href='#news'>News</a>
                    <a className='active' href='#about'>About</a>
                    <a className='active' href='#contact'>Contact</a>
                </nav>
            </div>
        </div> */}