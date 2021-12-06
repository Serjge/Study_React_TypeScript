import React from "react";
import c from './According.module.css'
import {MenuType} from "../../App";


export type AccordionPropsType = {
    title: string
    onClick: (on: boolean) => void
    collapsed: boolean
    menu: MenuType[]
    onClickItem: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div className={c.item}>
            <AccordionTitle collapsed={props.collapsed}
                            onClick={props.onClick}
                            title={props.title}
                            onClickItem={props.onClickItem}/>
            {props.collapsed && <AccordionBody menu={props.menu}
                                               onClickItem={props.onClickItem}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (on: boolean) => void
    collapsed: boolean
    onClickItem: (value: any) => void
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
    onClickItem: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.menu.map((m, item) => {
                return <li key={item}
                           onClick={(e) => props.onClickItem(m.name)}>
                    {m.id} {m.name}
                </li>
            })}

        </ul>
    )
}
