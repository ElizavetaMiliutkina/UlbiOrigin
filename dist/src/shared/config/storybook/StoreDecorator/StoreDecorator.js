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
import { StoreProvider } from 'app/providers/StoreProvider';
export var ThemeDecorator = function (state) { return function (StoryComponent) { return (_jsx(StoreProvider, __assign({ initialTheme: state }, { children: _jsx("div", __assign({ className: "app ".concat(theme) }, { children: _jsx(StoryComponent, {}, void 0) }), void 0) }), void 0)); }; };
