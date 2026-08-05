/* ==========================================================================
   Interaktiv demo — 08/09/10 slaydlar bitta holatni bo'lishadi.
   Backend yo'q: butun holat shu obyektda.
   ========================================================================== */

const SAMPLE = {
  yatt: {
    fio: ["Ergashev Bekzod Rustamovich", "Эргашев Бекзод Рустамович"],
    ident: "3120487650021",
    phone: "+998 93 447-19-05",
    exec: "+998 93 447-19-05",
    address: ["Samarqand sh., Registon ko’chasi 14", "г. Самарканд, ул. Регистан 14"],
    region: "samarqand",
    evAddress: ["“Registon” maydoni yonidagi bog’", "Парк у площади Регистан"],
  },
  jshr: {
    fio: ["Sobirova Nilufar Karimovna", "Собирова Нилуфар Каримовна"],
    ident: "4021156780034",
    phone: "+998 94 615-28-13",
    exec: "+998 94 615-28-13",
    address: ["Andijon sh., Navoiy shoh ko’chasi 7", "г. Андижан, пр. Навои 7"],
    region: "andijon",
    evAddress: ["“Bahor” to’yxonasi", "Банкетный зал «Bahor»"],
  },
  mchj: {
    fio: ["“Silk Road Events” MChJ", "ООО «Silk Road Events»"],
    ident: "302145678",
    phone: "+998 90 123-45-67",
    exec: "+998 71 200-11-22",
    address: [
      "Toshkent sh., Yunusobod t., Amir Temur ko’chasi 108",
      "г. Ташкент, Юнусабадский р-н, ул. Амира Темура 108",
    ],
    region: "toshkent_shahri",
    evAddress: ["“Humo Arena” sport majmuasi", "СК «Humo Arena»"],
  },
};

const DEMO = {};

function seedLogs(a) {
  const logs = [
    {
      t: a.created,
      who: UI.pan.byClient,
      k: "new",
      c: UI.pan.logNew,
    },
  ];
  if (a.status !== "new") {
    logs.push({ t: a.created, who: UI.pan.byStaff, k: "reviewing", c: UI.pan.logTake });
  }
  if (a.status === "contract_sent") {
    logs.push({ t: a.created, who: UI.pan.byStaff, k: "contract_sent", c: UI.pan.logApprove });
  }
  if (a.status === "rejected") {
    logs.push({ t: a.created, who: UI.pan.byStaff, k: "rejected", c: a.rejectReason });
  }
  return logs;
}

function resetDemo() {
  DEMO.appeals = SEED_APPEALS.map(function (a) {
    const copy = Object.assign({}, a);
    copy.logs = seedLogs(a);
    copy.fresh = false;
    return copy;
  });
  DEMO.submitted = false;
  DEMO.newId = null;
  DEMO.filter = "all";
  DEMO.selectedId = null;
  DEMO.modal = false;
  DEMO.rejectText = "";
  applySample("mchj");
}

function applySample(type) {
  const s = SAMPLE[type];
  DEMO.form = {
    utype: type,
    fio: s.fio,
    ident: s.ident,
    phone: s.phone,
    exec: s.exec,
    address: s.address,
    region: s.region,
    evAddress: s.evAddress,
    start: "18.03.2026",
    end: "19.03.2026",
    hours: [["18:00", "23:30"]],
    letter: false,
    license: false,
  };
}

function formReady() {
  const f = DEMO.form;
  return !!(
    f.utype &&
    f.fio &&
    f.ident &&
    f.phone &&
    f.address &&
    f.evAddress &&
    f.region &&
    f.start &&
    f.end &&
    f.hours.length &&
    f.letter &&
    f.license
  );
}

function regionName(k) {
  const r = REGION_BY_KEY[k];
  return r ? T(r.n) : k;
}

function val(v) {
  return esc(T(v));
}

/* ==========================================================  08 KABINET  == */

