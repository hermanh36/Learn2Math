import React from "react";
import LeftSidebar from "../left_sidebar/left_sidebar_container";

export const QuestionError = (props) => {
    const errors = Object.values(props.errors)
    return (
        <>
            <LeftSidebar />
            {errors.length > 0 ? errors.map((err,idx) => <p key={idx}>{err}</p>):null}
        </>
    )
}

