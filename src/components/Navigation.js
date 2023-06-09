import React,{ Component} from 'react';
export default class Navigation extends Component {
    render(){
        return (
            <div className='back-ground'>
                <nav>
                <a className='active' href='#Movie'>Movie</a>
                <a className='active' href='#Cinema'>Cinema</a>
                <a className='active' href='#Culturepex'>Culturepex</a>
                <a className='active' href='#Member'>Member</a>
                <a className='active' href='#Login'>Login</a>
                <a className='active' href='#Sign-up'>Sign Up</a>
                </nav>
            </div>
        )
    }
}