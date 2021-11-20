import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    const onClickCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle onClick={onClickCollapsed} title={props.titleValue}/>
            {collapsed && <AccordionBody/>}
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