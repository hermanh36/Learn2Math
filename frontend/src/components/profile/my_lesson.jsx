import React from "react";
import { Link } from "react-router-dom";

export default class MyLessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchMyLessons(this.props.authorId
        ).then((res) => {
            this.setState({ lessons: this.props.lessons })
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.authorId !== prevProps.authorId) {
            this.props.fetchMyLessons(this.props.authorId
            ).then((res) => {
                this.setState({ lessons: res.lessons })
            });
        }
    }

    render() {
        if (this.state.lessons) {
            return (
                <>
                    <div className="pro-lessons-wrap">
                            <div>
                                <h1>Lessons</h1>
                                <ul className="pro-lessons-list">
                                    {Object.values(this.state.lessons).map(lesson => {
                                        return (
                                            <li key={lesson._id}>
                                                <Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link>
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