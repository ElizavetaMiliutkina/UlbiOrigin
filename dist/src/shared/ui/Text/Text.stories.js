var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    title: 'Title text comp',
    text: 'Some of the text here',
};
export var Error = Template.bind({});
Error.args = {
    title: 'Title text comp',
    text: 'Some of the text here',
    theme: TextTheme.ERROR,
};
export var onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title text comp',
};
export var onlyText = Template.bind({});
onlyText.args = {
    text: 'Some of the text here',
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title text comp',
    text: 'Some of the text here',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title text comp',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Some of the text here',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
