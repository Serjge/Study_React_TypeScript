import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'News'}/>
            This is APP component
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <PageTitle title={'Settings'}/>
            <Rating value={3}/>
            <Accordion titleValue={'hello'} collapsed={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
