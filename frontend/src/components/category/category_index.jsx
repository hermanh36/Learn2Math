import React from 'react';
import LeftSidebar from '../left_sidebar/left_sidebar';
import BorderBtn from '../border_btn/border_btn';
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
            if(lesson.category === 'algebra'){
                return (
                  <BorderBtn lesson={lesson} />
                )
            }
        })
        let geoLessons = this.props.lessons.map((lesson) => {
            if(lesson.category === 'geometry'){
                return (
                  <BorderBtn lesson={lesson} />
                )
            }
        })

        return (
            <div className="category-index-wrap">
                <LeftSidebar />
                <div>
                    <div>
                        <div className="category-wrap">
                            <h2>Algebra</h2>
                            <ul>
                                {algebraLessons}        
                            </ul>
                        </div>
                        <div className="category-wrap">
                            <h2>Geometry</h2>
                            <ul>
                                {geoLessons}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}