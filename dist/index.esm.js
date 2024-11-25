import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

var AuthorDate = function (_a) {
    var author = _a.author, date = _a.date, _b = _a.mode, mode = _b === void 0 ? 'light' : _b;
    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    var formattedDate = date.toLocaleDateString('en-US', options);
    var isLightMode = mode && mode === 'light';
    var linkColor = isLightMode ? "text-purpure" : "text-yellow";
    var textColor = isLightMode ? "text-dark" : "text-light";
    return (jsxs("div", { className: "".concat(textColor, " flex items-center text-sm"), children: [jsxs("span", { children: ["By ", jsx("span", { className: "".concat(linkColor, " hover:underline"), children: author })] }), jsx("span", { className: 'ml-[15px] mr-[7px]', children: "|" }), jsx("span", { className: 'ml-2', children: formattedDate })] }));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var arrow = "<svg width=\"9\" height=\"11\" viewBox=\"0 0 9 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.546875 11V8.57422L5.39844 5.67383L0.546875 3.00195V0.576172L8.19336 5.25195V6.14844L0.546875 11Z\" fill=\"#232536\"/>\n</svg>";

var Button = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? 'bg-yellow' : _c, label = _a.label, _d = _a.isNavigate, isNavigate = _d === void 0 ? false : _d, _e = _a.type, type = _e === void 0 ? 'button' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, props = __rest(_a, ["size", "backgroundColor", "label", "isNavigate", "type", "disabled"]);
    var sizeClasses = {
        small: 'py-1 px-2 text-sm',
        medium: 'py-2 px-4 text-base',
        full: 'py-2 px-4 text-base w-full',
    };
    var defStyle = "".concat(backgroundColor, " ").concat(sizeClasses[size], " text-dark transition duration-300 hover:bg-yellowHover");
    var mode = defStyle;
    if (isNavigate) {
        mode = 'flex items-center ' + defStyle;
    }
    return (jsxs("button", __assign({ className: "storybook-button font-sen font-bold ".concat(sizeClasses[size], " ").concat(mode, " outline-none focus:outline-none"), disabled: disabled, type: type }, props, { children: [label, isNavigate && (jsx("span", { className: "ml-2", children: jsx("img", { src: arrow, alt: "navigate" }) }))] })));
};

var CircleIcon = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className;
    return (jsx("div", { className: 'rounded-full w-24 h-24 overflow-hidden ', children: jsx("img", { src: src, alt: alt, className: "w-24 h-24 object-cover ".concat(className) }) }));
};

var ControlledInput = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, placeholder = _a.placeholder, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.color, color = _d === void 0 ? 'dark' : _d, error = _a.error, register = _a.register, styles = _a.styles;
    var colorVariants = {
        dark: 'border-gray-300 text-borderColor',
        light: 'border-light text-light',
    };
    var inputClasses = "".concat(styles, " border-[0.5px] bg-transparent ").concat(colorVariants[color], " py-2 px-3 focus:outline-none ").concat(error ? 'border-red-500' : '');
    return (jsxs("div", { className: 'flex flex-col min-h-16', children: [jsx("input", __assign({}, register, { type: type, placeholder: placeholder, disabled: disabled, className: inputClasses })), error && jsx("span", { className: 'text-red-500 text-xs', children: error })] }));
};

var LocaleSwitcher = function (_a) {
    var locales = _a.locales, onLocaleChange = _a.onLocaleChange, current = _a.current;
    var _b = useState(current), currentLocale = _b[0], setCurrentLocale = _b[1];
    var handleLocaleChange = function (locale) {
        setCurrentLocale(locale);
        onLocaleChange && onLocaleChange(locale);
    };
    return (jsx("div", { className: 'relative', children: jsx("select", { value: currentLocale, onChange: function (e) { return handleLocaleChange(e.target.value); }, className: 'text-light cursor-pointer bg-darkBG border border-light rounded p-1', children: locales &&
                locales.map(function (locale) { return (jsx("option", { className: 'cursor-pointe', value: locale.code, children: locale.label }, locale.code)); }) }) }));
};

var IconButton = function (_a) {
    var icon = _a.icon, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["icon", "disabled"]);
    return (jsx("button", __assign({ type: "button", className: "storybook-button cursor-pointer flex items-center bg-transparent focus:outline-none", disabled: disabled }, props, { children: icon && jsx("img", { src: icon.src, alt: icon.alt }) })));
};

