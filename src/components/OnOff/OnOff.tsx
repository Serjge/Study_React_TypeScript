import React from "react";
import s from './OnOff.module.css'

type OnOffType = {
    switch: boolean
    onClick: (on: boolean) => void
    switchOnColor?: string
    switchOffColor?: string
}

export function OnOff(props: OnOffType) {

    const onStyle = {
        background: props.switchOnColor ? props.switch ? props.switchOnColor : '' : props.switch ? 'green' : ''
    }
    const offStyle = {
        background: props.switchOffColor ? props.switch ? '' : props.switchOffColor : props.switch ? '' : 'red'
    }
    const indicationStyle = {
        background: props.switchOnColor && props.switchOffColor ? props.switch ? props.switchOnColor : props.switchOffColor : props.switch ? 'green' : 'red'
    }

    const onClickTrue = () => props.onClick(true)
    const onClickFalse = () => props.onClick(false)

    return (

        <div className={s.wrapperNew}>
            Shit codings:
            <div style={onStyle} className={s.onNew} onClick={onClickTrue}>On</div>
            <div style={offStyle} className={s.onNew} onClick={onClickFalse}>Off</div>
            <div style={indicationStyle} className={s.circleNew}></div>
        </div>

    )
}
