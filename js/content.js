/* ==========================================================================
   Taqdimot: 7 slayd
     1-2  Platforma (prezintation slide1/slide2) — iframe orqali
     3    Dastur ishga tushdi — rivojlanish
     4-7  Murojaatlar moduli — Muammo · Yechim · Jarayon · Rahmat
   Har bir matn ikki tilda: ["o'zbekcha", "ruscha"]
   ========================================================================== */

const DECK_NAME = [
  "TADBIR-HISOB PLATFORMASI",
  "ПЛАТФОРМА ТАДБИР-ХИСОБ",
];

const SLIDES = [
  /* ------------------------------------------ 01 PLATFORMA — MUAMMOLAR */
  {
    type: "embed",
    nav: ["Muammolar", "Проблемы"],
    foot: ["MUAMMOLAR", "ПРОБЛЕМЫ"],
    src: "slide1.html",
  },

  /* -------------------------------------------- 02 PLATFORMA — YECHIM */
  {
    type: "embed",
    nav: ["Platforma", "Платформа"],
    foot: ["YECHIM", "РЕШЕНИЕ"],
    src: "slide2.html",
  },

  /* ---------------------------------------- 03 DASTUR ISHGA TUSHDI */
  {
    type: "live",
    nav: ["Ishlab turibdi", "Работает"],
    foot: ["DASTUR ISHGA TUSHDI", "ПРОГРАММА ЗАПУЩЕНА"],
    kicker: ["Bugungi holat", "Сегодня"],
    h1: [
      "Dastur allaqachon <em>ishlamoqda</em>",
      "Программа уже <em>работает</em>",
    ],
    sub: [
      "Toshkent shahar Milliy gvardiya boshqarmasida ishlab turgan tizim",
      "Действующая система в Управлении Нацгвардии г. Ташкент",
    ],
    items: [
      {
        i: "file-text",
        h: ["Shartnomalar bilan ishlash", "Работа с договорами"],
        p: [
          "Tuzish, tahrirlash va nazorat — bir joyda",
          "Создание, редактирование и контроль — в одном месте",
        ],
      },
      {
        i: "trending-up",
        h: ["Moliyaviy nazorat", "Финансовый учёт"],
        p: [
          "Kelib tushgan mablag‘, debitor–kreditor qoldiq",
          "Поступления, дебиторка и кредиторка, остаток",
        ],
      },
      {
        i: "user-check",
        h: ["Rag‘batlantirish", "Премирование"],
        p: [
          "Xodimlarga premiya hisoblash va chiqarish",
          "Расчёт и начисление премий сотрудникам",
        ],
      },
      {
        i: "building",
        h: ["IIB bo‘yicha taqsimot", "Распределение по ОВД"],
        p: [
          "Tashkilotlar bo‘yicha summalarni ajratib berish",
          "Распределение сумм по организациям",
        ],
      },
      {
        i: "bar-chart",
        h: ["Dashboard va monitoring", "Дашборд и мониторинг"],
        p: [
          "Real vaqtda kuzatuv va nazorat",
          "Наблюдение и контроль в реальном времени",
        ],
      },
    ],
    punch: {
      b: ["Bu — ishlayotgan tizim.", "Это — работающая система."],
      t: [
        "Va u uzluksiz rivojlanib boradi.",
        "И она постоянно развивается.",
      ],
    },
  },

  /* ---------------------------------------- 04 RIVOJLANISH (uzluksiz) */
  {
    type: "big",
    tone: "good",
    nav: ["Rivojlanish", "Развитие"],
    foot: ["UZLUKSIZ RIVOJLANISH", "ПОСТОЯННОЕ РАЗВИТИЕ"],
    kicker: ["Kelajak", "Дальше"],
    h1: [
      "Dastur <em>o‘sib boradi</em>",
      "Программа <em>растёт</em>",
    ],
    blocks: [
      {
        i: "check-circle",
        tag: ["Ishga tushdi", "Запущено"],
        h: ["Tizim faoliyatda", "Система в строю"],
        p: [
          "Tadbir-Hisob real ma’lumotlar bilan ishlayapti — shartnomalar, hisob-kitob va hisobotlar bir joyda.",
          "Тадбир-Хисоб работает с реальными данными — договоры, расчёты и отчёты в одном месте.",
        ],
      },
      {
        i: "trending-up",
        tag: ["Uzluksiz", "Постоянно"],
        h: ["Yangi imkoniyatlar qo’shilib boradi", "Возможности добавляются"],
        p: [
          "Dastur to’xtamaydi — qo’shimcha modullar va takliflar bosqichma-bosqich qo’shiladi.",
          "Программа не стоит на месте — новые модули и предложения добавляются поэтапно.",
        ],
      },
      {
        i: "users",
        tag: ["Foydalanuvchi", "Для пользователей"],
        h: ["Qulayliklar ortib boradi", "Удобство растёт"],
        p: [
          "Har yangilanish foydalanuvchi ishini yengillashtiradi — kamroq qo’lda ish, ko’proq avtomatika.",
          "Каждое обновление упрощает работу — меньше ручного труда, больше автоматизации.",
        ],
      },
    ],
    punch: {
      b: ["Bu — boshlanishi.", "Это только начало."],
      t: [
        "Keyingi qadam — murojaatlar moduli.",
        "Следующий шаг — модуль обращений.",
      ],
    },
  },

  /* ------------------------------------------------------------ 05 MUAMMO */
  {
    type: "big",
    tone: "bad",
    nav: ["Muammo", "Проблема"],
    foot: ["MUAMMO", "ПРОБЛЕМА"],
    kicker: ["Bugungi holat", "Как сейчас"],
    h1: [
      "Shartnomagacha bo’lgan bosqich — <em>hozircha qog’ozda</em>",
      "Этап до договора — <em>пока на бумаге</em>",
    ],
    blocks: [
      {
        i: "file-text",
        tag: ["Qog’oz", "Бумага"],
        h: ["Hujjatlar qo’lda keltiriladi", "Документы привозят лично"],
        p: [
          "Buyurtmachi ruxsatnoma va murojaat xatini idoraga o’zi olib keladi — har bir tashrif vaqt va yo’l talab qiladi.",
          "Заказчик сам привозит разрешение и письмо-обращение в офис — каждая поездка требует времени и дороги.",
        ],
      },
      {
        i: "clock",
        tag: ["Baholash", "Оценка"],
        h: ["Ma’lumot qo’lda uzatiladi", "Данные передают вручную"],
        p: [
          "Xodim obyektni joyida o’rganib, qancha qo’riqchi va qaysi soatlarda kerakligini aniqlaydi. So’ng bu ma’lumotni buxgalteriyaga qo’lda topshiradi — bosqich tizimlashtirilmagan.",
          "Сотрудник изучает объект и определяет, сколько охранников и в какие часы нужно. Затем передаёт эти данные в бухгалтерию вручную — этап не систематизирован.",
        ],
      },
      {
        i: "eye",
        tag: ["Kuzatuv", "Наблюдение"],
        h: ["Bosqichni ko’rish qiyin", "Этап сложно отследить"],
        p: [
          "Murojaat qaysi bosqichda ekanini bilish uchun qo’ng’iroq qilishga to’g’ri keladi — bu buyurtmachiga ham, bajaruvchiga ham noqulay.",
          "Чтобы узнать, на каком этапе обращение, приходится звонить — это неудобно и заказчику, и исполнителю.",
        ],
      },
    ],
    punch: {
      b: ["Tadbir-Hisob tadbirni hisoblab beradi.", "Тадбир-Хисоб считает мероприятие."],
      t: [
        "Endi undan oldingi bosqichni ham qamrab olish vaqti keldi.",
        "Пришло время охватить и предшествующий этап.",
      ],
    },
  },

  /* ------------------------------------------------------------ 05 YECHIM */
  {
    type: "big",
    tone: "good",
    nav: ["Yechim", "Решение"],
    foot: ["YECHIM", "РЕШЕНИЕ"],
    kicker: ["Yechim", "Решение"],
    h1: [
      "Tadbir-Hisobga <em>murojaatlar moduli</em>",
      "Модуль обращений <em>для Тадбир-Хисоб</em>",
    ],
    blocks: [
      {
        i: "monitor",
        tag: ["Uydan", "Из дома"],
        h: ["Buyurtmachi o’zi yuboradi", "Заказчик отправляет сам"],
        p: [
          "Ro’yxatdan o’tadi, xat va ruxsatnomani yuklaydi, holatni kabinetida ko’rib turadi.",
          "Регистрируется, загружает письмо и разрешение, видит статус в своём кабинете.",
        ],
      },
      {
        i: "shield-check",
        tag: ["Tizimda", "В системе"],
        h: ["JSTB xodimi baholaydi", "Сотрудник ООП оценивает"],
        p: [
          "Obyektni o’rganib, qancha xodim kerakligini tizimga yozadi. Tasdiqlaydi yoki sabab bilan rad etadi — hammasi saqlanadi.",
          "Изучает объект и вносит в систему нужное число сотрудников. Одобряет или отклоняет с причиной — всё сохраняется.",
        ],
      },
      {
        i: "zap",
        tag: ["Avtomatik", "Автоматически"],
        h: ["Tadbir-Hisobga o’zi tushadi", "Само попадает в Тадбир-Хисоб"],
        p: [
          "Tashkilot, sana, soatlar va kerakli xodimlar soni asosiy dasturga qayta kiritishsiz o’tadi.",
          "Организация, даты, часы и число сотрудников переходят в основную программу без повторного ввода.",
        ],
      },
    ],
    punch: {
      b: ["Tadbir-Hisob kengaymoqda.", "Тадбир-Хисоб расширяется."],
      t: [
        "Endi u faqat tadbirni emas — butun jarayonni birinchi murojaatdan boshlab qamrab oladi.",
        "Теперь он охватывает не только мероприятие, а весь процесс — с самого первого обращения.",
      ],
    },
  },

  /* ----------------------------------------------------------- 06 JARAYON */
  {
    type: "process",
    nav: ["Jarayon", "Процесс"],
    foot: ["JARAYON", "ПРОЦЕСС"],
    kicker: ["Jarayon", "Процесс"],
    h1: [
      "To’rt qadam — <em>barchasi tizimda</em>",
      "Четыре шага — <em>все в системе</em>",
    ],
    steps: [
      {
        i: "send",
        who: ["Buyurtmachi", "Заказчик"],
        h: ["Murojaat", "Обращение"],
        p: ["Uydan yuboradi, hujjatlarni yuklaydi", "Отправляет из дома, загружает документы"],
      },
      {
        i: "route",
        who: ["Tizim", "Система"],
        h: ["Biriktirish", "Назначение"],
        p: [
          "Hudud bo’yicha mas’ul xodimga avtomatik",
          "Автоматически ответственному по региону",
        ],
      },
      {
        i: "shield",
        who: ["JSTB xodimi", "Сотрудник ООП"],
        h: ["Baholash va qaror", "Оценка и решение"],
        p: [
          "Obyektni o’rganadi, xodimlar sonini belgilaydi, tasdiqlaydi yoki sabab bilan rad etadi",
          "Изучает объект, определяет число сотрудников, одобряет или отклоняет с причиной",
        ],
      },
      {
        i: "briefcase",
        who: ["Tadbir-Hisob", "Тадбир-Хисоб"],
        h: ["Shartnoma", "Договор"],
        p: [
          "Ma’lumot avtomatik tushadi, shartnoma tuziladi",
          "Данные поступают автоматически, формируется договор",
        ],
      },
    ],
    track: [
      "Buyurtmachi butun jarayonni kabinetida ko’rib turadi",
      "Заказчик видит весь процесс в своём кабинете",
    ],
    punch: {
      b: ["Buyurtmachi idoraga bormaydi.", "Заказчик в офис не приезжает."],
      t: [
        "Murojaatdan shartnomagacha — barchasi masofadan.",
        "От обращения до договора — всё удалённо.",
      ],
    },
  },

  /* ----------------------------------------------------------- 07 RAHMAT */
  {
    type: "thanks",
    nav: ["Rahmat", "Спасибо"],
    foot: ["RAHMAT", "СПАСИБО"],
    h1: ["Rahmat", "Спасибо"],
    lead: [
      "Savollaringizni kutamiz",
      "Ждём ваших вопросов",
    ],
    next: {
      b: ["Keyingi qadam", "Следующий шаг"],
      t: [
        "Veb-saytni ishlab chiqamiz va birinchi bosqichda ishga tushiramiz.",
        "Разработаем веб-сайт и запустим его на первом этапе.",
      ],
    },
  },
];
