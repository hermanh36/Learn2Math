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
                           <li><a href="#">Item 1</a></li>
                           <li><a href="#">Item 2</a></li>
                           <li><a href="#">Item 3</a></li>
                           <li><a href="#">Item4</a></li>
                           <li><a href="#">Item5</a></li>
                           <li><a href="#">Item 6</a></li>
                           <li><a href="#">Item 7</a></li>
                        </ul>
                    </div>
                </label>
            </>
        )
    }
}

export default LeftSidebar