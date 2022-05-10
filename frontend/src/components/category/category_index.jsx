import React from 'react';
import LeftSidebar from '../left_sidebar/left_sidebar';

export default class CategoryIndex extends React.Component {

    componentDidMount(){
        this.props.fetchLessons(); 
        debugger;
    }

    render() {
        return (
            <div className="category-index-wrap">
                <LeftSidebar />
                <div>
                    <div>
                        <div className="category-wrap">
                            <h2>Algebra</h2>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                             
                            </ul>
                        </div>
                        <div className="category-wrap">
                            <h2>Geometry</h2>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Lesson 1
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}