/* ==========================================================================
   Taqdimot: 10 slayd

     01  Sarlavha va maqsad
     02  Muammolar — bugungi holat
     03  Platforma nima qiladi (ishlab turgan modullar)
     04  Jonli monitoring paneli
     05  YANGI — taqsimotga FVV qo'shildi
     06  YANGI — IIB tuzgan shartnomalar bo'yicha taqsimot
     07  Murojaatlar moduli — muammo
     08  Murojaatlar moduli — yechim
     09  Jarayon — to'rt qadam
     10  Yo'l xaritasi va rahmat

   Tartib mantiqi: avval tizim NIMA QILISHI tushuntiriladi (03), keyingina
   zich dashboard ko'rsatiladi (04) — aks holda auditoriya kontekstsiz
   raqamlarga duch keladi. 05 va 06 — mijoz alohida so'ragan ikki yangilik,
   ular "dastur o'sib boradi" degan quruq da'voning o'rniga aniq dalil.

   Har bir matn ikki tilda: ["o'zbekcha", "ruscha"]
   ========================================================================== */

const DECK_NAME = ["TADBIR-HISOB PLATFORMASI", "ПЛАТФОРМА ТАДБИР-ХИСОБ"];

const SLIDES = [
  /* ------------------------------------------------------- 01 SARLAVHA */
  {
    type: "title",
    nav: ["Sarlavha", "Титул"],
    foot: ["TAQDIMOT", "ПРЕЗЕНТАЦИЯ"],
    kicker: ["O‘zbekiston Respublikasi Milliy gvardiyasi", "Национальная гвардия Республики Узбекистан"],
    h1: ["TADBIR-HISOB", "ТАДБИР-ХИСОБ"],
    sub: ["Dasturiy ta’minot", "Программное обеспечение"],
    lead: [
      "Ommaviy tadbirlarni moliyaviy boshqarish, hisob-kitob va nazorat qilishning yagona tizimi",
      "Единая система финансового управления, расчёта и контроля массовых мероприятий",
    ],
    goal: {
      t: ["Maqsad", "Цель"],
      p: [
        "Ommaviy tadbirlar va ular bilan bog‘liq shartnomalarni avtomatik boshqarish hamda hisob-kitob jarayonlarini avtomatlashtirish uchun mo‘ljallangan yagona tizimni yaratish.",
        "Создание единой системы для автоматического управления массовыми мероприятиями и связанными с ними договорами, а также для автоматизации расчётных процессов.",
      ],
    },
    facts: [
      { k: "regions", t: ["Hudud", "Регионов"] },
      { k: "contracts", t: ["Shartnoma", "Договоров"] },
      { k: "sum", t: ["Umumiy summa", "Общая сумма"] },
    ],
  },

  /* ------------------------------------------------------ 02 MUAMMOLAR */
  {
    type: "problems",
    nav: ["Muammolar", "Проблемы"],
    foot: ["MUAMMOLAR TAHLILI", "АНАЛИЗ ПРОБЛЕМ"],
    kicker: ["Bugungi holat", "Как было"],
    h1: [
      "Ommaviy tadbirlarni boshqarishdagi <em>beshta muammo</em>",
      "<em>Пять проблем</em> в управлении массовыми мероприятиями",
    ],
    cards: [
      {
        i: "unlink",
        h: ["Markazlashmagan tizim", "Децентрализованная система"],
        p: [
          "Viloyatlar shartnoma va hisobotlarni alohida (asosan Excel’da) yuritadi. Yagona standart bo‘lmagani uchun respublika miqyosida umumiy moliyaviy manzarani shakllantirish qiyinlashadi.",
          "Области ведут договоры и отчёты отдельно (в основном в Excel). Из-за отсутствия единого стандарта сформировать общую финансовую картину по республике сложно.",
        ],
      },
      {
        i: "user-x",
        h: ["Inson omili va qo‘lda yuritish", "Человеческий фактор и ручной ввод"],
        p: [
          "Shartnoma va xarajat ma’lumotlari qo‘lda yuritiladi — bu texnik xatolik xavfini oshiradi. Xodimga ajratiladigan rag‘batlantirish miqdorini tezkor aniqlash murakkablashadi.",
          "Данные о договорах и расходах ведутся вручную — это повышает риск технических ошибок. Оперативно определить сумму премии сотруднику становится сложно.",
        ],
      },
      {
        i: "clock",
        h: ["Real vaqt nazorati yo‘qligi", "Нет контроля в реальном времени"],
        p: [
          "Hududlardan hisobotlarni yig‘ish va umumlashtirish vaqt talab qiladi. Yagona platforma bo‘lmagani uchun tezkor boshqaruv qarorlarini qabul qilish imkoniyati cheklanadi.",
          "Сбор и обобщение отчётов из регионов требует времени. Из-за отсутствия единой платформы возможность принимать оперативные решения ограничена.",
        ],
      },
      {
        i: "shuffle",
        h: ["Ma’lumotlar nomuvofiqligi", "Несогласованность данных"],
        p: [
          "Tadbirda ishtirok etgan xodimlar va moliyaviy hisob-kitob ma’lumotlari o‘rtasida tafovutlar yuzaga kelishi mumkin. Xodimning oylik ishtirokini tekshirish qiyin.",
          "Между данными об участвовавших сотрудниках и финансовыми расчётами могут возникать расхождения. Проверить участие сотрудника за месяц сложно.",
        ],
      },
      {
        i: "eye-off",
        h: ["Shaffoflik va nazorat yetishmasligi", "Недостаток прозрачности и контроля"],
        p: [
          "Mablag‘lar harakati asosan yakuniy hisobotda aks etadi. Real vaqt rejimida tushum va xarajatlar bo‘yicha tezkor ma’lumot olish imkoniyati mavjud emas.",
          "Движение средств отражается в основном в итоговом отчёте. Возможности получать оперативные данные о поступлениях и расходах в реальном времени нет.",
        ],
      },
    ],
    result: {
      b: ["Natija:", "Итог:"],
      t: [
        "Moliyaviy intizom susayadi, mablag‘lardan samarali foydalanish kamayadi va korrupsion xavflar ortadi.",
        "Финансовая дисциплина ослабевает, эффективность использования средств снижается, а коррупционные риски растут.",
      ],
    },
  },

  /* ------------------------------------------ 03 PLATFORMA NIMA QILADI */
  {
    type: "live",
    nav: ["Platforma", "Платформа"],
    foot: ["DASTUR ISHGA TUSHDI", "ПРОГРАММА ЗАПУЩЕНА"],
    kicker: ["Yechim", "Решение"],
    h1: ["Dastur allaqachon <em>ishlamoqda</em>", "Программа уже <em>работает</em>"],
    sub: [
      "Toshkent shahar Milliy gvardiya boshqarmasida ishlab turgan tizim",
      "Действующая система в Управлении Нацгвардии г. Ташкент",
    ],
    items: [
      {
        i: "file-text",
        h: ["Shartnomalar bilan ishlash", "Работа с договорами"],
        p: ["Tuzish, tahrirlash va nazorat — bir joyda", "Создание, редактирование и контроль — в одном месте"],
      },
      {
        i: "trending-up",
        h: ["Moliyaviy nazorat", "Финансовый учёт"],
        p: ["Kelib tushgan mablag‘, debitor–kreditor qoldiq", "Поступления, дебиторка и кредиторка, остаток"],
      },
      {
        i: "user-check",
        h: ["Rag‘batlantirish", "Премирование"],
        p: ["Xodimlarga premiya hisoblash va chiqarish", "Расчёт и начисление премий сотрудникам"],
      },
      {
        i: "building",
        h: ["Hamkorlar bo‘yicha taqsimot", "Распределение по партнёрам"],
        p: ["Tashkilotlar bo‘yicha summalarni ajratib berish", "Распределение сумм по организациям"],
      },
      {
        i: "bar-chart",
        h: ["Dashboard va monitoring", "Дашборд и мониторинг"],
        p: ["Real vaqtda kuzatuv va nazorat", "Наблюдение и контроль в реальном времени"],
      },
    ],
    punch: {
      b: ["Bu — ishlayotgan tizim.", "Это — работающая система."],
      t: ["Keyingi slaydda uning jonli panelini ko‘ramiz.", "На следующем слайде — её живая панель."],
    },
  },

  /* --------------------------------------------- 04 MONITORING PANELI */
  {
    type: "platform",
    nav: ["Panel", "Панель"],
    foot: ["JONLI MONITORING", "ЖИВОЙ МОНИТОРИНГ"],
    title: ["TADBIR-HISOB DASTURIY TA’MINOTI", "ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ «ТАДБИР-ХИСОБ»"],
    live: ["Jonli monitoring paneli", "Панель мониторинга в реальном времени"],
    kpi: [
      { k: "jami", t: ["Jami shartnomalar", "Всего договоров"] },
      { k: "tolab", t: ["Puli to‘lab berilgan", "Оплаченные"] },
      { k: "qarz", t: ["Qarzdorligi bor", "С задолженностью"] },
    ],
    kpiSoni: ["Soni", "Кол-во"],
    kpiSumma: ["Summasi", "Сумма"],
    mapT: ["Markazlashgan tizim monitoringi", "Мониторинг централизованной системы"],
    mapSub: [
      "Real vaqt rejimida viloyatlar kesimida mablag‘lar harakati",
      "Движение средств по областям в реальном времени",
    ],
    donutT: ["Kelib tushgan pulning taqsimoti", "Распределение поступивших средств"],
    donutCenter: ["Kelib tushgan summa", "Поступившая сумма"],
    shares: [
      ["Xodimlarga (25%)", "Сотрудникам (25%)"],
      ["Hamkor tashkilotlar — IIB va FVV (40%)", "Партнёрские организации — ОВД и МЧС (40%)"],
      ["Moddiy bazani rivojlantirish (35%)", "Развитие материальной базы (35%)"],
    ],
    redT: ["Qizil chegaraga tushgan xodimlar", "Сотрудники в «красной зоне»"],
    redSub: ["xodim aniqlandi", "сотрудников выявлено"],
    redNote: [
      "Tizim qizil chegaraga tushgan xodimlarni avtomatik aniqlaydi.",
      "Система автоматически выявляет сотрудников, попавших в «красную зону».",
    ],
    flowT: [
      "Inson omilini kamaytirish mexanizmi (avtomatlashtirish)",
      "Механизм снижения человеческого фактора (автоматизация)",
    ],
    flow: [
      { i: "calendar", s: ["1-qadam", "Шаг 1"], h: ["Tadbir kiritish", "Внесение мероприятия"], v: "90%" },
      { i: "users", s: ["2-qadam", "Шаг 2"], h: ["Xodimlar biriktirish", "Назначение сотрудников"], v: "70%" },
      { i: "zap", s: ["3-qadam", "Шаг 3"], h: ["Avtomatik formula", "Автоматическая формула"], v: "100%", on: true },
      { i: "check-circle", s: ["Natija", "Итог"], h: ["Hisoblangan summa", "Рассчитанная сумма"], v: "100%", on: true },
    ],
    hint: [
      "Viloyat ustiga bosing — kartalar va diagramma shu hudud bo‘yicha yangilanadi",
      "Нажмите на область — карточки и диаграмма обновятся по этому региону",
    ],

    more: ["Batafsil", "Подробнее"],
    showList: ["Ro‘yxatni ko‘rsatish", "Показать список"],
    close: ["Yopish", "Закрыть"],

    modalC: {
      t: {
        jami: ["Jami shartnomalar", "Все договоры"],
        tolab: ["Puli to‘lab berilgan shartnomalar", "Оплаченные договоры"],
        qarz: ["Qarzdorligi bor shartnomalar", "Договоры с задолженностью"],
      },
      th: [
        ["№", "№"],
        ["Hujjat raqami", "Номер документа"],
        ["Hujjat sanasi", "Дата документа"],
        ["Bajaruvchi", "Исполнитель"],
        ["Buyurtmachi", "Заказчик"],
        ["Tadbir soati", "Часы мероприятия"],
        ["Hisoblangan summa", "Начисленная сумма"],
        ["Jalb qilingan xodim", "Привлечено сотрудников"],
        ["Tadbir manzili", "Адрес мероприятия"],
      ],
    },

    modalS: {
      t: ["Qizil chegaraga tushgan xodimlar ro‘yxati", "Список сотрудников в «красной зоне»"],
      th: [
        ["№", "№"],
        ["Ism familiya", "Ф.И.О."],
        ["Hudud", "Регион"],
        ["Batalon", "Батальон"],
        ["Lavozimi", "Должность"],
        ["Ishlab topgan puli", "Заработано"],
        ["Tadbir soni", "Мероприятий"],
        ["Soatlari", "Часы"],
        ["Kunlar", "Дни"],
        ["Farq (%)", "Разница (%)"],
      ],
    },

    modalR: {
      t: [
        "Viloyatlar kesimida kelib tushgan mablag‘lar taqsimoti",
        "Распределение поступивших средств по областям",
      ],
      y: ["Summa (mlrd so‘m)", "Сумма (млрд сум)"],
    },
  },

  /* ============================================== 05 YANGI — FVV ===== */
  {
    type: "payout",
    nav: ["FVV qo‘shildi", "Добавлено МЧС"],
    foot: ["HAMKORLAR KENGAYDI", "РАСШИРЕНИЕ ПАРТНЁРОВ"],
    kicker: ["Yangilanish", "Обновление"],
    h1: [
      "Taqsimotga <em>Favqulodda vaziyatlar vazirligi</em> qo‘shildi",
      "В распределение добавлено <em>МЧС</em>",
    ],
    lead: [
      "Ommaviy tadbirlarda Milliy gvardiya va IIB xodimlari bilan bir qatorda Favqulodda vaziyatlar vazirligi xodimlari ham xizmat o‘taydi. Shu sababli kelib tushgan mablag‘ taqsimotida ular ham to‘liq huquqli ishtirokchi sifatida qatnashadi.",
      "На массовых мероприятиях наряду с сотрудниками Национальной гвардии и ОВД службу несут и сотрудники МЧС. Поэтому они также участвуют в распределении поступивших средств как полноправная сторона.",
    ],
    src: {
      i: "file-text",
      t: ["Tadbir shartnomasi", "Договор мероприятия"],
      p: ["Kelib tushgan mablag‘", "Поступившие средства"],
    },
    /* Foiz ko'rsatilmaydi — ulushlar hali tasdiqlanmagan. Tasdiqlangach
       kartochkaga `v: "25%"` qo'shilsa, u avtomatik chiqadi. */
    dest: [
      {
        i: "users",
        h: ["Gvardiya xodimlari", "Сотрудники гвардии"],
        p: ["Tadbirda qatnashgan soatlar bo‘yicha", "По часам участия в мероприятии"],
      },
      {
        i: "shield",
        h: ["Hamkor — IIB", "Партнёр — ОВД"],
        p: ["Ichki ishlar organlari xodimlari", "Сотрудники органов внутренних дел"],
        grouped: true,
      },
      {
        i: "flame",
        h: ["Hamkor — FVV", "Партнёр — МЧС"],
        p: ["Favqulodda vaziyatlar vazirligi xodimlari", "Сотрудники Министерства по ЧС"],
        grouped: true,
        isNew: true,
      },
    ],
    groupNote: [
      "Hamkor tashkilotlar — tadbirda birga xizmat o‘tagan idoralar",
      "Партнёрские организации — ведомства, несшие службу вместе",
    ],
    badge: ["Yangi", "Новое"],
    punch: {
      b: ["Har bir ishtirokchi hisobga olinadi.", "Учитывается каждый участник."],
      t: [
        "Tadbirda xizmat o‘tagan barcha idoralar bitta taqsimot mexanizmida.",
        "Все ведомства, несшие службу на мероприятии, — в едином механизме распределения.",
      ],
    },
  },

  /* ======================================= 06 YANGI — IIB SHARTNOMASI = */
  {
    type: "flows",
    nav: ["IIB shartnomalari", "Договоры ОВД"],
    foot: ["YANGI SERVIS", "НОВЫЙ СЕРВИС"],
    kicker: ["Yangi servis", "Новый сервис"],
    h1: [
      "IIB tuzgan shartnomalar bo‘yicha <em>taqsimot</em>",
      "Распределение по договорам, <em>заключённым ОВД</em>",
    ],
    lead: [
      "Ilgari shartnomani faqat Milliy gvardiya tuzardi va mablag‘ni hamkorlarga taqsimlardi. Endi teskari yo‘nalish ham qo‘llab-quvvatlanadi.",
      "Раньше договор заключала только Национальная гвардия и распределяла средства партнёрам. Теперь поддерживается и обратное направление.",
    ],
    cols: [
      {
        tone: "old",
        tag: ["Ilgari", "Раньше"],
        h: ["Gvardiya shartnoma tuzadi", "Договор заключает гвардия"],
        steps: [
          {
            i: "file-text",
            h: ["Gvardiya shartnoma tuzadi", "Гвардия заключает договор"],
            p: ["Buyurtmachi bilan tadbir shartnomasi", "Договор с заказчиком на мероприятие"],
          },
          {
            i: "wallet",
            h: ["Mablag‘ Gvardiyaga keladi", "Средства поступают гвардии"],
            p: ["To‘lov Gvardiya hisobiga tushadi", "Оплата поступает на счёт гвардии"],
          },
          {
            i: "shuffle",
            h: ["Tizim hamkorlarga taqsimlaydi", "Система распределяет партнёрам"],
            p: ["Xodimlar · IIB · FVV · moddiy baza", "Сотрудники · ОВД · МЧС · матбаза"],
          },
        ],
      },
      {
        tone: "new",
        tag: ["Endi", "Теперь"],
        h: ["IIB shartnoma tuzadi", "Договор заключает ОВД"],
        steps: [
          {
            i: "file-text",
            h: ["IIB shartnoma tuzadi", "ОВД заключает договор"],
            p: ["Buyurtmachi bilan shartnoma IIB nomidan", "Договор с заказчиком от имени ОВД"],
          },
          {
            i: "corner-down-right",
            h: ["Mablag‘ Gvardiyaga yuboriladi", "Средства направляются гвардии"],
            p: [
              "Tadbirda qatnashgan Gvardiya xodimlari uchun",
              "За участие сотрудников гвардии в мероприятии",
            ],
          },
          {
            i: "shuffle",
            h: ["Tizim taqsimlaydi", "Система распределяет"],
            p: [
              "Gvardiya xodimlari va moddiy bazani rivojlantirish o‘rtasida",
              "Между сотрудниками гвардии и развитием материальной базы",
            ],
          },
        ],
      },
    ],
    badge: ["Yangi", "Новое"],
    note: [
      "Ikkala yo‘nalish ham bitta tizimda — shartnomani kim tuzganidan qat’i nazar, hisob-kitob va nazorat yagona.",
      "Оба направления в одной системе — независимо от того, кто заключил договор, расчёт и контроль едины.",
    ],
    punch: {
      b: ["Taqsimot ikki tomonlama bo‘ldi.", "Распределение стало двусторонним."],
      t: [
        "Gvardiya ham beradi, ham oladi — hisob-kitob esa avtomatik.",
        "Гвардия и передаёт, и получает — а расчёт выполняется автоматически.",
      ],
    },
  },

  /* --------------------------------------- 07 MUROJAATLAR — MUAMMO */
  {
    type: "big",
    tone: "bad",
    nav: ["Muammo", "Проблема"],
    foot: ["MUROJAATLAR — MUAMMO", "ОБРАЩЕНИЯ — ПРОБЛЕМА"],
    kicker: ["Keyingi bosqich", "Следующий этап"],
    h1: [
      "Shartnomagacha bo‘lgan bosqich — <em>hozircha qog‘ozda</em>",
      "Этап до договора — <em>пока на бумаге</em>",
    ],
    blocks: [
      {
        i: "file-text",
        tag: ["Qog‘oz", "Бумага"],
        h: ["Hujjatlar qo‘lda keltiriladi", "Документы привозят лично"],
        p: [
          "Buyurtmachi ruxsatnoma va murojaat xatini idoraga o‘zi olib keladi — har bir tashrif vaqt va yo‘l talab qiladi.",
          "Заказчик сам привозит разрешение и письмо-обращение в офис — каждая поездка требует времени и дороги.",
        ],
      },
      {
        i: "clock",
        tag: ["Baholash", "Оценка"],
        h: ["Ma’lumot qo‘lda uzatiladi", "Данные передают вручную"],
        p: [
          "Xodim obyektni joyida o‘rganib, qancha qo‘riqchi va qaysi soatlarda kerakligini aniqlaydi. So‘ng bu ma’lumotni buxgalteriyaga qo‘lda topshiradi.",
          "Сотрудник изучает объект и определяет, сколько охранников и в какие часы нужно. Затем передаёт эти данные в бухгалтерию вручную.",
        ],
      },
      {
        i: "eye",
        tag: ["Kuzatuv", "Наблюдение"],
        h: ["Bosqichni ko‘rish qiyin", "Этап сложно отследить"],
        p: [
          "Murojaat qaysi bosqichda ekanini bilish uchun qo‘ng‘iroq qilishga to‘g‘ri keladi — bu buyurtmachiga ham, bajaruvchiga ham noqulay.",
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

  /* ---------------------------------------- 08 MUROJAATLAR — YECHIM */
  {
    type: "big",
    tone: "good",
    nav: ["Yechim", "Решение"],
    foot: ["MUROJAATLAR — YECHIM", "ОБРАЩЕНИЯ — РЕШЕНИЕ"],
    kicker: ["Yechim", "Решение"],
    h1: [
      "Tadbir-Hisobga <em>murojaatlar moduli</em>",
      "Модуль обращений <em>для Тадбир-Хисоб</em>",
    ],
    blocks: [
      {
        i: "monitor",
        tag: ["Uydan", "Из дома"],
        h: ["Buyurtmachi o‘zi yuboradi", "Заказчик отправляет сам"],
        p: [
          "Ro‘yxatdan o‘tadi, xat va ruxsatnomani yuklaydi, holatni kabinetida ko‘rib turadi.",
          "Регистрируется, загружает письмо и разрешение, видит статус в своём кабинете.",
        ],
      },
      {
        i: "shield-check",
        tag: ["Tizimda", "В системе"],
        h: ["JSTB xodimi baholaydi", "Сотрудник ООП оценивает"],
        p: [
          "Obyektni o‘rganib, qancha xodim kerakligini tizimga yozadi. Tasdiqlaydi yoki sabab bilan rad etadi — hammasi saqlanadi.",
          "Изучает объект и вносит в систему нужное число сотрудников. Одобряет или отклоняет с причиной — всё сохраняется.",
        ],
      },
      {
        i: "zap",
        tag: ["Avtomatik", "Автоматически"],
        h: ["Tadbir-Hisobga o‘zi tushadi", "Само попадает в Тадбир-Хисоб"],
        p: [
          "Tashkilot, sana, soatlar va kerakli xodimlar soni asosiy dasturga qayta kiritishsiz o‘tadi.",
          "Организация, даты, часы и число сотрудников переходят в основную программу без повторного ввода.",
        ],
      },
    ],
    punch: {
      b: ["Tadbir-Hisob kengaymoqda.", "Тадбир-Хисоб расширяется."],
      t: [
        "Endi u butun jarayonni birinchi murojaatdan boshlab qamrab oladi.",
        "Теперь он охватывает весь процесс — с самого первого обращения.",
      ],
    },
  },

  /* --------------------------------------------------- 09 JARAYON */
  {
    type: "process",
    nav: ["Jarayon", "Процесс"],
    foot: ["JARAYON", "ПРОЦЕСС"],
    kicker: ["Jarayon", "Процесс"],
    h1: ["To‘rt qadam — <em>barchasi tizimda</em>", "Четыре шага — <em>все в системе</em>"],
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
        p: ["Hudud bo‘yicha mas’ul xodimga avtomatik", "Автоматически ответственному по региону"],
      },
      {
        i: "shield",
        who: ["JSTB xodimi", "Сотрудник ООП"],
        h: ["Baholash va qaror", "Оценка и решение"],
        p: [
          "Obyektni o‘rganadi, xodimlar sonini belgilaydi, tasdiqlaydi yoki sabab bilan rad etadi",
          "Изучает объект, определяет число сотрудников, одобряет или отклоняет с причиной",
        ],
      },
      {
        i: "briefcase",
        who: ["Tadbir-Hisob", "Тадбир-Хисоб"],
        h: ["Shartnoma", "Договор"],
        p: ["Ma’lumot avtomatik tushadi, shartnoma tuziladi", "Данные поступают автоматически, формируется договор"],
      },
    ],
    track: [
      "Buyurtmachi butun jarayonni kabinetida ko‘rib turadi",
      "Заказчик видит весь процесс в своём кабинете",
    ],
    punch: {
      b: ["Buyurtmachi idoraga bormaydi.", "Заказчик в офис не приезжает."],
      t: ["Murojaatdan shartnomagacha — barchasi masofadan.", "От обращения до договора — всё удалённо."],
    },
  },

  /* ------------------------------------------ 10 YO'L XARITASI + RAHMAT */
  {
    type: "roadmap",
    nav: ["Yakun", "Итог"],
    foot: ["YO‘L XARITASI", "ДОРОЖНАЯ КАРТА"],
    kicker: ["Yakun", "Итог"],
    h1: ["Yo‘l xaritasi", "Дорожная карта"],
    stages: [
      {
        s: "done",
        i: "check-circle",
        tag: ["Bajarildi", "Выполнено"],
        h: ["Tadbir-Hisob ishlab turibdi", "Тадбир-Хисоб работает"],
        p: [
          "Shartnomalar, moliyaviy nazorat, rag‘batlantirish va monitoring — real ma’lumotlar bilan.",
          "Договоры, финансовый учёт, премирование и мониторинг — на реальных данных.",
        ],
      },
      {
        s: "now",
        i: "repeat",
        tag: ["Qo‘shilmoqda", "Добавляется"],
        h: ["FVV va IIB taqsimoti", "Распределение МЧС и ОВД"],
        p: [
          "Favqulodda vaziyatlar vazirligi taqsimotga qo‘shildi; IIB tuzgan shartnomalar bo‘yicha taqsimot servisi ishlab chiqilmoqda.",
          "МЧС включено в распределение; разрабатывается сервис распределения по договорам, заключённым ОВД.",
        ],
      },
      {
        s: "next",
        i: "flag",
        tag: ["Keyingi qadam", "Следующий шаг"],
        h: ["Murojaatlar moduli", "Модуль обращений"],
        p: [
          "Veb-saytni ishlab chiqamiz va birinchi bosqichda ishga tushiramiz.",
          "Разработаем веб-сайт и запустим его на первом этапе.",
        ],
      },
    ],
    thanksT: ["Rahmat", "Спасибо"],
    thanksP: ["Savollaringizni kutamiz", "Ждём ваших вопросов"],
  },
];
