import { Link } from 'react-router-dom';
import React from 'react';

class LeftSidebar extends React.Component {
    constructor(props) { 
        super(props)
    }

    render() { 
        return (
            <>
                <label>
                    <input className="sidebar-checkbox" type="checkbox" />
                    <div className="toggle">
                        <span className="top_line common"></span>
                        <span className="middle_line common"></span>
                        <span className="bottom_line common"></span>
                    </div>
                    <div className="slide">
                        <h1>L2M</h1>
                        <ul>
                           <li><Link to="/categories">Lessons</Link></li>
                           <li><Link to="/lesson/new">Create a lesson</Link></li>
                           <li><Link to="/create_test">Create a test</Link></li>
                           <li><Link to="/profile">Profile</Link></li>
                           
                        </ul>
                    </div>
                </label>
            </>
        )
    }
}

export default LeftSidebar