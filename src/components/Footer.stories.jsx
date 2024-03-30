import React from 'react';
import Footer from './Footer';

export default {
    title: 'Footer',
    component: Footer,
    text: 'This is a footer.',
    tags: ['autodocs'],
};

export const Default = () => <Footer color="gray" text="© 2024, This is a footer." />;
export const Black = () => <Footer color="black" text="© 2024, This is a ." />;

const Template = (args) => <Footer {...args} />;
export const WithDifferentText = Template.bind({});
WithDifferentText.args = {
    color: '#14b8b8',
    text: 'Another footer text.',
};