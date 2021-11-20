import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

export type StarRatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    let [rating, setRating] = useState<StarRatingType>(0)



    return (
        <div>
            <PageTitle title={'News'}/>
            This is APP component
            <Rating onClick={setRating} value={rating}/>
            <Accordion titleValue={'Menu'} />
            <PageTitle title={'Settings'}/>
            <Rating onClick={setRating} value={rating}/>
            <Accordion titleValue={'hello'} />
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
