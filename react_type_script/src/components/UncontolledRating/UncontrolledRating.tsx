import React, {useState} from "react";
import Star from "./Star/Star";
import UncontrolledAccordion from "../UnconrolledAccordion/UncontrolledAccordion";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating(props: RatingPropsType) {

    let [star, setStar] = useState(0)

        return (
            <div>
                <button onClick={() => {setStar(0)}}>0</button>
                <Star selected={star > 0  }/><button onClick={() => {setStar(1)}} >1</button>
                <Star selected={star > 1}/><button onClick={() => {setStar(2)}}>2</button>
                <Star selected={star > 2}/><button onClick={() => {setStar(3)}}>3</button>
                <Star selected={star > 3}/><button onClick={() => {setStar(4)}}>4</button>
                <Star selected={star > 4}/><button onClick={() => {setStar(5)}}>5</button>
            </div>
        )

}

export default UncontrolledRating