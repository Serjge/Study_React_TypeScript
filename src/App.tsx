import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Selected} from "./components/Selected/Selected";


export type StarRatingType = 0 | 1 | 2 | 3 | 4 | 5
export type MenuType = {
    id: number
    name: string
}

export function App() {

    const menu = [
        {id: 1, name: 'News'},
        {id: 2, name: 'Music'},
        {id: 3, name: 'Settings'}
    ]

    const ItemSelected = [
        {value: 1, title: 'HTML'},
        {value: 2, title: 'SCSS'},
        {value: 3, title: 'React'}
    ]

    const [collapsed, setCollapsed] = useState(false)
    const [starRating, setStarRating] = useState<StarRatingType>(0)
    const [on, setOn] = useState(true)

    const [valueSelected, setValueSelected] = useState("HTML")

    const onClickAccordion = (col: boolean) => setCollapsed(col)
    const onClickAccordionItem = (col: boolean) => console.log(col)

    const onClickButton = (on: boolean) => setOn(on)

    const onClickSelected = (col: boolean) => setCollapsed(col)
    const onChangeSelected = (value: any) => setValueSelected(value)
    return (
        <div>
            <PageTitle title={'News'}/>
            <Rating onClick={setStarRating}
                    value={starRating}/>
            <Accordion menu={menu}
                       title={'Menu'}
                       onClick={onClickAccordion}
                       collapsed={collapsed}
                       onClickItem={onClickAccordionItem}/>
            <PageTitle title={'Settings'}/>
            <hr/>
            <br/>
            <OnOff onClick={onClickButton} switch={on}/>
            <br/>
            <Selected value={valueSelected}
                      onChange={onChangeSelected}
                      onClick={onClickSelected}
                      items={ItemSelected}/>
            <Page/>
        </div>
    );
}

export function Page() {
    return <>This is APP component</>
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


