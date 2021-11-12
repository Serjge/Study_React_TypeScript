import React from "react";

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {


    return (
        <>
            {props.selected && <span><b>Star </b></span>}
            {!props.selected && <span>Star</span>}
        </>
    )

}

export default Star