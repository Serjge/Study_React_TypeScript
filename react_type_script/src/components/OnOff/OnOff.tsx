import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffType = {
    switch: boolean
}


export function On() {
console.log("render")
    let [on, setOn] = useState(false)

    const onStyle = {
        background: on ? 'green' : ''
    }
    const offStyle = {
        background: on ? '' : 'red'
    }
    const indicationStyle = {
        background: on ? 'green' : 'red'
    }

    return (


    <div className={s.wrapperNew}>
        <div style={onStyle} className={s.onNew}  onClick={() => { setOn(true)}}>On</div>

        <div style={offStyle} className={s.onNew} onClick={() => { setOn(false)}}>Off</div>
        <div style={indicationStyle} className={s.circleNew}></div>
    </div>
)
}


export function OnOff(props: OnOffType) {
    return (
        <div className={s.wrapper}>
            <div className={(props.switch && s.onG) + ' ' + s.on}>ON</div>
            <div className={(!props.switch && s.offR) + ' ' + s.off}>OFF</div>
            {props.switch && <div className={s.circleG}></div>}
            {!props.switch && <div className={s.circleR}></div>}
        </div>
    )
}