var facebookDark = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z\" fill=\"#232536\"/>\n</svg>";

var facebookLight = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_325_223)\">\n<path d=\"M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z\" fill=\"#6D6E76\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_325_223\">\n<rect width=\"16\" height=\"16\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>";

var instagramDark = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_325_472)\">\n<path d=\"M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35937C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55937 14.4719 3.98437 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1312 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9062 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60312 1.49375 4.7625C1.52813 3.98125 1.65938 3.55937 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35937C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4437 0.046875 11.2969C0.084375 12.1469 0.221875 12.7312 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7312 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55937 15.9438 4.70625C15.9063 3.85625 15.7688 3.27187 15.5719 2.76562C15.375 2.23437 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z\" fill=\"#232536\"/>\n<path d=\"M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2687 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2687 3.89062 8 3.89062ZM8 10.6656C6.52812 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52812 5.33437 8 5.33437C9.47187 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47187 10.6656 8 10.6656Z\" fill=\"#232536\"/>\n<path d=\"M13.2313 3.72842C13.2313 4.25967 12.8 4.68779 12.2719 4.68779C11.7406 4.68779 11.3125 4.25654 11.3125 3.72842C11.3125 3.19717 11.7438 2.76904 12.2719 2.76904C12.8 2.76904 13.2313 3.20029 13.2313 3.72842Z\" fill=\"#232536\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_325_472\">\n<rect width=\"16\" height=\"16\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>";

var instagramLight = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_325_227)\">\n<path d=\"M8.33399 1.44062C10.4715 1.44062 10.7246 1.45 11.5652 1.4875C12.3465 1.52187 12.7684 1.65313 13.0496 1.7625C13.4215 1.90625 13.6902 2.08125 13.9684 2.35938C14.2496 2.64062 14.4215 2.90625 14.5652 3.27813C14.6746 3.55938 14.8059 3.98438 14.8402 4.7625C14.8777 5.60625 14.8871 5.85938 14.8871 7.99375C14.8871 10.1313 14.8777 10.3844 14.8402 11.225C14.8059 12.0063 14.6746 12.4281 14.5652 12.7094C14.4215 13.0813 14.2465 13.35 13.9684 13.6281C13.6871 13.9094 13.4215 14.0813 13.0496 14.225C12.7684 14.3344 12.3434 14.4656 11.5652 14.5C10.7215 14.5375 10.4684 14.5469 8.33399 14.5469C6.19649 14.5469 5.94336 14.5375 5.10274 14.5C4.32148 14.4656 3.89961 14.3344 3.61836 14.225C3.24648 14.0813 2.97773 13.9063 2.69961 13.6281C2.41836 13.3469 2.24648 13.0813 2.10273 12.7094C1.99336 12.4281 1.86211 12.0031 1.82773 11.225C1.79023 10.3813 1.78086 10.1281 1.78086 7.99375C1.78086 5.85625 1.79023 5.60313 1.82773 4.7625C1.86211 3.98125 1.99336 3.55938 2.10273 3.27813C2.24648 2.90625 2.42148 2.6375 2.69961 2.35938C2.98086 2.07812 3.24648 1.90625 3.61836 1.7625C3.89961 1.65313 4.32461 1.52187 5.10274 1.4875C5.94336 1.45 6.19649 1.44062 8.33399 1.44062ZM8.33399 0C6.16211 0 5.89023 0.009375 5.03711 0.046875C4.18711 0.084375 3.60273 0.221875 3.09648 0.41875C2.56836 0.625 2.12148 0.896875 1.67773 1.34375C1.23086 1.7875 0.958984 2.23438 0.752734 2.75938C0.555859 3.26875 0.418359 3.85 0.380859 4.7C0.343359 5.55625 0.333984 5.82812 0.333984 8C0.333984 10.1719 0.343359 10.4438 0.380859 11.2969C0.418359 12.1469 0.555859 12.7313 0.752734 13.2375C0.958984 13.7656 1.23086 14.2125 1.67773 14.6562C2.12148 15.1 2.56836 15.375 3.09336 15.5781C3.60273 15.775 4.18398 15.9125 5.03398 15.95C5.88711 15.9875 6.15898 15.9969 8.33086 15.9969C10.5027 15.9969 10.7746 15.9875 11.6277 15.95C12.4777 15.9125 13.0621 15.775 13.5684 15.5781C14.0934 15.375 14.5402 15.1 14.984 14.6562C15.4277 14.2125 15.7027 13.7656 15.9059 13.2406C16.1027 12.7313 16.2402 12.15 16.2777 11.3C16.3152 10.4469 16.3246 10.175 16.3246 8.00313C16.3246 5.83125 16.3152 5.55938 16.2777 4.70625C16.2402 3.85625 16.1027 3.27188 15.9059 2.76562C15.709 2.23438 15.4371 1.7875 14.9902 1.34375C14.5465 0.9 14.0996 0.625 13.5746 0.421875C13.0652 0.225 12.484 0.0875 11.634 0.05C10.7777 0.009375 10.5059 0 8.33399 0Z\" fill=\"#6D6E76\"/>\n<path d=\"M8.33398 3.89062C6.06523 3.89062 4.22461 5.73125 4.22461 8C4.22461 10.2688 6.06523 12.1094 8.33398 12.1094C10.6027 12.1094 12.4434 10.2688 12.4434 8C12.4434 5.73125 10.6027 3.89062 8.33398 3.89062ZM8.33398 10.6656C6.86211 10.6656 5.66836 9.47188 5.66836 8C5.66836 6.52813 6.86211 5.33437 8.33398 5.33437C9.80586 5.33437 10.9996 6.52813 10.9996 8C10.9996 9.47188 9.80586 10.6656 8.33398 10.6656Z\" fill=\"#6D6E76\"/>\n<path d=\"M13.5652 3.72811C13.5652 4.25936 13.134 4.68749 12.6059 4.68749C12.0746 4.68749 11.6465 4.25624 11.6465 3.72811C11.6465 3.19686 12.0777 2.76874 12.6059 2.76874C13.134 2.76874 13.5652 3.19999 13.5652 3.72811Z\" fill=\"#6D6E76\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_325_227\">\n<rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(0.333984)\"/>\n</clipPath>\n</defs>\n</svg>";

