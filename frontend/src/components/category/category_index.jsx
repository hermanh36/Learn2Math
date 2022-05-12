import React from 'react';
import LeftSidebar from '../left_sidebar/left_sidebar';
import BorderBtn from '../border_btn/border_btn';
import { BiSearchAlt } from 'react-icons/bi';


export default class CategoryIndex extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            searchText: ""
        }
    }

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

    onChangeSearch(e){
        this.setState({
            searchText: e.currentTarget.value 
        })
    }

    render() {
        
        // let dummy = parser.parseFromString("<p>Naran is cool</p>" ,"text/html"); 
        let category; 
        let title; 
        let searchText;
        let algebraLessons = this.props.lessons.map((lesson, idx) => {
            category = lesson.category.toLowerCase();
            title = lesson.title.toLowerCase();
            searchText = this.state.searchText.toLowerCase();

            if(category === 'algebra' && title.includes(searchText)){
                return (
                  <BorderBtn key={idx} lesson={lesson} />
                )
            }else{
                return null;
            }
        })
        let geoLessons = this.props.lessons.map((lesson, idx) => {
            if(lesson.category === 'geometry' && lesson.title.includes(this.state.searchText)){
                return (
                  <BorderBtn key={idx} lesson={lesson} />
                )
            }else{
                return null;
            }
        })

        return (
            <div className="category-index-wrap">
                <LeftSidebar />
                <div>
                    <p className="search-input-wrap">
                        <input type="text" placeholder="search lessons" value={this.state.searchText} onChange={(e) => this.onChangeSearch(e)}/>
                        <BiSearchAlt className="search-icon" />
                    </p>
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