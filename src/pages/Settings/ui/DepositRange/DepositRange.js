import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Range } from "react-range";
import classes from "./DepositRange.module.scss";
import { prettyNumber10 } from "consts/functions";
const MIN = 0.3;
const MAX = 2.0;
export const DepositRange = (props) => {
    const { risk, changeRisk } = props;
    const handleChange = (values) => {
        changeRisk(values[0]);
    };
    return (_jsx(Range, { step: 0.1, min: MIN, max: MAX, values: [risk], onChange: handleChange, renderTrack: ({ props, children }) => (_jsxs("div", { className: classes.track, ...props, style: { ...props.style }, children: [_jsx("div", { className: classes.min, "data-value": MIN }), _jsx("div", { className: classes.max, "data-value": prettyNumber10(MAX) }), children] })), renderThumb: ({ props }) => (_jsx("div", { className: classes.thumb, ...props, style: { ...props.style }, children: _jsx("span", { className: classes.tooltip, children: prettyNumber10(risk) }) })) }));
};
