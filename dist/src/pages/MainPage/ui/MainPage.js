import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
var MainPage = function () {
    var t = useTranslation().t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (val) {
        setValue(val);
    };
    return (_jsxs("div", { children: [t('Главная страница'), _jsx(Input, { value: value, placeholder: "Введите текст", onChange: onChange }, void 0)] }, void 0));
};
export default MainPage;
