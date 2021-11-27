import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff} from './OnOff';

const CategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName,
    }
})

export default {
    title: 'Components/OnOff',
    component: OnOff,
    argTypes: {
        switchOnColor:
            CategoryObj('Colors'),
        switchOffColor:
            CategoryObj('Colors'),
        switch:
            CategoryObj('Events'),
    },


} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff  {...args}  />

export const Primary = Template.bind({});

Primary.args = {
    switch: true,
    onClick: (on: boolean) => !on,
    switchOnColor: 'green',
    switchOffColor: 'red'
};

const Template2: ComponentStory<typeof OnOff> = (args) => {
const [on,setOn]= useState(true)
    return <OnOff  {...args} switch={on}  onClick={setOn} />
}

export const Active = Template2.bind({});

Active.args = {
    switchOnColor: 'green',
    switchOffColor: 'red'

};
