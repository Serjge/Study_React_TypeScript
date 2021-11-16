import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

export type StarRatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    let [collapsed, setCollapsed] = useState(true)
    let [starRating, setStarRating] = useState<StarRatingType>(0)
    let [on, setOn] = useState(true)

    const onClickAccordion = () => setCollapsed(!collapsed)
    const onClickButton = (on: boolean) => setOn(on)
    return (
        <div>
            <PageTitle title={'News'}/>
            <Rating onClick={setStarRating} value={starRating}/>
            <Accordion titleValue={'Menu'} onClick={onClickAccordion} collapsed={collapsed}/>
            <PageTitle title={'Settings'}/>
            <hr/>
            <br/>
            <OnOff onClick={onClickButton} switch={on}/>
            <br/>
            <Page/>
        </div>
    );
}

function Page() {
    return <>This is APP component</>
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
