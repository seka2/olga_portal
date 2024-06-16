import { useSelector } from "react-redux";
import classes from "./Telegram.module.scss";
import { RootState } from "store";


export const Telegram = () => {

  const user = useSelector((state: RootState) => state.site.user);
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

  return (
    <div className={classes.telegram}>
      <div className={classes.items}>
        {list.map((item, index) => (
          <div className={classes.item} key={item.title}>
            <div className={classes.number}>{index + 1}</div>
            <div className={classes.content}>
              <div className={classes.title}>{item.title}</div>
              <ul className={classes.list}>
                {item.items.map((el) => (
                  <li key={el} dangerouslySetInnerHTML={{ __html: el }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.info}>
        <div className={classes.subtitle}>Код активации телеграм бота:</div>
        <div className={classes.code}>{tg_code}</div>
        { user.tg_chat_id != 0 && <div className={classes.activated}>Код активирован</div> }
      </div>
    </div>
  );
};
