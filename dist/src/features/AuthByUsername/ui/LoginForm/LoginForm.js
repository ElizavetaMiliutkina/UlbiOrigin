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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUserName } from 'features/AuthByUsername/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
export var LoginForm = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useDispatch();
    var _a = useSelector(getLoginState), username = _a.username, password = _a.password, error = _a.error, isLoading = _a.isLoading;
    var onChangeUsername = useCallback(function (value) {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    var onChangePassword = useCallback(function (value) {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = useCallback(function () {
        dispatch(loginByUserName({ username: username, password: password }));
    }, [dispatch, password, username]);
    return (_jsxs("div", __assign({ className: classNames(cls.LoginForm, {}, [className]) }, { children: [_jsx(Text, { title: t('Форма авторизации') }, void 0), error && _jsx(Text, { text: error, theme: TextTheme.ERROR }, void 0), _jsx(Input, { placeholder: t('Введите имя'), type: "text", className: cls.input, onChange: onChangeUsername, value: username, autofocus: true }, void 0), _jsx(Input, { placeholder: t('Введите пароль'), type: "text", className: cls.input, onChange: onChangePassword, value: password }, void 0), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, className: cls.loginBtn, onClick: onLoginClick, disabled: isLoading }, { children: t('Войти') }), void 0)] }), void 0));
});
