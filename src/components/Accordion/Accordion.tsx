import React from "react";
import c from './According.module.css'
import {MenuType} from "../../App";


export type AccordionPropsType = {
    title: string
    onClick: (on: boolean) => void
    collapsed: boolean
    menu: MenuType[]
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div className={c.item}>
            <AccordionTitle collapsed={props.collapsed} onClick={props.onClick} title={props.title}/>
            {props.collapsed && <AccordionBody menu={props.menu}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (on: boolean) => void
    collapsed: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onClick = () => props.onClick(!props.collapsed)

    return (
        <div>
            <h3 onClick={onClick}>{props.title}</h3>

        </div>
    )
}

type AccordionBodyPropsType = {
    menu: MenuType[]
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.menu.map(m=> {
                return <li>{m.id} {m.name}</li>
            })}

        </ul>
    )
}
