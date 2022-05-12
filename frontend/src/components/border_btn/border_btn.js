import React from "react";
import { Link } from "react-router-dom";

const BorderBtn = (props) => {
    return (
         <li>
            <Link to={`/lesson/${props.lesson._id}`}>
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