function cabinetHtml() {
  const f = DEMO.form;
  const isOrg = f.utype === "mchj";

  if (DEMO.submitted) {
    const mine = DEMO.appeals.find(function (x) {
      return x.id === DEMO.newId;
    });
    return (
      '<div class="app">' +
      appChrome(UI.cab.url, UI.cab.brand, UI.cab.user, "KA") +
      '<div class="app__main" style="display:grid;grid-template-columns:1fr calc(470*var(--u))">' +
      '<div class="done">' +
      '<div class="done__ico">' +
      icon("check") +
      "</div><h3>" +
      val(UI.cab.doneT) +
      '</h3><div class="done__id">#' +
      DEMO.newId +
      "</div><p>" +
      val(UI.cab.doneP) +
      "</p><p style=\"color:var(--gold)\">" +
      val(UI.cab.doneNext) +
      '</p><button class="btn btn--ghost" data-act="restart">' +
      icon("refresh-ccw") +
      val(UI.cab.again) +
      "</button></div>" +
      clientTracker(mine) +
      "</div></div>" +
      demoBar(UI.cab.trackNote)
    );
  }

  /* Turlar tanlagichi */
  let seg = '<div class="seg">';
  ["yatt", "jshr", "mchj"].forEach(function (k) {
    seg +=
      '<button data-act="utype" data-v="' +
      k +
      '" class="' +
      (f.utype === k ? "is-on" : "") +
      '"><b>' +
      val(UI.ut[k]) +
      "</b><span>" +
      val(UI.utFull[k]) +
      "</span></button>";
  });
  seg += "</div>";

  /* Shaxs / tashkilot maydonlari */
  const identity =
    '<div class="frow frow--2">' +
    fld(isOrg ? UI.cab.orgName : UI.cab.fio, "fio", f.fio, true) +
    fld(isOrg ? UI.cab.inn : UI.cab.pinfl, "ident", f.ident, true) +
    "</div>" +
    '<div class="frow frow--2">' +
    fld(isOrg ? UI.cab.execPhone : UI.cab.phone, "phone", f.phone, true) +
    fld(UI.cab.address, "address", f.address, true) +
    "</div>";

  /* Hudud tanlash */
  let opts = "";
  REGIONS.forEach(function (r) {
    opts +=
      '<option value="' +
      r.k +
      '"' +
      (f.region === r.k ? " selected" : "") +
      ">" +
      val(r.n) +
      "</option>";
  });

  const event =
    '<div class="frow frow--2">' +
    fld(UI.cab.evAddress, "evAddress", f.evAddress, true) +
    '<div class="fld"><label>' +
    val(UI.cab.region) +
    '<em>*</em></label><select class="inp" data-fld="region">' +
    opts +
    "</select></div>" +
    "</div>" +
    '<div class="frow frow--2">' +
    fld(UI.cab.startDate, "start", f.start, true) +
    fld(UI.cab.endDate, "end", f.end, true) +
    "</div>";

  /* Soat oraliqlari — appeal_hours */
  let hours = '<div class="hours">';
  f.hours.forEach(function (h, i) {
    hours +=
      '<div class="hrow"><span class="hrow__n">' +
      (i + 1) +
      '</span><input class="inp" value="' +
      esc(h[0]) +
      '" data-hour="' +
      i +
      '" data-pos="0"><span class="hrow__dash">—</span>' +
      '<input class="inp" value="' +
      esc(h[1]) +
      '" data-hour="' +
      i +
      '" data-pos="1">' +
      (f.hours.length > 1
        ? '<button class="hrow__del" data-act="delhour" data-v="' +
          i +
          '">' +
          icon("trash") +
          "</button>"
        : "") +
      "</div>";
  });
  hours +=
    '<button class="addhour" data-act="addhour">' +
    icon("plus") +
    val(UI.cab.addHour) +
    "</button></div>";

  /* Fayllar */
  const files =
    '<div class="frow frow--2">' +
    drop("letter", UI.cab.letter, f.letter, "murojaat_xati.pdf") +
    drop("license", UI.cab.license, f.license, "ruxsatnoma.pdf") +
    "</div>";

  /* Yon panel */
  const checks = [
    ["type", true],
    ["ident", !!(f.fio && f.ident && f.phone && f.address)],
    ["event", !!(f.evAddress && f.region && f.start && f.end)],
    ["hours", f.hours.length > 0],
    ["files", f.letter && f.license],
  ];
  let chk = '<ul class="check">';
  checks.forEach(function (c) {
    chk +=
      '<li class="' +
      (c[1] ? "is-ok" : "") +
      '"><i>&#10003;</i>' +
      val(UI.cab.chk[c[0]]) +
      "</li>";
  });
  chk += "</ul>";

  return (
    '<div class="app">' +
    appChrome(UI.cab.url, UI.cab.brand, UI.cab.user, "KA") +
    '<div class="app__main"><div class="cab">' +
    '<div class="cab__form">' +
    sect(UI.cab.step1, seg) +
    sect(UI.cab.step2, identity) +
    sect(UI.cab.step3, event) +
    sect(UI.cab.step4, hours) +
    sect(UI.cab.step5, files) +
    "</div>" +
    '<div class="cab__aside">' +
    '<div class="sect__t">' +
    val(UI.cab.checklist) +
    "</div>" +
    chk +
    '<div class="aside__note">' +
    val(UI.cab.tip) +
    "</div>" +
    '<button class="btn btn--gold" data-act="submit"' +
    (formReady() ? "" : " disabled") +
    ">" +
    icon("send") +
    val(UI.cab.submit) +
    "</button>" +
    "</div></div></div></div>" +
    demoBar(UI.cab.hoursNote)
  );
}

