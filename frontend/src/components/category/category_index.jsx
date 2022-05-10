import React from 'react';
import LeftSidebar from '../left_sidebar/left_sidebar';
var parser = new DOMParser();

export default class CategoryIndex extends React.Component {

    componentDidMount(){
        this.props.fetchLessons().then((res) => {
            console.log(res);
        }); 
        
    }
    stringToHTML = function (str) {
        var dom = document.createElement('div');
        dom.innerHTML = str;
        
        return dom;
    };

    render() {
        
        // let dummy = parser.parseFromString("<p>Naran is cool</p>" ,"text/html"); 
        
        let algebraLessons = this.props.lessons.map((lesson) => {
            return (
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {lesson.title}
                        {/* { lesson.content[0] === '<' ? parser.parseFromString(lesson.content, "text/html") : null } */}
                    </a>    
                </li>
            )
        })

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
                                {algebraLessons}
                                         
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
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}