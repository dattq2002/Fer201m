import React,{ Component} from 'react';
export default class Navigation extends Component {
    render(){
        return (
            <div className='back-ground'>
                <nav>
                <a className='active' href='#home'>Home</a>
                <a className='active' href='#news'>News</a>
                <a className='active' href='#about'>About</a>
                <a className='active' href='#contact'>Contact</a>
                </nav>
            </div>
        )
    }
}