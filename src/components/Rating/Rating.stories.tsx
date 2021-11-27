import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Rating} from './Rating';
import {StarRatingType} from "../../App";


export default {
    title: 'Components/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating  {...args}  />

export const Primary = Template.bind({});

Primary.args = {
    value: 5
};
const Template2: ComponentStory<typeof Rating> = (args) => {
    const [rating, setRating] = useState<StarRatingType>(5)
    return <Rating  {...args} value={rating} onClick={setRating}/>
};

export const Action = Template2.bind({});
Action.args = {
    ...Primary.args,
};

