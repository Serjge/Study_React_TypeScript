import React from "react";
import {StarRatingType} from "../../../App";
import styles from "./Star.module.css"

type StarPropsType = {
    selected: boolean
    onClick: (value: StarRatingType) => void
    value: StarRatingType
}

function Star(props: StarPropsType) {

    const onClick = () => props.onClick(props.value)

    return <span className={styles.star} onClick={onClick}>{props.selected ? <b>Star </b> : "Star "}</span>
}

export default Star