/** Buyurtmachi kabinetidagi holat kuzatuvi — murojaatning joriy statusiga qarab. */
function clientTracker(a) {
  const st = a ? a.status : "new";
  const tr = UI.cab.tr;

  const steps = [
    { h: tr.sent, t: a ? a.created : "", state: "done" },
    {
      h: tr.review,
      t: st === "new" ? tr.wait : UI.pan.byStaff,
      state: st === "new" ? "wait" : "done",
    },
  ];

  if (st === "rejected") {
    steps.push({ h: tr.rejected, t: a.rejectReason, state: "bad" });
  } else {
    steps.push({
      h: st === "contract_sent" ? tr.approved : tr.decision,
      t: st === "contract_sent" ? UI.pan.byStaff : tr.wait,
      state: st === "contract_sent" ? "done" : st === "reviewing" ? "active" : "wait",
    });
    steps.push({
      h: tr.contract,
      t: st === "contract_sent" ? UI.pan.sentTo : tr.wait,
      state: st === "contract_sent" ? "active" : "wait",
    });
  }

  let rows = "";
  steps.forEach(function (s) {
    rows +=
      '<div class="trk__step is-' +
      s.state +
      '"><span class="trk__dot"></span><div><b>' +
      val(s.h) +
      "</b><time>" +
      val(s.t) +
      "</time></div></div>";
  });

  return (
    '<div class="cab__aside"><div class="tracker" style="border:none;background:none;padding:0;flex:1"><h4>' +
    val(UI.cab.trackT) +
    '</h4><div class="tracker__id">#' +
    (a ? a.id : "") +
    '</div><div class="trk">' +
    rows +
    "</div></div></div>"
  );
}

function sect(title, inner) {
  return '<div class="sect"><div class="sect__t">' + val(title) + "</div>" + inner + "</div>";
}

function fld(label, key, value, req) {
  return (
    '<div class="fld"><label>' +
    val(label) +
    (req ? "<em>*</em>" : "") +
    '</label><input class="inp" data-fld="' +
    key +
    '" value="' +
    val(value) +
    '"></div>'
  );
}

function drop(key, label, filled, fname) {
  return (
    '<div class="drop' +
    (filled ? " is-filled" : "") +
    '" data-act="file" data-v="' +
    key +
    '"><div class="drop__ico">' +
    icon(filled ? "file-text" : "upload") +
    '</div><div class="drop__txt"><b>' +
    val(label) +
    "</b><span>" +
    (filled ? esc(fname) + " · 240 KB" : val(UI.cab.pickFile)) +
    "</span></div></div>"
  );
}

