import React from "react";
import s from './OnOff.module.css'

type OnOffType = {
    switch: boolean
    onClick: (on: boolean) => void
}

export function OnOff(props: OnOffType) {

    const onStyle = {
        background: props.switch ? 'green' : ''
    }
    const offStyle = {
        background: props.switch ? '' : 'red'
    }
    const indicationStyle = {
        background: props.switch ? 'green' : 'red'
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
