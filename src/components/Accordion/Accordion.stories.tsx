import React, {useState} from 'react';
import {  ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion} from './Accordion';



export default {
    title: 'Components/Accordion',
    component: Accordion,

} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion  {...args}  />

export const Primary = Template.bind({});

Primary.args = {
    collapsed: true,
    onClick: (on: boolean) => !on,
    title: 'Menu',
    menu: [
        {id:1, name: 'News' },
        {id:2, name: 'Music' },
        {id:3, name: 'Settings' }
    ]

};

const Template2: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion  {...args} onClick={()=>setCollapsed(!collapsed)} collapsed={collapsed} />
}


export const Active = Template2.bind({});

Active.args = {
    title: 'Menu',
    menu: [
        {id:1, name: 'News' },
        {id:2, name: 'Music' },
        {id:3, name: 'Settings' }
    ]

};



// export const ChangeRating = () => {
//     const [rating, setRating] = useState<StarRatingType>(5)
//     return <Rating value={rating} onClick={setRating}/>
// }

// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
