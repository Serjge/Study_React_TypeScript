import React from "react";

type StarPropsType = {
    selected: boolean,
    setStar: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setStar(props.value)}>
        {props.selected ? <b>Star</b> : "Star"}
    </span>
}

export default Star