import React from "react";
import {StarRatingType} from "../../../App";
import {StarIcon} from "./StarIcon";

type StarPropsType = {
    selected: boolean
    onClick: (value: StarRatingType) => void
    value: StarRatingType
}

function Star(props: StarPropsType) {

    const onClick = () => props.onClick(props.value)

    return <span onClick={onClick}> {props.selected ? <StarIcon selected={props.selected}/> : <StarIcon selected={props.selected}/>} </span>
}

export default Star