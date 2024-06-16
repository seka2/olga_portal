import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getSignalArchive } from "http/siteApi";
import classes from "./ArchiveDeals.module.scss";
import { useEffect, useState } from "react";
export const ArchiveDeals = () => {
    const [array_res, setArrayRes] = useState(null);
    const [array_data, setArrayData] = useState(null);
    const printResArchive = (month1Ago, arrayData) => {
        let res = arrayData["12"]["-1"][month1Ago] - 100;
        res = Math.round(res * 100) / 100; // Округляем до двух знаков после запятой
        return res + "%";
    };
    const __load_async = async () => {
        let result = await getSignalArchive();
        setArrayRes(result.array_res);
        setArrayData(result.array_data);
        console.log(result);
    };
    useEffect(() => {
        __load_async();
    }, []);
    return (_jsx("div", { className: classes.deals, children: _jsx("div", { className: classes.analytics, children: array_data != null && array_res != null && (_jsx("div", { className: classes.overlay, children: _jsx("div", { className: classes.overflow, children: _jsx("div", { className: classes.wrapper, children: _jsx("div", { className: classes.results, children: _jsx("div", { className: `${classes.results__table} ${classes.scrolled}`, children: _jsx("table", { children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", {}), _jsx("td", { className: classes.green }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 14, children: array_res["12"]["-12"]['name'] })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green }), _jsx("td", { className: classes.lightgray }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 13, children: array_res["12"][-11]['name'] })] }), _jsxs("tr", { className: classes.gray, children: [_jsx("td", { className: classes.green, children: array_res["12"][-12]['name'] }), _jsx("td", { children: array_res["12"][-12]['r_print'] }), _jsx("td", { children: array_data["12"][-12][-12] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 11, children: array_res["12"][-10]['name'] })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green, children: array_res["12"][-11]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-11]['r_print'] }), _jsx("td", { children: array_data["12"][-11][-12] }), _jsx("td", { children: array_data["12"][-11][-11] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 10, children: array_res["12"][-9]['name'] })] }), _jsxs("tr", { className: classes.gray, children: [_jsx("td", { className: classes.green, children: array_res["12"][-10]['name'] }), _jsx("td", { children: array_res["12"][-10]['r_print'] }), _jsx("td", { children: array_data["12"][-10][-12] }), _jsx("td", { children: array_data["12"][-10][-11] }), _jsx("td", { children: array_data["12"][-10][-10] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 9, children: array_res["12"][-8]['name'] })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green, children: array_res["12"][-9]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-9]['r_print'] }), _jsx("td", { children: array_data["12"][-9][-12] }), _jsx("td", { children: array_data["12"][-9][-11] }), _jsx("td", { children: array_data["12"][-9][-10] }), _jsx("td", { children: array_data["12"][-9][-9] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 8, children: array_res["12"][-7]['name'] })] }), _jsxs("tr", { className: classes.gray, children: [_jsx("td", { className: classes.green, children: array_res["12"][-8]['name'] }), _jsx("td", { children: array_res["12"][-8]['r_print'] }), _jsx("td", { children: array_data["12"][-8][-12] }), _jsx("td", { children: array_data["12"][-8][-11] }), _jsx("td", { children: array_data["12"][-8][-10] }), _jsx("td", { children: array_data["12"][-8][-9] }), _jsx("td", { children: array_data["12"][-8][-8] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 7, children: array_res["12"][-6]['name'] })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green, children: array_res["12"][-7]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-7]['r_print'] }), _jsx("td", { children: array_data["12"][-7][-12] }), _jsx("td", { children: array_data["12"][-7][-11] }), _jsx("td", { children: array_data["12"][-7][-10] }), _jsx("td", { children: array_data["12"][-7][-9] }), _jsx("td", { children: array_data["12"][-7][-8] }), _jsx("td", { children: array_data["12"][-7][-7] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 6, children: array_res["12"][-5]['name'] })] }), _jsxs("tr", { className: classes.gray, children: [_jsx("td", { className: classes.green, children: array_res["12"][-6]['name'] }), _jsx("td", { children: array_res["12"][-6]['r_print'] }), _jsx("td", { children: array_data["12"][-6][-12] }), _jsx("td", { children: array_data["12"][-6][-11] }), _jsx("td", { children: array_data["12"][-6][-10] }), _jsx("td", { children: array_data["12"][-6][-9] }), _jsx("td", { children: array_data["12"][-6][-8] }), _jsx("td", { children: array_data["12"][-6][-7] }), _jsx("td", { children: array_data["12"][-6][-6] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 5, children: array_res["12"][-4]['name'] })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green, children: array_res["12"][-5]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-5]['r_print'] }), _jsx("td", { children: array_data["12"][-5][-12] }), _jsx("td", { children: array_data["12"][-5][-11] }), _jsx("td", { children: array_data["12"][-5][-10] }), _jsx("td", { children: array_data["12"][-5][-9] }), _jsx("td", { children: array_data["12"][-5][-8] }), _jsx("td", { children: array_data["12"][-5][-7] }), _jsx("td", { children: array_data["12"][-5][-6] }), _jsx("td", { children: array_data["12"][-5][-5] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 4, children: array_res["12"][-3]['name'] })] }), _jsxs("tr", { className: classes.gray, children: [_jsx("td", { className: classes.green, children: array_res["12"][-4]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-4]['r_print'] }), _jsx("td", { children: array_data["12"][-4][-12] }), _jsx("td", { children: array_data["12"][-4][-11] }), _jsx("td", { children: array_data["12"][-4][-10] }), _jsx("td", { children: array_data["12"][-4][-9] }), _jsx("td", { children: array_data["12"][-4][-8] }), _jsx("td", { children: array_data["12"][-4][-7] }), _jsx("td", { children: array_data["12"][-4][-6] }), _jsx("td", { children: array_data["12"][-4][-5] }), _jsx("td", { children: array_data["12"][-4][-4] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 3, children: array_res["12"][-2]['name'] })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green, children: array_res["12"][-3]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-3]['r_print'] }), _jsx("td", { children: array_data["12"][-3][-12] }), _jsx("td", { children: array_data["12"][-3][-11] }), _jsx("td", { children: array_data["12"][-3][-10] }), _jsx("td", { children: array_data["12"][-3][-9] }), _jsx("td", { children: array_data["12"][-3][-8] }), _jsx("td", { children: array_data["12"][-3][-7] }), _jsx("td", { children: array_data["12"][-3][-6] }), _jsx("td", { children: array_data["12"][-3][-5] }), _jsx("td", { children: array_data["12"][-3][-4] }), _jsx("td", { children: array_data["12"][-3][-3] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: `${classes.green} ${classes.regular}`, colSpan: 2, children: array_res["12"][-1]['name'] })] }), _jsxs("tr", { className: classes.gray, children: [_jsx("td", { className: classes.green, children: array_res["12"][-2]['name'] }), _jsx("td", { children: array_res["12"][-2]['r_print'] }), _jsx("td", { children: array_data["12"][-2][-12] }), _jsx("td", { children: array_data["12"][-2][-11] }), _jsx("td", { children: array_data["12"][-2][-10] }), _jsx("td", { children: array_data["12"][-2][-9] }), _jsx("td", { children: array_data["12"][-2][-8] }), _jsx("td", { children: array_data["12"][-2][-7] }), _jsx("td", { children: array_data["12"][-2][-6] }), _jsx("td", { children: array_data["12"][-2][-5] }), _jsx("td", { children: array_data["12"][-2][-4] }), _jsx("td", { children: array_data["12"][-2][-3] }), _jsx("td", { children: array_data["12"][-2][-2] }), _jsx("td", { className: classes.green, children: "100%" }), _jsx("td", { className: classes.green })] }), _jsxs("tr", { children: [_jsx("td", { className: classes.green, children: array_res["12"][-1]['name'] }), _jsx("td", { className: classes.lightgray, children: array_res["12"][-1]['r_print'] }), _jsx("td", { children: array_data["12"][-1][-12] }), _jsx("td", { children: array_data["12"][-1][-11] }), _jsx("td", { children: array_data["12"][-1][-10] }), _jsx("td", { children: array_data["12"][-1][-9] }), _jsx("td", { children: array_data["12"][-1][-8] }), _jsx("td", { children: array_data["12"][-1][-7] }), _jsx("td", { children: array_data["12"][-1][-6] }), _jsx("td", { children: array_data["12"][-1][-5] }), _jsx("td", { children: array_data["12"][-1][-4] }), _jsx("td", { children: array_data["12"][-1][-3] }), _jsx("td", { children: array_data["12"][-1][-2] }), _jsx("td", { children: array_data["12"][-1][-1] }), _jsx("td", {})] }), _jsxs("tr", { className: classes.bluedark, children: [_jsx("td", { colSpan: 2, children: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }), _jsx("td", { children: printResArchive("-12", array_data) }), _jsx("td", { children: printResArchive("-11", array_data) }), _jsx("td", { children: printResArchive("-10", array_data) }), _jsx("td", { children: printResArchive("-9", array_data) }), _jsx("td", { children: printResArchive("-8", array_data) }), _jsx("td", { children: printResArchive("-7", array_data) }), _jsx("td", { children: printResArchive("-6", array_data) }), _jsx("td", { children: printResArchive("-5", array_data) }), _jsx("td", { children: printResArchive("-4", array_data) }), _jsx("td", { children: printResArchive("-3", array_data) }), _jsx("td", { children: printResArchive("-2", array_data) }), _jsx("td", { children: printResArchive("-1", array_data) }), _jsx("td", {})] })] }) }) }) }) }) }) })) }) }));
};
