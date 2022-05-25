import React from "react";
import { Link } from "react-router-dom";

export default class MyLessons extends React.Component {
    constructor(props) {
        super(props);
        // this.arr = [];
        this.state = {};
    }

    componentDidMount() {
        // console.log(this.props.match.params.userId);
        this.props.fetchMyLessons(this.props.authorId,
            this.props.clearLessons()
        ).then((res) => {
            this.setState({ lessons: this.props.lessons })
        });
    }

    render() {
        // console.log(this.arr.length)
        if (this.state.lessons) {
            return (
                <>
                    <div className="pro-lessons-wrap">
                            <div>
                                <h1>Lessons</h1>
                                <ul className="pro-lessons-list">
                                    {Object.values(this.state.lessons).map((lesson,idx) => {
                                        return (
                                            <li>
                                                <button key={idx}>
                                                    <Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link>
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                    </div>
                  
                </>
            )
        }
        else {
            return <></>
        }
    }
}