import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ReportBug } from "features/report";
import { TransactionsTable } from "widgets/TransactionsTable";
import classes from "./CurrentDeals.module.scss";
import { Filter } from "features/filter";
import { useState } from "react";
import useDebounce from "hooks/useDebounce";
export const CurrentDeals = () => {
    const [search, setSearch] = useState(""); // Состояние для строки поиска
    const debouncedSearch = useDebounce(search, 500); // Задержка в 500 мс
    return (_jsx("div", { className: classes.deals, children: _jsxs("div", { className: classes.analytics, children: [_jsx(Filter, { search: search, setSearch: setSearch, className: classes.filter }), _jsx(TransactionsTable, { search: debouncedSearch }), _jsx(ReportBug, {})] }) }));
};