function appChrome(url, brand, user, initials) {
  return (
    '<div class="app__chrome"><div class="app__dots"><i></i><i></i><i></i></div>' +
    '<div class="app__url">' +
    icon("lock") +
    val(url) +
    "</div></div>" +
    '<div class="app__bar"><div class="app__brand"><i>J</i>' +
    val(brand) +
    '</div><div class="app__user">' +
    val(user) +
    '<span class="app__avatar">' +
    initials +
    "</span></div></div>"
  );
}

function demoBar(hint) {
  return (
    '<div class="demobar"><div class="demobar__hint">' +
    icon("info") +
    "<span>" +
    val(hint) +
    '</span></div><button class="btn btn--ghost" data-act="reset">' +
    icon("refresh-ccw") +
    val(UI.reset) +
    "</button></div>"
  );
}

/* =====================================================  09/10 JSTB PANEL  == */

function visibleAppeals() {
  if (DEMO.filter === "all") return DEMO.appeals;
  return DEMO.appeals.filter(function (a) {
    return a.status === DEMO.filter;
  });
}

function panelHtml(mode) {
  const list = visibleAppeals();
  const sel = DEMO.appeals.find(function (a) {
    return a.id === DEMO.selectedId;
  });

  /* Filtr chiplari */
  const counts = { all: DEMO.appeals.length };
  ["new", "reviewing", "rejected", "contract_sent"].forEach(function (k) {
    counts[k] = DEMO.appeals.filter(function (a) {
      return a.status === k;
    }).length;
  });

  let chips = "";
  [["all", UI.pan.all]].concat(
    ["new", "reviewing", "contract_sent", "rejected"].map(function (k) {
      return [k, UI.st[k]];
    })
  ).forEach(function (c) {
    chips +=
      '<button class="chip' +
      (DEMO.filter === c[0] ? " is-on" : "") +
      '" data-act="filter" data-v="' +
      c[0] +
      '">' +
      val(c[1]) +
      "<b>" +
      counts[c[0]] +
      "</b></button>";
  });

  /* Jadval */
  let rows = "";
  list.forEach(function (a) {
    rows +=
      "<tr" +
      (a.id === DEMO.selectedId ? ' class="is-sel"' : a.fresh ? ' class="is-fresh"' : "") +
      ' data-act="pick" data-v="' +
      a.id +
      '"><td class="num">#' +
      a.id +
      "</td><td><b>" +
      val(a.org) +
      "</b><small>" +
      val(UI.ut[a.utype]) +
      " · " +
      esc(a.ident) +
      "</small></td><td>" +
      esc(regionName(a.region)) +
      '</td><td class="num">' +
      esc(a.start) +
      (a.end !== a.start ? " – " + esc(a.end) : "") +
      "</td><td>" +
      pill(a.status) +
      "</td></tr>";
  });

  const table =
    rows === ""
      ? '<div class="empty">' + val(UI.pan.empty) + "</div>"
      : '<table class="data"><thead><tr><th>' +
        val(UI.pan.thId) +
        "</th><th>" +
        val(UI.pan.thOrg) +
        "</th><th>" +
        val(UI.pan.thRegion) +
        "</th><th>" +
        val(UI.pan.thDate) +
        "</th><th>" +
        val(UI.pan.thStatus) +
        "</th></tr></thead><tbody>" +
        rows +
        "</tbody></table>";

  return (
    '<div class="app">' +
    appChrome(UI.pan.url, UI.pan.brand, UI.pan.user, "RS") +
    '<div class="app__main"><div class="panel">' +
    '<div class="panel__list"><div class="panel__tools">' +
    chips +
    '<input class="inp panel__search" placeholder="' +
    val(UI.pan.search) +
    '"></div><div class="tblwrap">' +
    table +
    "</div></div>" +
    detailHtml(sel, mode) +
    "</div></div>" +
    modalHtml() +
    "</div>" +
    (mode === "decide" && sel && sel.status === "contract_sent"
      ? handoffHtml()
      : "") +
    demoBar(mode === "decide" ? UI.pan.hintDecision : UI.pan.hintPanel)
  );
}

