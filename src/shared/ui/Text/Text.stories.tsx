import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title text comp',
    text: 'Some of the text here',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title text comp',
    text: 'Some of the text here',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title text comp',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Some of the text here',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title text comp',
    text: 'Some of the text here',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title text comp',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Some of the text here',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
