const LANG: typeof import("./english").default = {
  GLOBAL: {
    EVERYONE: "Все",
    NOT_SPECIFIED: "Не указано",
    PROVIDE_ARGS: "Пожалуйста, предоставьте аргументы.",
    ERROR: "Произошла непредвиденная ошибка.",
    NAME: "Имя",
    NOT_AN_OPTION: "`{option}` не является правильной опцией.",
    SUCCESS: "Успешно",
    REASON: "Причина",
    URL: "URL",
    NONE: "Ни одного",
    YES: "Да",
    NO: "Нет",
  },
  GUILD: {
    NOT_FOUND: "Сервер не был найден.",
    LEFT: "Успешно покинут сервер **{guild_name}**",
    LEVEL_UP_MESSAGES: "Сообщения о повышении уровня",
    ANNOUNCE_CHANNEL: "Канал объявлений",
    SUGGEST_CHANNEL: "Канал предложений",
    WELCOME_CHANNEL: "Канал приветствий",
    LEAVE_CHANNEL: "Канал прощаний",
    PREFIX: "Префикс",
    OWNER: "Владелец сервера",
    CHANNEL_C: "Количество каналов",
    EMOJI_C: "Количество эмодзи",
    ROLES_C: "Количество ролей",
    MEMBER_C: "Количество участников",
    REGION: "Регион",
    VERIFICATION: "Уровень проверки",
    MFA: "Уровень MFA",
    BOOSTS: "Количество бустов",
    BOOST_LVL: "Уровень буста",
    VERIFIED: "Верифицирован",
    PARTNERED: "Партнерский",
  },
  MEMBER: {
    TAG: "Тег",
    ROLES: "Роли",
    BADGES: "Значки",
    ONLINE: "В сети",
    OFFLINE: "Не в сети",
    MEMBERS: "Участников",
    STATUS: "Статус",
    CREATED_ON: "Дата создания",
    JOINED_AT: "Дата присоединения",
    ID: "ID",
    USERNAME: "Имя пользователя",
    NICKNAME: "Никнейм",
    NOT_FOUND: "Участник не найден.",
    CANNOT_BE_BANNED: "Этот участник не может быть забанен.",
    DM_BAN_MESSAGE: "Вы были **забанены** на **{guild_name}** по причине: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} был успешно забанен на сервере по причине: **{ban_reason}**. Я также отправил сообщение, сообщив об этом человеку.",
    BOT_DATA: "Информация о ботах не сохраняется, следовательно, я не могу извлечь информацию.",
    PERMISSIONS: "Права доступа",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Моя роль недостаточно высока, чем роль **{role}**!",
    MY_ROLE_MUST_BE_HIGHER:
      "Моя роль должна быть выше, чем самая высокая роль пользователя **{member}**!",
    YOUR_ROLE_MUST_BE_HIGHER: "Ваша роль должна быть выше, чем роль **{role}**!",
    PROVIDE_ROLE: "Пожалуйста, предоставьте роль.",
    ALREADY_HAS_ROLE: "Этот участник уже имеет эту роль.",
    ADDED_ROLE_TO: "Роль **{role}** была успешна выдана {member}",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Нажмите здесь, если изображение не загрузилось.]",
    CLYDE: "Клайд",
    CUDDLES: "обнимается с",
    FEEDED: "покормил (а)",
    HUGGED: "обнял (а)",
    PATTED: "погладил (а)",
    KISSED: "поцеловал (а)",
    POKED: "тыкнул (а)",
    SLAPPED: "дал (а) пощёчину",
    NO_GIPHY_KEY: "В конфигурации отсутствует API-ключ Giphy (свяжитесь с владельцем бота)",
    NO_GPIHY_FOUND: "По вашему запросу не было найдено GIF.",
  },
  ANIMAL: {
    CAT_FACT: "Факт о котах",
    DOG_FACT: "Факт о собаках",
    COW: "Корова",
  },
  BOT_OWNER: {
    SHUTDOWN: "Бот выключается.",
    EVAL: "Выполнение кода",
    EVAL_TYPE: "Тип",
    EVAL_INPUT: "Ввод",
    EVAL_OUTPUT: "Вывод",
    UPDATE_NICKNAME: "Обновлен владельцем бота",
    UPDATED_NICKNAME: "Никнейм успешно обновлен на **{nickname}**",
    PROVIDE_TYPE: "Пожалуйста, предоставьте тип.",
    CANNOT_BL_OWNER: "Невозможно внести владельца в ЧС.",
    CANNOT_BL_BOT: "Бот не может быть внесен в свой же ЧС.",
    NOT_BLD: "Пользователь не находится в ЧС.",
    ALREADY_BLD: "{member} уже заблокирован.",
    NOT_OPTION: "**{type}** не является опцией.",
    BLACKLISTED: "заблокирован",
    UNBLACKLISTED: "разблокирован",
    BLACKLISTED_SUCCESS: "{member} был {type}",
    BLD_STATUS: "Статус ЧС",
  },
  LEVELS: {
    XP: "Опыт",
    LEVEL: "Уровень",
    LEADERBOARD: "Таблица лидеров",
    RESET_CONF: "Сбросить весь опыт? y/n",
    RESET_SUCCESS: "Весь опыт был сброшен.",
    RESET_CANCEL: "Сброс опыта отменен.",
    PROVIDE_AMOUNT: "Пожалуйста, укажите количество",
    PROVIDE_VALID_NR: "Пожалуйста, укажите правильное число!",
    GIVE_XP_SUCCESS: "Успешно выдано **{amount}** опыта пользователю **{member}**.",
    TOTAL_XP: "Всего опыта",
    NEW_LEVEL: "Новый уровень",
    LEVEL_UP: "Новый уровень!",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Создавать приглашения",
    KICK_MEMBERS: "Выгонять участников",
    BAN_MEMBERS: "Банить участников",
    ADMINISTRATOR: "Администратор",
    MANAGE_CHANNELS: "Управлять каналами",
    MANAGE_GUILD: "Управлять сервером",
    ADD_REACTIONS: "Добавлять реакции",
    VIEW_AUDIT_LOG: "Смотреть журнал аудита",
    PRIORITY_SPEAKER: "Использовать приоритетный режим",
    STREAM: "Проводить стримы",
    VIEW_CHANNEL: "Видеть каналы",
    SEND_MESSAGES: "Отправлять сообщения",
    SEND_TTS_MESSAGES: "Отправлять TTS-сообщения",
    MANAGE_MESSAGES: "Управлять сообщениями",
    EMBED_LINKS: "Встраивать ссылки",
    ATTACH_FILES: "Прикреплять файлы",
    READ_MESSAGE_HISTORY: "Читать историю сообщений",
    MENTION_EVERYONE: "Упоминать everyone",
    USE_EXTERNAL_EMOJIS: "Использовать внешние эмодзи",
    VIEW_GUILD_INSIGHTS: "Смотреть аналитику сервера",
    CONNECT: "Присоединяться к голосовым каналам",
    SPEAK: "Говорить в голосовых каналах",
    MUTE_MEMBERS: "Отключать микрофон участникам",
    DEAFEN_MEMBERS: "Отключать звук участникам",
    MOVE_MEMBERS: "Перемещать участников",
    USE_VAD: "Использовать активацию по голосу",
    CHANGE_NICKNAME: "Менять никнейм",
    MANAGE_NICKNAMES: "Управлять никнеймами",
    MANAGE_ROLES: "Управлять ролями",
    MANAGE_WEBHOOKS: "Управлять вебхуками",
    MANAGE_EMOJIS: "Управлять эмодзи",
    USE_APPLICATION_COMMANDS: "Использовать слэш-команды",
    REQUEST_TO_SPEAK: "Попросить выступить",
    STAGE_MODERATOR: "Модератор трибуны",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Вам нужно быть в голосовом канале.",
    NO_QUEUE: "Сейчас ничего не играет.",
    NO_PREV_QUEUE: "Предыдущий трек не найден.",
    QUEUE_CLEARED: "Очередь была очищена.",
    QUEUE: "Очередь воспроизведения",
    BETWEEN_0_100: "Громкость должна быть между 0 и 100.",
    BETWEEN_1_TOTALQUEUE: "Используйте номер трека между 1 и {totalQueue}",
    REMOVE_SUCCESS: "был убран из очереди.",
    VOL_SUCCESS: "Успешно установлена громкость {vol}%",
    PLAYING: "Играет",
    PAUSED: "На паузе",
    DURATION: "Длительность",
    PROVIDE_SEARCH: "Пожалуйста, предоставьте поисковой запрос!",
    ADDED_TO_QUEUE: "{song} был добавлен в очередь.",
    ADDED_PL_TO_QUEUE: "Плейлист {name} был добавлен в очередь ({length} треков)",
    NOW_PLAYING: "Сейчас играет:",
    REQUESTED_BY: "Запросил {user}",
    NO_PERMS: "У меня недостаточно прав для этого голосового канала!",
    NO_RESULTS: "Ничего не найдено.",
    SUC_REM_FILTER: "Успешно убран фильтр {filter}",
    SUC_APPLIED_FILTER: "Успешно применен фильтр {filter}",
    FILTER_NOT_FOUND: "Такого фильтра не существует.",
    FILTER_ALREADY_ENABLED: "Фильтр `{filter}` уже включен.",
    FILTER_NOT_ENABLED: "Фильтр `{filter}` не включен.",
    NOT_VALID_OPTION: "{option} не является правильной опцией (`set`, `remove`)",
    NO_LIRYCS: "Текст для песни {songTitle} не найден.",
    NOW: "Сейчас",
    MUSIC_STARTING: "Трек запускается. Подождите пару секунд..",

    ERRORS: {
      LIVE_NOT_SUPPORTED: "Прямые трансляции не поддерживаются.",
      JOIN_ERROR: "Произошла ошибка при подключении к каналу, убедитесь, что он не заполнен!",
      NO_RESULT: "Не было найдено ни одной песни.",
      VOICE_FULL: "Текущий голосовой канал заполнен.",
      NO_QUEUE: "Сейчас ничего не играет.",
      NO_PREVIOUS: "В очереди нет предыдущей песни.",
      NO_UP_NEXT: "В очереди нет следующей песни.",
      UNAVAILABLE_VIDEO: "Это видео/плейлист сейчас недоступно.",
      NOT_SUPPORTED_URL: "Данный URL не поддерживается.",
      NON_NSFW: "Нельзя воспроизводить контент для взрослых вне NSFW-канала.",
      UNPLAYABLE_FORMATS: "Данный формат не может быть использован.",
      NO_SONG_POSITION: "В очереди нет песни на данной позиции.",
      EMPTY_PLAYLIST: "В этом плейлисте нет песен.",
    },
  },
  ECONOMY: {
    MONEY: "Деньги",
    BANK: "Банк",
    BALANCE: "Баланс",
    DAILY_ERROR: "Вы уже забрали свой ежедневный бонус!",
    WEEKLY_ERROR: "Вы уже забрали свой еженедельный бонус!",
    DAILY_SUCCESS: "Вы забрали свой ежедневный бонус (**{amount}** монет)",
    WEEKLY_SUCCESS: "Вы забрали свой еженедельный бонус (**{amount}** монет)",
    STORE_EMPTY:
      "Магазин для этого сервера пуст! Попросите модератора добавить товары в магазин с помощью `{prefix}store add <вещь>`",
    PROVIDE_ITEM_TO_BUY: "Пожалуйста, укажите предмет для покупки!",
    NOT_ENOUGH_MONEY: "У вас нет столько денег.",
    BUY_SUCCESS: "Успешно куплено **{item}** за **{price}** монет",
    NOT_FOUND_STORE:
      "**{query}** отсутствует в магазине, используйте `{prefix}store` чтобы просмотреть весь магазин",
    ALREADY_OWN_ITEM: "У вас уже есть этот предмет.",
    DEPOSITED_ALL: "Успешно положены в банк все деньги!",
    DEPOSITED_AMOUNT: "Успешно положено в банк **{amount} монет**",
    WITHDRAW_ALL: "Успешно выведены все ваши деньги!",
    WITHDRAW_AMOUNT: "Успешно выведено **{amount} монет**",
    PROFILE: "Профиль",
    INV_EMPTY: "Инвентарь пользователя пустой.",
    INVENTORY: "Инвентарь",
    INV_ITEMS: "Вещи в инвентаре",
    VIEW_INVENTORY:
      "Используйте`{prefix}inventory <user>` чтобы просмотреть инвентарь пользователя.",
    MONEY_LEADERBOARD: "Таблица лидеров по деньгам",
    TOTAL_BALANCE: "Общий баланс:",
    BOTH_COUNTED: "Учтены деньги в банке и наличные",
    DICE_LANDED: "Вы поставили на {roll}",
    DICE_WON: "Поздравляю! Вы выиграли приз **{price} монет**",
    DICE_LOST: "Вам нужно поставить на **6** чтобы получить приз **{price} монет**",
    RECENTLY_WORKED: "Вы уже недавно работали, осталось {time}.",
    WORKED: "{member} поработал в роли **{job_name}** и получил **{amount}**!",
    CANNOT_PAY_SELF: "Вы не можете заплатить сами себе!",
    PAY_SUCCESS: "Успешно передано **{member}** **{amount} монет**",
    CANNOT_ROB_SELF: "Вы не можете ограбить сами себя!",
    BETWEEN_1_1000: "Количество должно быть от 1 до 1000.",
    MEMBER_NO_MONEY: "У пользователя нет денег, поэтому его нельзя ограбить.",
    ROB_SUCCESS: "Успешно украдено **{amount} монет** у **{member}**",
    STORE: "Магазин",
    MANAGE_STORE_PERMS: "У вас нет нужных прав на управление магазином! (Управлять сервером)",
    PROVIDE_VALID_ITEM: "Пожалуйста, предоставьте подходящую вещь для добавления/удаления!",
    PRICE: "Цена:",
    ALREADY_EXISTS: "**{item}** уже существует в магазине!",
    PROVIDE_PRICE: "Пожалуйста, укажите цену для предмета!",
    MUST_BE_NUMBER: "Цена должна быть числом!",
    ADDED_TO_STORE: "{item} был добавлен в магазин.",
    NOT_IN_STORE: "Предмет **{item}** отсутствует в магазине!",
    REMOVED_FROM_STORE: "{item} был убран из магазина.",
    WON_SLOTS: "Вы выиграли и получили {amount} монет",
    LOST_SLOTS: "Вы проиграли!",
    MAX_BET: "Максимальной ставкой может быть 500 монет.",
    ADDED_MONEY: "Успешно добавлено {amount} монет к балансу",
    REMOVED_MONEY: "Успешно убрано {amount} монет с баланса.",
    MIN_BET: "Минимальная ставка - 1 монета.",
    MIN_AMOUNT: "Количество должно быть больше 0.",
    RESET_CONF: "Сбросить весь баланс? y/n",
    RESET_SUCCESS: "Весь баланс был успешно сброшен.",
    RESET_CANCEL: "Сброс баланса был отменен.",
    PROVIDE_AMOUNT: "Пожалуйста, укажите сумму для снятия.",
    NO_MONEY: "У вас же нет столько денег в банке!",
    WORK: "Работа",
  },
  GAMES: {
    BETS_ON: "{member_1} ставит на {member_2}",
    LOST_BET: "{member_1} поставил на {member_2}!\n {member_1} проиграл.",
    WON_BET: "{member_1} поставил на {member_2} и {member_1} выиграл.",
    CALC: "Калькулятор",
    INVALID_CALC: "Неправильное выражение.",
    COMPLIMENT: "Комплимент",
    LANDED_TAILS: "Вы поставили на Орла",
    LANDED_HEADS: "Вы поставили на Решку",
    HAPPINESS: "Случайность",
    IQ_TEST: "IQ Тест",
    IQ_IS: "Ваш IQ: {iq}",
    RPS: "Камень Ножницы Бумага",
    ROCK: "Камень",
    PAPER: "Бумага",
    SCISSORS: "Ножницы",
    WYR: "Что ты выберешь?",
    ANSWER: "Ответ",
    QUESTION: "Вопрос",
    YOU_WON: "Вы выиграли 50 монет!",
    BOT_WON: "Бот победил!",
    BOTH_WON: "Ничья!",
    OPPONENTS_CHOICE: "Выбор противника",
    YOUR_CHOICE: "Ваш выбор",
    WINNER: "Победитель",
    INVALID_INPUT: "Введите одно из следующих значений:",
    QUOTE: "Quote",
    TAGS: "Tags",
  },
  UTIL: {
    PROCESSING_IMAGE: "⚙ Обработка изображения..",
    TEXT_NOT_SUP: "Данный текст не поддерживается",
    AVATAR: "Аватар",
    NOT_AFK: "Вы больше не в AFK",
    AFK: "Вы теперь в AFK",
    BMI_WEIGHT: "Вес",
    BMI_HEIGHT: "Высота",
    BMI: "BMI",
    SUPPORT_SERVER: "Сервер поддержки",
    BUG_REPORT: "{member} сообщил об ошибке",
    BUG_REPORTED: "Отчет об ошибке отправлен!",
    CHANNEL_TOPIC: "Тема канала",
    TEXT_CHANNEL: "Текстовой канал",
    VOICE_CHANNEL: "Голосовой канал",
    TEXT_CHANNELS: "Текстовые каналы" /* plural! */,
    VOICE_CHANNELS: "Голосовые каналы" /* plural! */,
    NO_DEF_FOUND: "Не найдено определения для {word}",
    DEF_FOR_WORD: "Определение для {word}",
    CATEGORY: "Категория",
    DEFINITION: "Определение",
    DEPENDENCIES: "Модули",
    ANIMATED: "Анимированные",
    NON_ANIMATED: "Не анимированные",
    NEW_FEEDBACK: "Новый отзыв",
    FEEDBACK_SEND: "Отзыв успешно отправлен!",
    GH_NOT_FOUND: "GitHub аккаунт не найден",
    GH_FOLLOWING: "Подписан",
    GH_FOLLOWERS: "Подписчики",
    GH_WEBSITE: "Сайт",
    GH_LOCATION: "Местоположение",
    GH_BIO: "Био",
    SEARCHING: "Поиск",
    NO_IMG_FOUND: "Изображения не найдены",
    DB_RATINGS: "Рейтинг",
    DB_COUNTRY: "Страна",
    DB_GENRES: "Жанр",
    DB_AWARDS: "Награды",
    DB_LANGS: "Языки",
    POPULATION: "Население",
    DB_RELEASED: "Выпущен",
    DB_NOT_FOUND: "Фильмы не найдены по запросу {search}",
    TOTAL_MB: "Всего",
    HUMANS: "Людей",
    BOTS: "Ботов",
    PLAYERS: "Игроков",
    VERSION: "Версия",
    PORT: "Port",
    DESCRIPTION: "Описание",
    NPM_NOT_FOUND: "NPM пакеты не найдены по запросу **{query}**",
    MC_NOT_FOUND: "Сервер не найден",
    NPM_SEARCH: "NPM Поиск",
    NPM_TOP_5: "Топ 5 результатов по запросу **{query}**",
    AUTHOR: "Автор",
    VIEW_ON_NPM: "Посмотреть на npm",
    MAX_PLAYERS: "Максимальное количество игроков",
    PS_NOT_FOUND: "Приложение не найдено",
    DEVELOPER: "Разработчик",
    SCORE: "Рейтинг",
    CREATED_BY: "Создан {member}",
    MENTIONABLE: "Упоминаемая роль?",
    POSITION: "Позиция (сверху)",
    ROLE_NOT_FOUND: "Роль не найдена",
    ROLES: "Роли",
    NO_GUILD_ICON: "Сервер не имеет иконки",
    ENLARGED_EMOJI: "Увеличенная версия {emoji}",
    INVALID_EMOJI: "Эмодзи не определён!",
    SKIN_NOT_FOUND: "Игрок `{search}` не найден!",
    SKIN_NAME: "Скин игрока {name}",
    DOWNLOAD_SKIN: "[Скачать скин]",
    G_TRANSLATE: "Google Переводчик",
    NEW_SUGGESTION: "Новое предложение!",
    NO_SUGG_CHANNEL:
      "На вашем сервере нет канала предложений по умолчанию!\nИспользуйте `set suggest-channel <упоминание канала>` чтобы установить канал по умолчанию.",
    UPTIME: "{member} работает уже {time}",
    WEATHER: "Погода",
    C_NOT_FOUND: "Город **{query}** не был найден!",
    MAIN: "Погода",
    CURRENT: "Текущее",
    CURRENT_TEMP: "Текущая темепратура",
    FEELS_LIKE: "Ощущается как",
    WIND_SPEED: "Скорость ветра",
    WIND_DEGREES: "Градусы ветра",
    COUNTRY: "Страна",
    NO_W_FOUND: "Результаты не найдены",
    DOC_NOT_FOUND: "Этого нет в документации",
    MAINTAINERS: "Создатели",
    DOWNLOADS: "Downloads",
    LAST_MODIFIED: "Последнее изменение",
    ALPHA_CODE: "Код Alpha-2",
    CALLING_CODES: "Код номера телефона",
    DOMAINS: "Домены",
    CAPITAL: "Столица",
    TIMEZONES: "Часовые пояса",
    WEB_HTTP: "URL должен начинаться с `http://` or `https://`.",
    WEB_NSFW: "Этот сайт не может быть отображен в не-NSFW-канале.",
    WEB_UNAVAILABLE: "Похоже, этот сайт недоступен.",
    IP_NOT_FOUND: "Ничего не найдено.",
    IP_LON_LAT: "Долгота/ширина",
    IP_ISP: "Провайдер",
    IP_ORG: "Орг.",
    IP_TIMEZONE: "Часовой пояс",
    IP_LOC: "ru", // https://ipwhois.io/documentation Localization
    VERIFY_CHANNEL: "Канал верификации: {channel}",
    VERIFY_NOT_ENABLED: "Канал верификации не установлен",
    CHANNEL_TYPES: {
      GUILD_TEXT: "Текстовый канал",
      GUILD_VOICE: "Голосовой канал",
      GUILD_STAGE_VOICE: "Трибуна",
      GUILD_NEWS: "Канал с объявлениями",
      GUILD_STORE: "Канал-магазин",
      GUILD_CATEGORY: "Категория",
    },

    TOTAL_TRACKS: "Всего песен",
    RELEASE_DATE: "Дата выпуска",
    HEX_COLOR: "Цвет в HEX",
    MDN_NOT_FOUND: "По данному запросу ничего не найдено.",
  },
  BOT: {
    GUILDS: "Серверов",
    CHANNELS: "Каналов",
    USERS: "Пользователей",
    COMMAND_COUNT: "Команд",
    VC_CONNS: "Голосовых подключений",
    INFO_2: "Информация о боте",
    INFO: "О боте",
    SYSTEM_INFO: "Системная информация",
    RAM_USAGE: "Потребление ОЗУ",
    UPTIME: "Время работы",
    DJS_V: "Версия Discord.js",
    NODE_V: "Версия NodeJS",
    REPO: "Репозиторий",
    DASHBOARD: "Веб-панель",
    DEVELOPER: "Разработчик",
    CONTRIBUTORS: "Добровольцы",
    INVITE_BOT: "Пригласить бота",
    USED_SINCE_UP: "Использовано с момента включения",
    TOTAL_USED_CMDS: "Использовано всего",
    LATENCY: "Задержка",
  },
  CONFIG: {
    OPTION_CMD_WORK: "Опция {option} должна быть предоставлена для работы этой команды.",
  },
  HELP: {
    CAT_NOT_EXIST: "Такой категории не существует.",
    CMD_NOT_FOUND: "Команда или её псевдоним не найдены.",
    FULL_CMD_LIST: "Посмотреть детализированный список команд",
    CLICK_ME: "Нажми на меня",
    COMMANDS: "Команды",
    COOLDOWN: "Задержка",
    ALIASES: "Псевдонимы",
    USAGE: "Использование",
    COMMAND: "Команда",
    OPTIONS: "Опции",
    GUILD_PREFIX: "Серверный префикс",
    CMD_DESC:
      "Используйте `{prefix}help <команда | псевдоним>` для просмотра дополнительной информации о команде.\nБольше информации можно получить, используя команду `botinfo`.",
    OWNER_ONLY: "Только владелец может это видеть!",
    CUSTOM_CMD: "Это пользовательская команда, поэтому я не могу показать больше информации.",
    BOT_PERMS: "Права для бота",
    MEMBER_PERMS: "Права для участнкика",
    CATEGORIES: {
      admin: "Администрирование",
      animal: "Животные",
      "bot-owner": "Владельцу бота",
      games: "Игровые команды",
      image: "Картинки",
      music: "Музыка",
      util: "Утилиты",
      economy: "Экономика",
      levels: "Уровни",
      exempt: "Команды-исключения (команды, которые не могут быть отключены)",
      disabled: "Отключенные команды (только для этого сервера)",
      giveaway: "Розыгрыши",
      reminder: "Напоминания",
      reactions: "Роли по реакциям",
      custom: "Пользовательские команды",
      ticket: "Тикеты",
    },
  },
  NASANEWS: {
    NOT_FOUND: "Никаких фактов не было найдено по запросу {query}.",
  },
  POKEMON: {
    SPECIES: "Разновидность",
    ABILITIES: "Способности",
    HEIGHT: "Высота",
    WEIGHT: "Вес",
    EXPERIENCE: "Опыт",
    GENDER: "Пол",
    EGG_GROUPS: "Группы яиц",
    FAMILY: "Семья",
    EVO_STAGE: "Стадия эволюции",
    EVO_LINE: "Линия эволюции",
    STATS: "Статистика",
    HP: "ХП",
    ATTACK: "Атака",
    DEFENSE: "Защита",
    SP_ATK: "Супер Атака",
    SP_DEF: "Супер Защита",
    SPEED: "Скорость",
    TOTAL: "Всего",
    NOT_FOUND:
      "Покемоны не найдены по запросу {query}. Пожалуйста, используйте правильное написание и повторите попытку позже.",
  },
  REACTIONS: {
    NO_ROLE: "Укажите действительную роль",
    CHANNEL_NOT_FOUND: "Канал с ID `{channelId}` не был найден",
    TITLE: "Роли за реакции",
    DESC: "Реакции:",
    SUCCESS: "Сообщение с реакциями успешно отправлено",
    NOT_FOUND: "Реакция не была найдена по этому ID сообщения",
    DELETE_SUCCESS: "Реакция была успешно удалена",
    FOUND_NO_MSG: "Обнаружена реакция, но сообщения нет, реакция удалена из базы данных",
    ROLES:
      "Пожалуйста, присылайте свои роли по ID ниже, через пробел. Напр.: 389730847098379087 9876096987980987 7867869876689766",
    EMOJIS:
      "Пожалуйста, отправьте свои эмодзи ниже. Порядок будет соответствовать порядку ролей. Разделение пробелом",
    VALID_EMOJI: "Вы должны предоставить правильный эмодзи (не пользовательский эмодзи)!",
  },
  REMINDER: {
    SUCCESS: "Успешно! Я упомяну вас **в этом канале** в {time}",
    REMOVE_SUCCESS: "Ваше напоминание успешно удалено",
    NO_REMINDER_SET: "У вас нет напоминаний",
    INVALID_DATE: "Это неправильная дата",
    NO_ACTIVE_REM: "Пользователь не имеет активных напоминаний",
    MESSAGE: "Сообщение:",
    TIME: "Время:",
    ENDS_IN: "Оканчивается:",
    USER_REMINDERS: "Активные напоминания {memberUsername}",
    ALL_DELETED: "Все ваши напоминания удалены.",
  },
  COVID: {
    CASES: "Заражений",
    RECOVERED: "Выздоровели",
    DEATHS: "Смертей",
    TOTAL: "Всего",
    TODAY: "Сегодня",
    CRITICAL: "В критическом состоянии",
    TESTS: "Тестов",
    LAST_UPDATED: "Последнее обновление",
    NOT_FOUND: "Страна не найдена",
    TOTAL_POP: "Население",
  },
  EASY_GAMES: {
    PROVIDE_MEMBER: "Пожалуйста, укажите пользователя",
    ACCEPT_CHALLENGE: "{user}, вы принимаете челлендж?",
    DOESNT_PLAY: "Похоже, что {user} не хочет играть",
    WICH_SIDE: "**{user}, какую сторону вы выберете? Введите `End` чтобы отказаться!**",
    GAME_OVER: "Время вышло!",
    END: "Конец",
    INACTIVITY: "Игра закончилась из-за бездействия!",
    WINNER: "Поздравляю, вы выграли {winner}",
    DRAW: "Это ничья",
  },
  ADMIN: {
    SET_CMD:
      "К сожалению, из-за того, что бот становится более сложным, сложно управлять всем в команде. Не беспокойтесь! Вы можете управлять всем на сайте: {url}. Спасибо за понимание",
    ADD_CMD_ALREADY_EXISTS: "Это имя команды уже добавлено в пользовательские команды сервера.",
    ADD_CMD_USED_BY_BOT: "Это имя команды уже используется ботом",
    ADD_CMD_ADDED: "Успешно добавлен **{name}** в качестве пользовательской команды в этот сервер",
    DEL_CMD_NOT_FOUND: "Команда не найдена",
    DEL_CMD_DELETED: "Команда **{cmd}** была успешно удалена",
    DEL_CMD_NO_COMMANDS: "Этот сервер не имеет пользовательских команд",
    CREATED_ROLE_CREATED: "Роль создана",
    CREATED_ROLE_ADDED: "Роль `{roleName}` успешно создана",
    C_TOPIC_PROVIDE_TOPIC: "Пожалуйста, укажите новую тему",
    C_TOPIC_ADDED: "Тема канала успешно обновлена на {topic}",
    DEAFEN_ALREADY_DEAFENED: "Пользователь не находится в голосовом канале или уже приглушен",
    DEAFEN_SUCCESS:
      "{member} был успешно приглушен на сервере. Причина: **{reason}**. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    DEAFEN_SUCCESS_DM: "Вы были **Заглушены** на сервере **{guild}**, Причина: **{reason}**",
    DELETE_PROVIDE_AMOUNT: "Сумма должна быть допустимым числом, от 0 до 100",
    DELETE_DELETED: "Удалено {amount} сообщений.",
    DELETE_ERROR: "Произошла ошибка при удалении сообщения, убедитесь, что они не старше 14 дней",
    KICK_CANNOT_KICK: "Этот человек не может быть выгнан.",
    KICK_SUCCESS_DM: "Вы были **Изгнаны** с сервера **{guild}**, Причина: **{reason}**",
    KICK_SUCCESS:
      "**{tag}** был успешно изгнан с сервера. Причина: **{reason}**. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    MUTE_CANNOT_MUTE: "Этот пользователь не может быть замучен",
    MUTE_ALREADY_MUTED: "Пользователь уже замучен",
    MUTE_SUCCESS_DM: "Вы были **замучены** на сервере **{guild}**, причина: **{reason}**",
    MUTE_SUCCESS:
      "**{tag}** был успешно замучен на сервере. Причина: **{reason}**. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    BAN_BANNED_BY: "**Забанен:**",
    NUKE_NUKED: "Канал успешно очищен",
    NUKE_CANCELED: "Nuke команда отменена",
    NUKE_CONFIRM: "Вы точно хотите очистить этот канал? y/n",
    CHANNEL_CANNOT_BE_DELETED: "Этот канал не может быть удалён!",
    TEXT_OR_VALID_CHANNEL: "Пожалуйста, укажите текст или правильный канал!",
    DEFAULT_ANNOUNCE_CHANNEL:
      "Вы также можете установить канал по умолчанию используя `set announce-channel <канал>`",
    OPTION_DOES_NOT_EXIST: "Опция {option} не существует.",
    PROVIDE_COMMAND_OR_CATEGORY_NAME: "Пожалуйста, укажите команду или название категории.",
    COMMAND_CANNOT_DISABLED: "Эта команда не может быть отключена.",
    COMMAND_ALREADY_DISABLED: "Данная команда уже отключена",
    COMMAND_DISABLED: "Команда {commandName} успешно **отключена**",
    COMMAND_ENABLED: "Команда {commandName} успешно **включена**",
    COMMAND_NOT_DISABLED: "Данная команда не отключена",
    COMMAND_OR_CATEGORY_NOT_FOUND: "Команда или категория не найдена",
    COMMAND_NOT_FOUND: "Команда не найдена",
    CATEGORY_CANNOT_DISABLED: "Данная категория не может быть отключена!",
    CATEGORY_ALREADY_DISABLED: "Данная категория уже отключена",
    CATEGORY_DISABLED: "Категория {category} успешно **отключена**",
    CATEGORY_ENABLED: "Категория {category} успешно **включена**",
    CATEGORY_NOT_DISABLED: "Данная категория не отключена",
    DISABLED_CATEGORY: "Отключенная категория",
    DISABLED_COMMAND: "Отключенная команда",
    ENABLED_CATEGORY: "Включенная категория",
    ENABLED_COMMAND: "Включенная команда",
    PROVIDE_CHANNEL: "Пожалуйста, укажите канал.",
    CHANNEL_ALREADY_IGNORED: "Бот уже игнорирует этот канал",
    CHANNEL_NOT_IGNORED: "Бот не игнорирует этот канал",
    REMOVE_IGNORED: "Канал {item} убран из списка игнорируемых каналов",
    NOT_A_OPTION: "`{option}` не является опцией!",
    CHANNEL_ALREADY_LOCKED: "Этот канал уже закрыт!",
    REASON_LOCK_CHANNEL: "Пожалуйста, укажите причину для закрытия канала.",
    LOCKED_CHANNEL_REASON: "Успешно закрыл канал {channel}. Причина: **{lockReason}**",
    NO_PERMISSIONS: "Извините, у вас недостаточно прав для использования этой команды.",
    CURRENT_PREFIX:
      "Текущий префикс на сервере: `{guildPrefix}`\nИспользуйте `{guildPrefix}prefix <префикс>` чтобы поставить новый префикс",
    UPDATE_PREFIX: "Префикс успешно обновлён на `{prefix}`",
    MY_ROLE_MUST_BE_HIGHER: "Моя роль должна быть выше чем роль **{roleName}**!",
    MY_ROLE_MUST_BE_HIGHER2: "Моя роль должна быть выше чем высшая роль **{needsRoleTag}**!",
    USER_WAS_NOT_FOUND: "Пользователь не найден!",
    REMOVED_ROLE: "Роль **{roleName}** успешно снята с {needsRole}",
    REMOVED_ROLE_EVERYONE: "Роль **{roleName}** успешно снята со всех участников",
    PROVIDE_VALID_USER: "Пожалуйста, укажите правильного пользователя",
    NO_WARNINGS: "У пользователя нет предупреждений",
    REMOVED_ALL_WARNINGS: "Все предупреждения успешно убраны",
    ANNOUNCEMENT: "📢 Объявление 📢",
    PROVIDE_VALID_MEMBER: "Пожалуйста, предоставьте корректного участника.",
    PROVIDE_VALID_EMOJI: "Пожалуйста, предоставьте корректный эмодзи",
    PROVIDE_VALID_OPTION: "Пожалуйста, предоставьте корректную опцию.",
    PROVIDE_VALID_CHANNEL_OR_ROLE: "Пожалуйста, укажите корректный канал или роль!",
    GIVE_NAME: "give_name",
    EMOJI_ADDED: "Эмоджи добавлен",
    EMOJI_ADDED_NAME: "Эмоджи был добавлен! | Имя:",
    PREVIEW: "Предпросмотр:",
    USE_NORMAL_EMOJI: "Вы можете использовать обычные эмоджи без добавления на сервер!",
    MAX_EMOJI: "На этом сервере достигнут лимит по количеству эмоджи.",
    STICKY_LONG: "Ваше липкое сообщение не может быть длиннее 1800 символов!",
    STICKY_READ:
      "__***:warning: Липкое сообщение, прочитайте его перед тем, как печатать! :warning:***__",
    ALREADY_MUTED: "Пользователь уже замучен!",
    CAN_NOT_MUTED: "Пользователь не может быть замучен",
    TEMP_MUTED:
      "Вы были **временно замучены** на **{guildName}**. Причина: **{reason}**. Время: **{time}**",
    SUCCES_MUTED: "{muteMemberTag} был успешно замучен на {time}. Причина: **{reason}**",
    PROVIDE_VALID_USERID: "Пожалуйста, укажите ID пользователя!",
    SUC_UNBAN: "**{bannedUsername}** был успешно разбанен на сервере.",
    NOT_IN_VOICE_OR_NOT_DEAF: "Пользователь не в голосовом канале или не замучен",
    UNDEAFENED_USER: "Вы были **размучены** на сервере **{guildName}**",
    UNDEAFENED:
      "**{undeafenUserTag}** был успешно размучен на сервере. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    CHAN_NOT_LOCK: "Этот канал не закрыт!",
    SUC_UNLOCK: "{channel} был успешно открыт",
    NOT_MUTED: "Пользователь не замучен!",
    SUC_UNMUTE: "**{mutedMemberTag}** был успешно размучен.",
    CANNOT_RESET: "Сброс невозможен из-за отсутствия вебхука для логов.",
    SUC_RESET: "Логирование успешно сброшено!",
    STICKY_CLEAR: "Липкие сообщения успешно сняты с **{channel}**",
    CAN_NOT_DISC: "Пользователь не может быть отключён.",
    NOT_IN_VOICE: "В данный момент пользователь не в голосовом канале.",
    YOU_DISC: "Вы были **отключены** с сервера **{guildName}**, Причина: **{reason}**",
    USER_DISC:
      "**{kickUserTag}** был успешно отключен от канала **{kickUserVoiceChannel}**. Причина: **{reason}**. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    USER_NOT_VOICE_OR_MUTED: "Пользователь не в голосовом канале либо уже замучен",
    YOU_MUTED: "Вы были **Замучены** на сервере **{guildName}**, Причина: **{reason}**",
    USER_MUTED:
      "**{muteUserTag}** был успешно замучен на сервере. Причина: **{reason}**. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    USER_NOT_VOICE_OR_NOT_MUTED: "Пользователь не в голосовом канале или не замучен",
    YOU_UNMUTED: "Вы были **Размучены** на сервере **{guildName}**",
    USER_SUC_UNMUTED:
      "**{unmuteUserTag}** был успешно размучен. Я так же отправил ему личное сообщение чтобы он знал об этом.",
    USER_NOT_WARN: "Пользователь не может быть предупрежден.",
    USER_WARNED:
      "{memberTag} получил предупреждение с причиной: {reason} (Всего предупреждений: {warningsTotal})",
    WARN_NOT_FOUND: "Предупреждение не найдено или у {memberTag} нет предупреждений.",
    WARNING: "Предупреждение:",
    WARNED_ON: "Выдано:",
    MEMBER_WARNS: "Предупреждения {memberTag}",
    TOTAL_WARNS: "Всего предупреждений",
    USE_WARNS:
      "Используйте `{prefix}warnings <пользователь> <номер предупреждения>` для просмотра более подробной информации о конкретном предупреждении",
    ROLE_NOT_FOUND: "Роль не найдена.",
    GUILD_CONFIG: "Конфигурация {guildName}",
    ADD_TO_IGNORE: "Канал {item} теперь игнорируется.",
  },
  TICKET: {
    CANNOT_DO_ACTION: "Это действие не может быть выполнено вне канала для тикета.",
    CLOSING: "Тикет закроется через 15 секунд. Напишите `cancel` для отмены.",
    WILL_NOT_CLOSE: "Этот тикет не будет закрыт.",
    ALREADY_ACTIVE_TICKET: "У вас уже есть активный тикет.",
    TICKET_FOR: "Тикет для {member}",
    CREATED: "Тикет успешно создан!",
    NOT_ENABLED:
      "Тикеты для этой гильдии не включены! Администратор может включить их в настройках {botName}.",
    TICKET: "тикет-#{Id}",
  },
  EVENTS: {
    CHANNEL_CREATED: "Канал создан",
    CHANNEL_CREATED_MSG: "{channel_type}: **{channel}** был создан",
    CHANNEL_DELETED: "Канал удален",
    CHANNEL_DELETED_MSG: "{channel_type}: **{channel}** был удален",
    CHANNEL_RENAME_MSG: "{channel_type}: **{channel}** изменил имя на **{new_channel}**",
    CHANNEL_RENAME: "Канал переименован",
    CHANNEL_TOPIC_UPDATED: "Тема канала обновлена",
    CHANNEL_TOPIC_UPDATED_MSG: "Обновлена тема канала **{channel}**",
    CHANNEL_OLD_TOPIC: "Старая тема",
    CHANNEL_NEW_TOPIC: "Новая тема",
    EMOJI_CREATED_MSG: "Эмодзи {emoji} был создан.",
    EMOJI_CREATED: "Эмодзи создан",
    EMOJI_DELETED_MSG: "Эмодзи **{emoji}** был удален.",
    EMOJI_DELETED: "Эмодзи удален",
    EMOJI_RENAMED_MSG: "Эмодзи **{emoji_name}** изменил имя на **{new_name}** ({emoji})",
    BANNED_MEMBER: "Забаненный участник",
    NOT_FOUND: "Не найдено.",
    BAN_ADD: "Участник забанен",
    KICK_ADD: "Участник выгнан",
    EXECUTED_BY: "Выполнил:",
    REASON: "Причина",
    STARBOARD_MESSAGE: "{userTag}, это сообщение уже находится на звездной доске.",
    STARBOARD_NOT_STAR: "{userTag}, вы не можете повесить пустое сообщение на звездную доску.",

    STICKER_CREATED: "Новый стикер создан",
    STICKER_DELETED_MSG: "Стикер удалён",
    STICKER_DELETED: "Стикер удалён",
    STICKER_UPDATED: "Стикер изменён",
    NAME_UPDATED: "Имя изменено",
    DESCRIPTION_UPDATED: "Описание изменено",
  },
  MESSAGE: {
    USER_IS_AFK: "{tag} ушел в AFK!\n **Причина**: {reason}",
    NOT_AFK_ANYMORE: "{tag} вышел из AFK",
    BLACKLISTED: "Вы находитесь в черном списке бота.",
    CATEGORY_DISABLED: "Эта команда выключена, так как на сервере отключена категория {category}.",
    COMMAND_DISABLED: "Эта команда была выключена для этого сервера.",
    OWNER_ONLY: "Эта команда может использоваться только владельцем!",
    INCORRECT_ARGS: "Неправильное использование команды",
    REQUIRED_ARGS: "Предоставьте больше аргументов: {args}",
    COOLDOWN_AMOUNT:
      "Пожалуйста, подождите еще **{time}** секунд перед использованием команды **{command}**.",
    BAD_WORD:
      "{mention}, вы использовали плохое слово, заданное администратором, поэтому ваше сообщение было удалено.",
    EXAMPLE: "Пример:",
    SUPPORT: "Поддержка",
    NEED_PERMS: "Вам нужны разрешения {perms}.",
    MUST_BE_DATE: "Этот тип аргумента должен быть **датой**. Например: `1h`, `2days`, `5min`",
    MUST_BE_NUMBER: "Этот тип аргумента должен быть **числом**.",
  },
  OTHER: {
    REGIONS: {
      europe: ":flag_eu: Европа",
      "eu-west": ":flag_eu: Западная Европа",
      "eu-central": ":flag_eu: Центральная Европа",
      brazil: ":flag_br: Бразилия",
      hongkong: ":flag_hk: Гонконг",
      india: ":flag_in: Индия",
      japan: ":flag_jp: Япония",
      russia: ":flag_ru: Россия",
      singapore: ":flag_sg: Сингапур",
      southafrica: ":flag_za: Южная Африка",
      sydney: ":flag_au: Сидней",
      frankfurt: ":flag_de: Франкфурт",
      "us-central": ":flag_us: Центральная часть США",
      "us-east": ":flag_us: Восток США",
      "us-south": ":flag_us: ЮГ США",
      "us-west": ":flag_us: Запад США",
      amsterdam: ":flag_nl: Амстердам",
      dubai: ":flag_ae: Дубай",
      "south-korea": "🇰🇷 Южная Корея",
      london: ":flag_gb: Лондон",
    },
    VERLEVELS: {
      NONE: "Отсутствует",
      LOW: "Низкий",
      MEDIUM: "Средний",
      HIGH: "Высокий",
      VERY_HIGH: "Очень высокий",
    },
    MFA_LEVELS: {
      NONE: "None",
      ELEVATED: "Elevated",
    },
    ANSWERS: [
      "Да.",
      "Нет.",
      "Мои источники говорят да.",
      "Вероятно да.",
      "Я не знаю.",
      "Может быть, когда-нибудь.",
      "Прогноз хороший.",
      "Знаки указывают на да.",
      "Конечно!",
      "Абсолютно.",
      "Не.",
      "Нет, спасибо, я не смогу это сделать.",
      "Ни за что!",
      "Это точно.",
      "Без сомнения.",
      "Определенно да.",
      "Насколько я понимаю, да.",
    ],
  },
  INVITE: {
    NOT_FOUND: "Приглашение не найдено.",
    NOT_EXPIRED_YET: "Это приглашение ещё не истекло.",
    NOT_EXPIRE: "Это неистекаемое приглашение",

    EXPIRATION: "Срок действия",
    EXPIRES_AT: "Истекает",
    EXPIRED_AT: "Истёк",
  },
};

export default LANG;
