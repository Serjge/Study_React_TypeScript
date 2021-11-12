import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {On, OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UnconrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontolledRating/UncontrolledRating";

function App() {
    return (
        <div>
            <PageTitle title={'News'}/>
            This is APP component
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <PageTitle title={'Settings'}/>
<UncontrolledRating value={5}/>
            <UncontrolledAccordion titleValue={'hello'} />
            <hr/>
            <OnOff switch={false}/>
            <OnOff switch={true}/>
            <hr/>
            <On/>
            <hr/>
            <Page/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

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