var linkedinDark = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_325_477)\">\n<path d=\"M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z\" fill=\"#232536\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_325_477\">\n<rect width=\"16\" height=\"16\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>";

var linkedinLight = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_325_232)\">\n<path d=\"M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z\" fill=\"#6D6E76\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_325_232\">\n<rect width=\"16\" height=\"16\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>";

var twitterDark = "<svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.03344 15.4068C11.0697 15.4068 14.3722 10.0919 14.3722 5.48434C14.3722 5.33492 14.3691 5.18219 14.3628 5.03277C15.0052 4.53914 15.5597 3.9277 16 3.22719C15.4017 3.51003 14.7664 3.69475 14.1159 3.77504C14.8009 3.33883 15.3137 2.65356 15.5594 1.84627C14.915 2.252 14.2104 2.5382 13.4756 2.69262C12.9806 2.13371 12.326 1.76364 11.6131 1.63964C10.9003 1.51563 10.1688 1.6446 9.53183 2.00659C8.89486 2.36858 8.38787 2.94344 8.08923 3.64228C7.7906 4.34113 7.71695 5.12504 7.87969 5.87281C6.575 5.80325 5.29862 5.44314 4.13332 4.81584C2.96802 4.18853 1.9398 3.30804 1.11531 2.23143C0.696266 2.99907 0.568038 3.90743 0.756687 4.77192C0.945337 5.6364 1.43671 6.39213 2.13094 6.88551C1.60975 6.86793 1.09998 6.71883 0.64375 6.45055V6.49371C0.643283 7.29929 0.905399 8.08018 1.38554 8.70365C1.86568 9.32711 2.53422 9.75467 3.2775 9.91363C2.7947 10.054 2.28799 10.0744 1.79656 9.9734C2.0063 10.6662 2.41438 11.2721 2.96385 11.7067C3.51331 12.1412 4.17675 12.3826 4.86156 12.3972C3.69895 13.3676 2.26278 13.8939 0.784375 13.8914C0.522191 13.8909 0.260266 13.8739 0 13.8402C1.5019 14.864 3.24902 15.4077 5.03344 15.4068Z\" fill=\"#232536\"/>\n</svg>";

