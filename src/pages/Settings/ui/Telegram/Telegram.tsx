import classes from "./Telegram.module.scss";

const list = [
  {
    title: 'Как начать пользоваться телеграм ботом "Аналитика"',
    items: [
      "1. Открыть чат с ботом <span>@scapital_analytics_bot</span> или перейти по ссылке <span>@scapital_analytics_bot</span>",
      "2. Ввести команду /start или написать любой другой текст. Если телеграм бот ещё не активирован, в ответ придет <span>просьба ввести 8-ми значный код</span>.",
      "3. Введите код: <span>9KY29EDL</span>",
    ],
  },
  {
    title: 'Как начать пользоваться телеграм ботом "Сделки"',
    items: [
      '1. Для контроля сделок необходимо использовать два Телеграм бота. <span>Бот "Сделки" - информационный</span>, где вы будете получать все необходимые уведомления о статусе сделок. <span>Бот "Архив" содержит всю информацию о всех текущих сделках месяца</span>.',
    ],
  },
  {
    title: 'Активация бота "Ольга Мудрая. Архив"',
    items: [
      "1. Открыть чат с ботом <span>@scapital_signal_bot</span> или перейти по ссылке <span>@scapital_signal_bot</span>",
      "2. Ввести команду <span>/start</span> или написать любой другой текст. Если телеграм бот ещё не активирован, в ответ придет <span>просьба ввести 8-ми значный код</span>.",
      "3. Введите код: <span>9KY29EDL</span>",
    ],
  },
  {
    title: 'Активация бота "Ольга Мудрая. Сделки',
    items: [
      "1. Открыть чат с ботом <span>@scapital_signal_data_bot</span> или перейти по ссылке <span>@scapital_signal_data_bot</span>",
      "2. Ввести команду <span>/start</span>",
      '3. Обращаем внимание, что бот с сигналами начнет работать только после активации бота "Ольга Мудрая".',
    ],
  },
];

export const Telegram = () => {
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
        <div className={classes.code}>9KY29EDL</div>
        <div className={classes.activated}>Код активирован</div>
      </div>
    </div>
  );
};