function detailHtml(a, mode) {
  if (!a) {
    return (
      '<div class="detail"><div class="detail__body" style="justify-content:center;align-items:center;text-align:center">' +
      '<div style="opacity:.4;font-size:calc(46*var(--u));color:var(--gold)">' +
      icon("inbox") +
      "</div><h4 style=\"font-size:calc(19*var(--u));font-weight:700\">" +
      val(UI.pan.pickRow) +
      '</h4><p style="font-size:calc(14*var(--u));color:var(--text-2);line-height:1.5">' +
      val(UI.pan.pickRowSub) +
      "</p></div></div>"
    );
  }

  const isOrg = a.utype === "mchj";

  let hrows = "";
  a.hours.forEach(function (h, i) {
    hrows +=
      '<div class="hrow"><span class="hrow__n">' +
      (i + 1) +
      "</span><span style=\"font-family:var(--mono);font-size:calc(13.5*var(--u))\">" +
      esc(h[0]) +
      " — " +
      esc(h[1]) +
      "</span></div>";
  });

  let logs = "";
  a.logs.forEach(function (l) {
    logs +=
      '<div class="tl"><b>' +
      val(l.who) +
      "</b><time>" +
      esc(l.t) +
      "</time> " +
      pill(l.k) +
      "<p>" +
      val(l.c) +
      "</p></div>";
  });

  /* Amal tugmalari */
  let acts = "";
  if (mode === "decide") {
    if (a.status === "new") {
      acts =
        '<button class="btn btn--gold" data-act="take">' +
        icon("eye") +
        val(UI.pan.take) +
        "</button>";
    } else if (a.status === "reviewing") {
      acts =
        '<button class="btn btn--danger" data-act="reject">' +
        icon("x") +
        val(UI.pan.reject) +
        '</button><button class="btn btn--green" data-act="approve">' +
        icon("check") +
        val(UI.pan.approve) +
        "</button>";
    } else if (a.status === "contract_sent") {
      acts =
        '<div style="flex:1;display:flex;align-items:center;gap:calc(10*var(--u));color:var(--success-bright);font-size:calc(14*var(--u));font-weight:700">' +
        icon("check-circle") +
        val(UI.pan.sentTo) +
        "</div>";
    } else {
      acts =
        '<div style="flex:1;display:flex;align-items:center;gap:calc(10*var(--u));color:#ff8f8f;font-size:calc(13.5*var(--u))">' +
        icon("x-circle") +
        val(UI.pan.rejectedNote) +
        "</div>";
    }
  } else if (a.status === "new") {
    acts =
      '<button class="btn btn--gold" data-act="take">' +
      icon("eye") +
      val(UI.pan.take) +
      "</button>";
  } else {
    acts =
      '<div style="flex:1;display:flex;align-items:center;gap:calc(9*var(--u));color:var(--text-3);font-size:calc(13*var(--u))">' +
      icon("info") +
      val(UI.pan.hintDecision) +
      "</div>";
  }

  return (
    '<div class="detail"><div class="detail__head"><div><h4>' +
    val(a.org) +
    "</h4><code>#" +
    a.id +
    " · " +
    esc(a.created) +
    "</code></div>" +
    pill(a.status) +
    "</div>" +
    '<div class="detail__body">' +
    '<div><div class="sect__t">' +
    val(UI.pan.secOrg) +
    '</div><dl class="kv">' +
    "<dt>" + val(UI.pan.fType) + "</dt><dd>" + val(UI.utFull[a.utype]) + "</dd>" +
    "<dt>" + val(UI.pan.fIdent) + "</dt><dd>" + esc(a.ident) + "</dd>" +
    "<dt>" + val(UI.pan.fPhone) + "</dt><dd>" + esc(a.phone) + "</dd>" +
    "<dt>" + val(UI.pan.fAddress) + "</dt><dd>" + val(a.address) + "</dd>" +
    "</dl></div>" +
    '<div><div class="sect__t">' +
    val(UI.pan.secEvent) +
    '</div><dl class="kv">' +
    "<dt>" + val(UI.pan.fEvAddr) + "</dt><dd>" + val(a.evAddress) + "</dd>" +
    "<dt>" + val(UI.pan.fRegion) + "</dt><dd>" + esc(regionName(a.region)) + "</dd>" +
    "<dt>" + val(UI.pan.fDates) + "</dt><dd>" + esc(a.start) + " — " + esc(a.end) + "</dd>" +
    "<dt>" + val(UI.pan.fExec) + "</dt><dd>" + esc(a.exec) + "</dd>" +
    "</dl></div>" +
    '<div><div class="sect__t">' +
    val(UI.pan.secHours) +
    '</div><div class="hours">' +
    hrows +
    "</div></div>" +
    '<div><div class="sect__t">' +
    val(UI.pan.secFiles) +
    '</div><div class="files">' +
    fileRow("murojaat_xati.pdf", UI.cab.letter) +
    fileRow("ruxsatnoma.pdf", UI.cab.license) +
    "</div></div>" +
    '<div><div class="sect__t">' +
    val(UI.pan.secLog) +
    '</div><div class="timeline">' +
    logs +
    "</div></div>" +
    "</div>" +
    '<div class="detail__foot">' +
    acts +
    "</div></div>"
  );
}