var twitterLight = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_325_225)\">\n<path d=\"M5.69945 14.5001C11.7357 14.5001 15.0382 9.49786 15.0382 5.1613C15.0382 5.02068 15.0351 4.87693 15.0288 4.7363C15.6713 4.2717 16.2257 3.69623 16.666 3.03693C16.0677 3.30313 15.4324 3.47698 14.782 3.55255C15.4669 3.142 15.9797 2.49704 16.2254 1.73724C15.5811 2.1191 14.8764 2.38847 14.1416 2.5338C13.6466 2.00777 12.992 1.65947 12.2791 1.54276C11.5663 1.42605 10.8348 1.54743 10.1978 1.88813C9.56088 2.22882 9.05388 2.76986 8.75525 3.4276C8.45661 4.08534 8.38297 4.82314 8.5457 5.52693C7.24101 5.46145 5.96464 5.12253 4.79934 4.53213C3.63403 3.94172 2.60581 3.11302 1.78133 2.09974C1.36228 2.82222 1.23405 3.67716 1.4227 4.49079C1.61135 5.30442 2.10272 6.01569 2.79695 6.48005C2.27577 6.4635 1.766 6.32318 1.30977 6.07068V6.1113C1.3093 6.86949 1.57141 7.60445 2.05156 8.19124C2.5317 8.77803 3.20023 9.18044 3.94352 9.33005C3.46072 9.46215 2.954 9.48139 2.46258 9.3863C2.67232 10.0384 3.0804 10.6087 3.62986 11.0176C4.17933 11.4266 4.84276 11.6538 5.52758 11.6676C4.36497 12.5808 2.9288 13.0761 1.45039 13.0738C1.18821 13.0734 0.926282 13.0573 0.666016 13.0257C2.16792 13.9892 3.91504 14.501 5.69945 14.5001Z\" fill=\"#6D6E76\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_325_225\">\n<rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(0.666016)\"/>\n</clipPath>\n</defs>\n</svg>";

var SocialIcon = function (_a) {
    var _b;
    var name = _a.name, _c = _a.bgColor, bgColor = _c === void 0 ? 'light' : _c, className = _a.className;
    var isBgDark = bgColor === 'dark';
    var iconPaths = {
        twitter: {
            light: twitterLight,
            dark: twitterDark,
        },
        instagram: {
            light: instagramLight,
            dark: instagramDark,
        },
        facebook: {
            light: facebookLight,
            dark: facebookDark,
        },
        linkedin: {
            light: linkedinLight,
            dark: linkedinDark,
        },
    };
    var iconSrc = (_b = iconPaths[name]) === null || _b === void 0 ? void 0 : _b[isBgDark ? 'dark' : 'light'];
    if (!iconSrc) {
        return null;
    }
    return (jsx("img", { src: iconSrc, alt: name, className: "w-4 h-4 ".concat(className) }));
};

var Select = function (_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error, register = _a.register;
    return (jsxs("div", { className: 'flex flex-col min-h-16', children: [jsxs("select", __assign({ value: value }, register, { onChange: onChange, disabled: disabled, className: "border-[0.5px] bg-transparent ".concat(error ? 'border-red-500' : 'border-gray-300', " py-2 px-3 outline-none cursor-pointer"), children: [placeholder && jsx("option", { value: '', children: placeholder }), options.map(function (option) { return (jsx("option", { value: option.value, children: option.label }, option.value)); })] })), error && jsx("span", { className: 'text-red-500 text-xs', children: error })] }));
};

var TextArea = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error, register = _a.register, maxH = _a.maxH;
    var maxHStyle = "max-h-[".concat(maxH, "]");
    return (jsxs("div", { className: 'flex flex-col min-h-16 mb-4', children: [jsx("textarea", __assign({ value: value, className: "".concat(maxHStyle, " border-[0.5px] bg-transparent ").concat(error ? 'border-red-500' : 'border-gray-300', " py-2 px-3 outline-none cursor-pointer"), onChange: onChange, placeholder: placeholder, disabled: disabled }, register)), error && jsx("span", { className: 'text-red-500 text-xs', children: error })] }));
};

export { AuthorDate, Button, CircleIcon, ControlledInput, IconButton, LocaleSwitcher, Select, SocialIcon, TextArea };
//# sourceMappingURL=index.esm.js.map
