import React, { Component } from 'react'
import Navbar from './Navbar'
import Trending from './Trending';
import Upcoming from './Upcoming';
export class Dashboard extends Component {
    
    
    render() {
        
        return (
            <div style={{background:'black'}}>
                <Navbar/>
                <Upcoming/>
                <Trending/>
            </div>
        )
    }
}

export default Dashboard
