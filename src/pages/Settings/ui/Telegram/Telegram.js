import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import classes from "./Telegram.module.scss";
export const Telegram = () => {
    const user = useSelector((state) => state.site.user);
    const tg_code = user.tg_code;
    const list = [
        {
            title: 'Как начать пользоваться телеграм ботом "Ольга Мудрая. Аналитика"',
            items: [
                `1. Открыть чат с ботом <span>@olga_mudraya_analytics_bot</span> или перейти по ссылке <a href="https://t.me/olga_mudraya_analytics_bot" target="_blank"><span>https://t.me/olga_mudraya_analytics_bot</span></a>`,
                `2. Ввести команду /start или написать любой другой текст. Если телеграм бот ещё не активирован, в ответ придет <span>просьба ввести 8-ми значный код</span>.`,
                `3. Ввести код: <span>${tg_code}</span>`,
            ],
        },
        {
            title: 'Как начать пользоваться телеграм ботом "Ольга Мудрая. Архив сделок"',
            items: [
                `1. Открыть чат с ботом <span>@olga_mudraya_signal_archive_bot</span> или перейти по ссылке <a href="https://t.me/olga_mudraya_signal_archive_bot" target="_blank"<span>https://t.me/olga_mudraya_signal_archive_bot</span></a>`,
                `2. Ввести команду <span>/start</span> или написать любой другой текст. Если телеграм бот ещё не активирован, в ответ придет <span>просьба ввести 8-ми значный код</span>.`,
                `3. Ввести код: <span>${tg_code}</span>`,
            ],
        },
        {
            title: 'Как начать пользоваться телеграм ботом "Ольга Мудрая. Сделки"',
            items: [
                `1. Активация бота сделок <span>@olga_mudraya_signal_bot</span> происходит через бот "Ольга Мудрая. Архив сделок" <span>@olga_mudraya_signal_archive_bot</span>`,
                `2. Необходимо открыть чат с ботом <span>@olga_mudraya_signal_archive_bot</span> или перейти по ссылке <a href="https://t.me/olga_mudraya_signal_archive_bot" target="_blank"<span>https://t.me/olga_mudraya_signal_archive_bot</span></a>`,
                `3. Ввести команду /start или написать любой другой текст. Если телеграм бот ещё не активирован, в ответ придет просьба ввести 8-ми значный код.`,
                `4. Ввести код: <span>${tg_code}</span>`,
                '5. Обращаем внимание, что бот с сигналами начнет работать только после активации бота "Ольга Мудрая. Архив сделок".',
            ],
        },
    ];
    return (_jsxs("div", { className: classes.telegram, children: [_jsx("div", { className: classes.items, children: list.map((item, index) => (_jsxs("div", { className: classes.item, children: [_jsx("div", { className: classes.number, children: index + 1 }), _jsxs("div", { className: classes.content, children: [_jsx("div", { className: classes.title, children: item.title }), _jsx("ul", { className: classes.list, children: item.items.map((el) => (_jsx("li", { dangerouslySetInnerHTML: { __html: el } }, el))) })] })] }, item.title))) }), _jsxs("div", { className: classes.info, children: [_jsx("div", { className: classes.subtitle, children: "\u041A\u043E\u0434 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0431\u043E\u0442\u0430:" }), _jsx("div", { className: classes.code, children: tg_code }), user.tg_chat_id != 0 && _jsx("div", { className: classes.activated, children: "\u041A\u043E\u0434 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D" })] })] }));
};
