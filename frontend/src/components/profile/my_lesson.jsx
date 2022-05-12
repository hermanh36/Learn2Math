import React from "react";
import { Link } from "react-router-dom";

export default class MyLessons extends React.Component {
    constructor(props) {
        super(props);
        this.arr = [];
        this.state = {};
    }

    componentDidMount() {
        // debugger;
        // console.log(this.props.match.params.userId);
        this.props.fetchMyLessons(this.props.match.params.userId)
            .then(lessons => lessons.lessons.forEach(lesson => this.arr.push(lesson)))
            .then(() => console.log(this.arr))
            .then(() => this.setState({ lessons: this.arr }));
        // debugger;
    }

    render() {
        // console.log(this.arr.length)
        if (this.arr.length > 0) {
            debugger;
            const titles = this.arr.map((lesson, idx) => {
                return (
                    <>
                        {/* <button>{lesson.title}</button> */}
                        <button ><Link key={idx} to={`/lesson/${lesson._id}`}>{lesson.title}</Link></button>
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