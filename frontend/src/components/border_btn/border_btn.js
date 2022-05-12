import React from "react";
import { Link } from "react-router-dom";

const BorderBtn = (props) => {
    return (
         <li>
<<<<<<< HEAD
            <Link to={`/lesson/${props.lesson._id}`}>
=======
            <Link to={``}>
>>>>>>> 0bbdfc1b4485413426796239feba4dea6e658b94
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="border-btn-title">
                    {props.lesson.title}
                </p>  
                <p className="border-btn-category">
                    {props.lesson.category}
                </p>
                {/* { lesson.content[0] === '<' ? parser.parseFromString(lesson.content, "text/html") : null } */}
            </Link>    
        </li>
    )
}

export default BorderBtn; 
