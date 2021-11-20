import React from "react";
import {StarIcon} from "./StarIcon";
import s from "./star.module.css"
import {StarRatingType} from "../../../App";

type StarPropsType = {
    selected: boolean
    value: StarRatingType
    onClick: (value: StarRatingType)=> void
}

function Star(props: StarPropsType) {


    return <span onClick={() =>props.onClick(props.value)}> {props.selected ? <StarIcon selected={props.selected}/> : <StarIcon selected={props.selected}/>} </span>


}

export default Star