/* ==========================================================================
   Til boshqaruvi — ["o'zbekcha", "ruscha"] massivlaridan tanlaydi
   ========================================================================== */

let LANG = localStorage.getItem("pitch.lang") || "uz";

/** Ikki tilli qiymatdan joriy tildagisini oladi. */
function T(v) {
  if (Array.isArray(v)) return LANG === "uz" ? v[0] : v[1];
  return v == null ? "" : v;
}

function setLang(next) {
  if (next === LANG) return;
  LANG = next;
  localStorage.setItem("pitch.lang", next);
  document.documentElement.lang = next;
  window.dispatchEvent(new CustomEvent("langchange"));
}

/* --- Interfeys matnlari (demo va navigatsiya) ---------------------------- */
const UI = {
  /* Umumiy */
  reset: ["Demoni qayta boshlash", "Начать демо заново"],
  required: ["majburiy", "обязательно"],
  cancel: ["Bekor qilish", "Отмена"],
  overview: ["Barcha slaydlar", "Все слайды"],
  hintKeys: ["slayd", "слайд"],
  hintEsc: ["barcha slaydlar", "все слайды"],
  hintF: ["to‘liq ekran", "полный экран"],

  /* Statuslar — appeal_types */
  st: {
    new: ["Yangi", "Новое"],
    reviewing: ["Ko’rib chiqilmoqda", "На рассмотрении"],
    rejected: ["Rad etildi", "Отклонено"],
    contract_sent: ["Shartnomaga yuborildi", "Отправлено на договор"],
  },

  /* Foydalanuvchi turlari */
  ut: {
    yatt: ["YaTT", "ИП"],
    jshr: ["JShR", "Физлицо"],
    mchj: ["MChJ", "ООО"],
  },
  utFull: {
    yatt: ["Yakka tartibdagi tadbirkor", "Индивидуальный предприниматель"],
    jshr: ["Jismoniy shaxs", "Физическое лицо"],
    mchj: ["Mas’uliyati cheklangan jamiyat", "Общество с огр. ответственностью"],
  },

  /* --- 08 Kabinet --- */
  cab: {
    url: ["murojaat.jstb.uz/kabinet", "murojaat.jstb.uz/kabinet"],
    brand: ["Murojaat portali", "Портал обращений"],
    user: ["Karimov A. · YaTT", "Каримов А. · ИП"],
    step1: ["1. Buyurtmachi turi", "1. Тип заказчика"],
    step2: ["2. Tashkilot ma’lumotlari", "2. Данные заказчика"],
    step3: ["3. Tadbir", "3. Мероприятие"],
    step4: ["4. Soat oraliqlari", "4. Часовые интервалы"],
    step5: ["5. Hujjatlar", "5. Документы"],
    fio: ["F.I.O.", "Ф.И.О."],
    orgName: ["Tashkilot nomi", "Название организации"],
    pinfl: ["PINFL", "ПИНФЛ"],
    inn: ["INN", "ИНН"],
    phone: ["Telefon", "Телефон"],
    execPhone: ["Ijrochi telefoni", "Телефон исполнителя"],
    address: ["Manzil", "Адрес"],
    region: ["Hudud", "Регион"],
    evAddress: ["Tadbir manzili", "Адрес мероприятия"],
    startDate: ["Boshlanish sanasi", "Дата начала"],
    endDate: ["Tugash sanasi", "Дата окончания"],
    addHour: ["Yana oraliq qo’shish", "Добавить интервал"],
    hoursNote: [
      "Bir tadbirga bir necha smena biriktirilishi mumkin",
      "К одному мероприятию можно привязать несколько смен",
    ],
    letter: ["Murojaat xati", "Письмо-обращение"],
    license: ["Ruxsatnoma", "Разрешение"],
    pickFile: ["PDF faylni tanlang", "Выберите PDF файл"],
    submit: ["Murojaatni yuborish", "Отправить обращение"],
    checklist: ["To’ldirilishi shart", "Обязательно к заполнению"],
    chk: {
      type: ["Buyurtmachi turi", "Тип заказчика"],
      ident: ["Shaxs / tashkilot ma’lumoti", "Данные лица / организации"],
      event: ["Tadbir manzili va sanasi", "Адрес и даты мероприятия"],
      hours: ["Kamida bitta soat oralig’i", "Хотя бы один интервал"],
      files: ["Xat va ruxsatnoma (PDF)", "Письмо и разрешение (PDF)"],
    },
    tip: [
      "Barcha maydon to’ldirilmaguncha yuborish tugmasi ochilmaydi — bu buxgalteriyaga chala ma’lumot tushishining oldini oladi.",
      "Кнопка отправки не активна, пока не заполнены все поля — это исключает попадание неполных данных в бухгалтерию.",
    ],
    doneT: ["Murojaat yuborildi", "Обращение отправлено"],
    doneP: [
      "Murojaatingiz hudud bo’yicha mas’ul JSTB xodimiga avtomatik biriktirildi. Holatni shu kabinetda kuzatib borishingiz mumkin.",
      "Ваше обращение автоматически назначено ответственному сотруднику ООП по региону. Статус можно отслеживать в этом кабинете.",
    ],
    doneNext: [
      "Keyingi slaydda shu murojaat xodim panelida qanday ko’rinishini ko’ramiz →",
      "На следующем слайде увидим, как это обращение выглядит в панели сотрудника →",
    ],
    again: ["Formani qayta to’ldirish", "Заполнить форму заново"],
    trackT: ["Holat kuzatuvi", "Отслеживание статуса"],
    trackNote: [
      "Buyurtmachi bu ekranni uyidan ochib turadi. Xodim panelda qaror qabul qilishi bilan bu yerdagi holat o’zgaradi.",
      "Заказчик держит этот экран открытым из дома. Как только сотрудник примет решение в панели, статус здесь изменится.",
    ],
    tr: {
      sent: ["Murojaat yuborildi", "Обращение отправлено"],
      review: ["JSTB xodimi ko’rib chiqmoqda", "Сотрудник ООП рассматривает"],
      approved: ["Tasdiqlandi", "Одобрено"],
      rejected: ["Rad etildi", "Отклонено"],
      decision: ["Qaror kutilmoqda", "Ожидается решение"],
      contract: ["Shartnoma tayyorlanmoqda", "Договор готовится"],
      wait: ["kutilmoqda", "ожидается"],
    },
  },

  /* --- 09/10 Panel --- */
  pan: {
    url: ["murojaat.jstb.uz/panel", "murojaat.jstb.uz/panel"],
    brand: ["JSTB — Xodim paneli", "ООП — Панель сотрудника"],
    user: ["Rasulov S. · JSTB xodimi", "Расулов С. · Сотрудник ООП"],
    all: ["Barchasi", "Все"],
    search: ["Qidirish…", "Поиск…"],
    thId: ["ID", "ID"],
    thOrg: ["Buyurtmachi", "Заказчик"],
    thRegion: ["Hudud", "Регион"],
    thDate: ["Tadbir sanasi", "Даты мероприятия"],
    thStatus: ["Holat", "Статус"],
    empty: ["Bu filtrda murojaat yo’q", "Нет обращений по этому фильтру"],
    pickRow: [
      "Ro’yxatdan murojaatni tanlang",
      "Выберите обращение из списка",
    ],
    pickRowSub: [
      "Chapdagi jadvaldan istalgan qatorni bosing — to’liq ma’lumot shu yerda ochiladi.",
      "Нажмите на любую строку в таблице слева — полная информация откроется здесь.",
    ],
    secOrg: ["Buyurtmachi", "Заказчик"],
    secEvent: ["Tadbir", "Мероприятие"],
    secHours: ["Soat oraliqlari", "Часовые интервалы"],
    secFiles: ["Hujjatlar", "Документы"],
    secLog: ["Harakatlar tarixi", "История действий"],
    fType: ["Turi", "Тип"],
    fPhone: ["Telefon", "Телефон"],
    fIdent: ["PINFL / INN", "ПИНФЛ / ИНН"],
    fAddress: ["Manzil", "Адрес"],
    fEvAddr: ["Tadbir manzili", "Адрес мероприятия"],
    fRegion: ["Hudud", "Регион"],
    fDates: ["Sana oralig’i", "Период"],
    fExec: ["Rahbar telefoni", "Телефон руководителя"],
    take: ["Ko’rib chiqishga olish", "Взять в работу"],
    reject: ["Rad etish", "Отклонить"],
    approve: ["Tasdiqlash", "Одобрить"],
    sentTo: ["Buxgalteriyaga uzatildi", "Передано в бухгалтерию"],
    sentSub: [
      "Ma’lumot shartnomalar tizimiga avtomatik tushdi. Qayta kiritish talab etilmaydi.",
      "Данные автоматически поступили в систему договоров. Повторный ввод не требуется.",
    ],
    rejectedNote: [
      "Murojaat rad etildi. Buyurtmachi sababni kabinetida ko’radi.",
      "Обращение отклонено. Заказчик видит причину в своём кабинете.",
    ],
    modalT: ["Rad etish sababi", "Причина отклонения"],
    modalP: [
      "Sabab majburiy — u appeal_logs jadvaliga yoziladi va buyurtmachiga ko’rinadi.",
      "Причина обязательна — она записывается в appeal_logs и видна заказчику.",
    ],
    modalPh: [
      "Masalan: ruxsatnoma muddati tugagan…",
      "Например: срок действия разрешения истёк…",
    ],
    modalOk: ["Rad etishni tasdiqlash", "Подтвердить отклонение"],
    hintPanel: [
      "Qatorni bosing → o’ng tomonda to’liq ma’lumot ochiladi",
      "Нажмите на строку → справа откроется полная информация",
    ],
    hintDecision: [
      "Ko’rib chiqishga oling → so’ng tasdiqlang yoki rad eting",
      "Возьмите в работу → затем одобрите или отклоните",
    ],
    logNew: ["Murojaat yaratildi", "Обращение создано"],
    logTake: ["Ko’rib chiqishga olindi", "Взято в работу"],
    logApprove: [
      "Tasdiqlandi va buxgalteriyaga uzatildi",
      "Одобрено и передано в бухгалтерию",
    ],
    justNow: ["hozir", "только что"],
    byClient: ["Buyurtmachi", "Заказчик"],
    byStaff: ["Rasulov S.", "Расулов С."],
  },
};