function fileRow(name, label) {
  return (
    '<div class="file"><div class="file__ico">PDF</div><div><b>' +
    esc(name) +
    "</b><br><span>" +
    val(label) +
    " · 240 KB</span></div></div>"
  );
}

function handoffHtml() {
  return (
    '<div class="handoff"><div class="handoff__ico">' +
    icon("briefcase") +
    "</div><div><b>" +
    val(UI.pan.sentTo) +
    "</b><span>" +
    val(UI.pan.sentSub) +
    "</span></div></div>"
  );
}

function modalHtml() {
  return (
    '<div class="modal' +
    (DEMO.modal ? " is-open" : "") +
    '"><div class="modal__box"><h4>' +
    val(UI.pan.modalT) +
    "</h4><p>" +
    val(UI.pan.modalP) +
    '</p><textarea class="inp" rows="4" data-fld="rejectText" placeholder="' +
    val(UI.pan.modalPh) +
    '">' +
    esc(DEMO.rejectText) +
    '</textarea><div class="modal__acts">' +
    '<button class="btn btn--ghost" data-act="modalclose">' +
    val(UI.cancel) +
    '</button><button class="btn btn--danger" data-act="rejectok"' +
    (DEMO.rejectText.trim() ? "" : " disabled") +
    ">" +
    val(UI.pan.modalOk) +
    "</button></div></div></div>"
  );
}

/* ==============================================================  MANTIQ  == */

function pushLog(a, k, comment) {
  a.logs.push({ t: T(UI.pan.justNow), who: UI.pan.byStaff, k: k, c: comment });
}

function submitAppeal() {
  const f = DEMO.form;
  const id = 1043;
  const a = {
    id: id,
    utype: f.utype,
    org: f.fio,
    ident: (f.utype === "mchj" ? "INN " : "PINFL ") + f.ident,
    phone: f.phone,
    exec: f.exec,
    address: f.address,
    evAddress: f.evAddress,
    region: f.region,
    start: f.start,
    end: f.end,
    hours: f.hours.map(function (h) {
      return [h[0], h[1]];
    }),
    status: "new",
    created: T(UI.pan.justNow),
    fresh: true,
    logs: [],
  };
  a.logs.push({ t: T(UI.pan.justNow), who: UI.pan.byClient, k: "new", c: UI.pan.logNew });

  DEMO.appeals = DEMO.appeals.filter(function (x) {
    return x.id !== id;
  });
  DEMO.appeals.unshift(a);
  DEMO.newId = id;
  DEMO.submitted = true;
  DEMO.selectedId = id;
}

/* ===========================================================  CHIZISH  ==== */

function renderDemo(root) {
  const kind = root.dataset.demo;
  root.innerHTML =
    kind === "cabinet"
      ? cabinetHtml()
      : panelHtml(kind === "decision" ? "decide" : "view");
}

function renderAllDemos() {
  document.querySelectorAll(".demo-root").forEach(renderDemo);
}

