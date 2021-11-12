import React, {useState} from "react";
import c from './UncontrolledAccording.module.css'

type AccordionPropsType = {
    titleValue: string

}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

        return (
            <div className={c.item}>
                <AccordionTitle  title={props.titleValue}/><button onClick={() => {setCollapsed(collapsed === true ? false : true)}}>Toggle</button>
                { collapsed && <AccordionBody/> }
            </div>
        )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
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

export default UncontrolledAccordion