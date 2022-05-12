import React from "react";
import { Link } from "react-router-dom";

export default class MyLessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.lessons;
    }

    componentDidMount() {
        // debugger;
        console.log(this.props.match.params.userId);
        this.props.fetchMyLessons(this.props.match.params.userId);
        // debugger;
    }

    componentWillReceiveProps(nextProps) {
        // debugger;
        this.setState({ lessons: Object.values(nextProps.lessons) })
    }

    render() {
        // debugger;
        if (this.state.lessons) {
            const titles = this.state.lessons.map((lesson, idx) => {
                return (
                    <>
                        {/* <button>{lesson.title}</button> */}
                        <button><Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link></button>
                    </>
                )
            });
            return (
                <>
                    {titles}
                </>
            )
        }
        else {
            return <></>
        }
    }
}