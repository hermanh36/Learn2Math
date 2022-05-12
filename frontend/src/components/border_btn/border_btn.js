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
            </Link>    
        </li>
    )
}

export default BorderBtn; 
