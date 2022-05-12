import React from "react";

export const QuestionError = (props) => {
    const errors = Object.values(props.errors)
    return (
        <>
            {errors.length > 0 ? errors.map(err => <p>{err}</p>):null}
        </>
    )
}