/** Barcha demo slaydlarida ishlaydigan yagona hodisa boshqaruvchisi. */
function initDemoEvents(scope) {
  scope.addEventListener("click", function (e) {
    const el = e.target.closest("[data-act]");
    if (!el || !el.closest(".demo-root")) return;
    const act = el.dataset.act;
    const v = el.dataset.v;
    const f = DEMO.form;

    switch (act) {
      case "utype":
        applySample(v);
        break;
      case "file":
        f[v] = !f[v];
        break;
      case "addhour":
        f.hours.push(["09:00", "13:00"]);
        break;
      case "delhour":
        f.hours.splice(Number(v), 1);
        break;
      case "submit":
        if (!formReady()) return;
        submitAppeal();
        break;
      case "restart":
        DEMO.submitted = false;
        DEMO.appeals = DEMO.appeals.filter(function (x) {
          return x.id !== 1043;
        });
        DEMO.newId = null;
        DEMO.selectedId = null;
        applySample(DEMO.form.utype);
        break;
      case "reset":
        resetDemo();
        break;
      case "filter":
        DEMO.filter = v;
        break;
      case "pick":
        DEMO.selectedId = Number(v);
        DEMO.appeals.forEach(function (a) {
          if (a.id === Number(v)) a.fresh = false;
        });
        break;
      case "take": {
        const a = currentAppeal();
        if (a && a.status === "new") {
          a.status = "reviewing";
          pushLog(a, "reviewing", UI.pan.logTake);
        }
        break;
      }
      case "approve": {
        const a = currentAppeal();
        if (a && a.status === "reviewing") {
          a.status = "contract_sent";
          pushLog(a, "contract_sent", UI.pan.logApprove);
        }
        break;
      }
      case "reject":
        DEMO.modal = true;
        DEMO.rejectText = "";
        break;
      case "modalclose":
        DEMO.modal = false;
        break;
      case "rejectok": {
        const a = currentAppeal();
        if (a && DEMO.rejectText.trim()) {
          a.status = "rejected";
          a.rejectReason = DEMO.rejectText.trim();
          pushLog(a, "rejected", DEMO.rejectText.trim());
          DEMO.modal = false;
        }
        break;
      }
      default:
        return;
    }
    renderAllDemos();
  });

  /* Matn kiritish — qayta chizmasdan holatni yangilaydi (fokus yo'qolmasin) */
  scope.addEventListener("input", function (e) {
    const el = e.target;
    if (!el.closest || !el.closest(".demo-root")) return;

    if (el.dataset.fld === "rejectText") {
      DEMO.rejectText = el.value;
      const ok = el.closest(".modal__box").querySelector('[data-act="rejectok"]');
      if (ok) ok.disabled = !el.value.trim();
      return;
    }
    if (el.dataset.fld) {
      DEMO.form[el.dataset.fld] = el.value;
      syncSubmit(el.closest(".demo-root"));
      return;
    }
    if (el.dataset.hour !== undefined) {
      DEMO.form.hours[Number(el.dataset.hour)][Number(el.dataset.pos)] = el.value;
    }
  });

  scope.addEventListener("change", function (e) {
    const el = e.target;
    if (el.dataset && el.dataset.fld === "region") {
      DEMO.form.region = el.value;
    }
  });
}

function currentAppeal() {
  return DEMO.appeals.find(function (a) {
    return a.id === DEMO.selectedId;
  });
}

/** Faqat "Yuborish" tugmasi va tekshiruv ro'yxatini yangilaydi. */
function syncSubmit(root) {
  if (!root) return;
  const btn = root.querySelector('[data-act="submit"]');
  if (btn) btn.disabled = !formReady();

  const f = DEMO.form;
  const states = [
    true,
    !!(f.fio && f.ident && f.phone && f.address),
    !!(f.evAddress && f.region && f.start && f.end),
    f.hours.length > 0,
    f.letter && f.license,
  ];
  root.querySelectorAll(".check li").forEach(function (li, i) {
    li.classList.toggle("is-ok", !!states[i]);
  });
}

resetDemo();
