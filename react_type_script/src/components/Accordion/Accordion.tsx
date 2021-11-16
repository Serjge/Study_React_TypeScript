import React from "react";
import c from './According.module.css'

type AccordionPropsType = {
    titleValue: string
    onClick: () => void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

        return (
            <div className={c.item}>
                <AccordionTitle onClick={props.onClick} title={props.titleValue}/>
                { props.collapsed && <AccordionBody/> }
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion