/* ==========================================================================
   02 — Platforma slaydi (jonli monitoring paneli)

   slide2.html ning deck ichidagi vorisi. Farqlari:
     · Tailwind/Chart.js CDN o'rniga tokenlar va inline SVG — internet kerak emas
     · Kartalardagi jami raqamlar UZ_REGIONS dan HISOBLANADI, qo'lda
       yozilmaydi — shuning uchun xarita bilan hech qachon ziddiyat chiqmaydi
     · Doughnut canvas emas, SVG — animatsiya kutmaydi, eksportda toza chiqadi
   ========================================================================== */

/* --- Yig'indilar: yagona haqiqat manbai UZ_REGIONS ------------------------ */
const PLAT_TOTAL = UZ_REGIONS.reduce(
  function (a, r) {
    a.jamiN += r.jamiN;
    a.jamiS += r.jamiS;
    a.tolabN += r.tolabN;
    a.tolabS += r.tolabS;
    a.qarzN += r.qarzN;
    a.qarzS += r.qarzS;
    a.xodim += r.xodim;
    return a;
  },
  { jamiN: 0, jamiS: 0, tolabN: 0, tolabS: 0, qarzN: 0, qarzS: 0, xodim: 0 }
);

/* Kelib tushgan pulning taqsimoti — ulushlar yig'indisi 100% */
const PLAT_SHARES = [0.25, 0.4, 0.35];

/* --- Formatlash ----------------------------------------------------------- */
function fmtMln(v) {
  if (v >= 1000) return (v / 1000).toFixed(1).replace(".", ",") + (LANG === "uz" ? " mlrd" : " млрд");
  return Math.round(v) + (LANG === "uz" ? " mln" : " млн");
}

function fmtCount(v) {
  return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function plStr(uz, ru) {
  return LANG === "uz" ? uz : ru;
}

/* --- Doughnut (SVG) -------------------------------------------------------
   stroke-dasharray bilan chiziladi: canvas ham, kutubxona ham kerak emas. */
const DONUT_R = 42;
const DONUT_C = 2 * Math.PI * DONUT_R;

function donutSvg(shares) {
  let off = 0;
  let segs = "";
  shares.forEach(function (p, i) {
    const len = p * DONUT_C;
    segs +=
      '<circle class="donut__seg donut__seg--' +
      i +
      '" cx="50" cy="50" r="' +
      DONUT_R +
      '" fill="none" stroke-width="13" stroke-dasharray="' +
      len.toFixed(2) +
      " " +
      (DONUT_C - len).toFixed(2) +
      '" stroke-dashoffset="' +
      (-off).toFixed(2) +
      '" transform="rotate(-90 50 50)"/>';
    off += len;
  });
  return '<svg class="donut__svg" viewBox="0 0 100 100">' + segs + "</svg>";
}

/* --- Xarita --------------------------------------------------------------- */
function mapSvg() {
  let paths = "";
  let labels = "";

  UZ_REGIONS.forEach(function (r) {
    paths += '<path class="uz-region" data-id="' + r.id + '" d="' + r.d + '"/>';
    labels +=
      '<text class="uz-label" x="' +
      r.x +
      '" y="' +
      r.y +
      '" text-anchor="middle" dominant-baseline="central" font-size="' +
      r.fs +
      '">' +
      esc(T(r.lbl)) +
      "</text>";
  });

  /* viewBox mamlakat konturiga qirqilgan (asl 0 0 800 500 da chap va tepada
     katta bo'sh joy qolar edi) — shu sabab xarita kartani to'liq egallaydi. */
  return (
    '<svg class="uz-map" viewBox="42 14 716 472" preserveAspectRatio="xMidYMid meet">' +
    '<ellipse cx="108" cy="62" rx="38" ry="22" class="uz-aral"/>' +
    '<text x="108" y="66" text-anchor="middle" font-size="7" class="uz-aral-t">' +
    plStr("Orol dengizi", "Аральское море") +
    "</text>" +
    '<g class="uz-shapes">' +
    paths +
    "</g><g>" +
    labels +
    "</g></svg>"
  );
}

/* --- KPI kartalari -------------------------------------------------------- */
function kpiCards(s) {
  const src = [
    { k: "jami", n: PLAT_TOTAL.jamiN, v: PLAT_TOTAL.jamiS },
    { k: "tolab", n: PLAT_TOTAL.tolabN, v: PLAT_TOTAL.tolabS },
    { k: "qarz", n: PLAT_TOTAL.qarzN, v: PLAT_TOTAL.qarzS },
  ];

  let out = "";
  src.forEach(function (c, i) {
    out +=
      '<div class="kpi kpi--' +
      c.k +
      '"><p class="kpi__t">' +
      esc(T(s.kpi[i].t)) +
      '</p><div class="kpi__row">' +
      '<div><span class="kpi__lbl">' +
      esc(T(s.kpiSoni)) +
      '</span><b class="kpi__n" data-kpi="' +
      c.k +
      'N">' +
      fmtCount(c.n) +
      "</b></div>" +
      '<i class="kpi__sep"></i>' +
      '<div><span class="kpi__lbl">' +
      esc(T(s.kpiSumma)) +
      '</span><b class="kpi__v" data-kpi="' +
      c.k +
      'S">' +
      fmtMln(c.v) +
      "</b></div>" +
      '<button class="mbtn" data-open="' +
      c.k +
      '">' +
      esc(T(s.more)) +
      icon("chevron-right") +
      "</button>" +
      "</div></div>";
  });
  return '<div class="plat__kpi">' + out + "</div>";
}

/* --- Avtomatlashtirish oqimi ---------------------------------------------- */
function flowRow(s) {
  let out = "";
  s.flow.forEach(function (f, i) {
    if (i) out += '<span class="flow__link">' + icon("chevron-right") + "</span>";
    out +=
      '<div class="flow__item' +
      (f.on ? " is-on" : "") +
      '"><span class="flow__ico">' +
      icon(f.i) +
      '</span><div class="flow__txt"><span>' +
      esc(T(f.s)) +
      "</span><b>" +
      esc(T(f.h)) +
      "</b></div><span class=\"flow__v\">" +
      f.v +
      "</span></div>";
  });
  return (
    '<div class="card flow"><h3 class="card__t">' +
    esc(T(s.flowT)) +
    '</h3><div class="flow__row">' +
    out +
    "</div></div>"
  );
}

/* ==========================================================  MODALLAR  ==== */

function modalShell(key, title, body, wide) {
  return (
    '<div class="pm' +
    (wide ? " pm--wide" : "") +
    '" data-modal="' +
    key +
    '"><div class="pm__box"><div class="pm__head"><h4>' +
    esc(title) +
    '</h4><button class="pm__x" data-close aria-label="' +
    plStr("Yopish", "Закрыть") +
    '">' +
    icon("x") +
    '</button></div><div class="pm__body">' +
    body +
    "</div></div></div>"
  );
}

/* Shartnomalar jadvali (jami / tolab / qarz) */
function contractsTable(s, key) {
  let head = "";
  s.modalC.th.forEach(function (h) {
    head += "<th>" + esc(T(h)) + "</th>";
  });

  let rows = "";
  (PLAT_CONTRACTS[key] || []).forEach(function (r, i) {
    rows +=
      "<tr><td class='n'>" +
      (i + 1) +
      "</td><td class='mono accent'>" +
      esc(r.raqam) +
      "</td><td class='mono'>" +
      esc(r.sana) +
      "</td><td class='b'>" +
      esc(r.bajaruvchi) +
      "</td><td>" +
      esc(r.buyurtmachi) +
      "</td><td class='mono'>" +
      esc(r.soat) +
      "</td><td class='mono ok'>" +
      esc(r.summa.replace(/,/g, " ")) +
      plStr(" so‘m", " сум") +
      "</td><td class='c b'>" +
      r.xodim +
      "</td><td class='dim'>" +
      esc(r.manzil) +
      "</td></tr>";
  });

  return '<table class="pm__tbl"><thead><tr>' + head + "</tr></thead><tbody>" + rows + "</tbody></table>";
}

/* Qizil chegaradagi xodimlar jadvali */
function staffTable(s) {
  let head = "";
  s.modalS.th.forEach(function (h) {
    head += "<th>" + esc(T(h)) + "</th>";
  });

  let rows = "";
  PLAT_STAFF.forEach(function (r, i) {
    const pul = r.soat * PLAT_HOURLY * PLAT_SHARE_STAFF;
    rows +=
      "<tr><td class='n'>" +
      (i + 1) +
      "</td><td class='b'>" +
      esc(r.ism) +
      "</td><td>" +
      esc(r.hudud) +
      "</td><td class='mono accent'>" +
      esc(r.batalon) +
      "</td><td>" +
      esc(r.lavozim) +
      "</td><td class='mono ok'>" +
      fmtCount(pul) +
      plStr(" so‘m", " сум") +
      "</td><td class='c b'>" +
      r.tadbir +
      "</td><td class='c mono'>" +
      r.soat +
      "</td><td class='c mono'>" +
      r.kun +
      "</td><td class='c'><span class='badge'>+" +
      r.farq +
      "%</span></td></tr>";
  });

  return '<table class="pm__tbl"><thead><tr>' + head + "</tr></thead><tbody>" + rows + "</tbody></table>";
}

/* Viloyatlar bo'yicha ustunli diagramma — SVG, kutubxonasiz.
   Har bir ustun = shu viloyatga kelib tushgan summa, uch ulushga bo'lingan. */
function regionChart(s) {
  const W = 1000;
  const H = 400;
  const L = 78; /* chap chekinish — y o'qi yorliqlari */
  const R = 16;
  const TOP = 18;
  const BOT = 96; /* pastki chekinish — viloyat nomlari */
  const plotW = W - L - R;
  const plotH = H - TOP - BOT;

  const max = Math.max.apply(
    null,
    UZ_REGIONS.map(function (r) {
      return r.tolabS;
    })
  );
  /* Yuqori chegarani 500 mln ga yaxlitlaymiz */
  const top = Math.ceil(max / 500) * 500;
  const step = top / 4;

  const y = function (v) {
    return TOP + plotH - (v / top) * plotH;
  };

  /* To'r va y o'qi */
  let grid = "";
  for (let i = 0; i <= 4; i++) {
    const v = i * step;
    const yy = y(v);
    grid +=
      '<line class="rc__grid" x1="' + L + '" y1="' + yy + '" x2="' + (W - R) + '" y2="' + yy + '"/>' +
      '<text class="rc__yl" x="' + (L - 10) + '" y="' + (yy + 4) + '" text-anchor="end">' +
      fmtMln(v) +
      "</text>";
  }

  /* Ustunlar */
  const slot = plotW / UZ_REGIONS.length;
  const bw = slot * 0.56;
  let bars = "";

  UZ_REGIONS.forEach(function (r, i) {
    const cx = L + slot * i + slot / 2;
    const x = cx - bw / 2;
    let acc = 0;

    PLAT_SHARES.forEach(function (p, k) {
      const v = r.tolabS * p;
      const y0 = y(acc + v);
      const h = y(acc) - y0;
      bars +=
        '<rect class="rc__b rc__b--' + k + '" x="' + x.toFixed(1) + '" y="' + y0.toFixed(1) +
        '" width="' + bw.toFixed(1) + '" height="' + Math.max(0, h).toFixed(1) + '"/>';
      acc += v;
    });

    /* Ustun tepasidagi jami */
    bars +=
      '<text class="rc__v" x="' + cx.toFixed(1) + '" y="' + (y(r.tolabS) - 7).toFixed(1) +
      '" text-anchor="middle">' + fmtMln(r.tolabS) + "</text>";

    /* Viloyat nomi — burchak ostida */
    bars +=
      '<text class="rc__xl" x="' + cx.toFixed(1) + '" y="' + (TOP + plotH + 14) +
      '" text-anchor="end" transform="rotate(-38 ' + cx.toFixed(1) + " " + (TOP + plotH + 14) + ')">' +
      esc(T(r.lbl)) + "</text>";
  });

  /* Izoh */
  let legend = '<div class="rc__lg">';
  s.shares.forEach(function (lbl, i) {
    legend += '<span><i class="lg__sw lg__sw--' + i + '"></i>' + esc(T(lbl)) + "</span>";
  });
  legend += "</div>";

  return (
    legend +
    '<svg class="rc" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="xMidYMid meet">' +
    grid +
    '<line class="rc__axis" x1="' + L + '" y1="' + (TOP + plotH) + '" x2="' + (W - R) + '" y2="' + (TOP + plotH) + '"/>' +
    bars +
    "</svg>" +
    '<p class="rc__yt">' + esc(T(s.modalR.y)) + "</p>"
  );
}

function platformModals(s) {
  return (
    modalShell("jami", T(s.modalC.t.jami), contractsTable(s, "jami"), true) +
    modalShell("tolab", T(s.modalC.t.tolab), contractsTable(s, "tolab"), true) +
    modalShell("qarz", T(s.modalC.t.qarz), contractsTable(s, "qarz"), true) +
    modalShell("staff", T(s.modalS.t), staffTable(s), true) +
    modalShell("region", T(s.modalR.t), regionChart(s), true)
  );
}

/* --- Slayd HTML ----------------------------------------------------------- */
function platformHtml(s) {
  const d = new Date();
  const date =
    String(d.getDate()).padStart(2, "0") +
    "." +
    String(d.getMonth() + 1).padStart(2, "0") +
    "." +
    d.getFullYear();

  /* Doughnut yonidagi izohlar */
  let legend = "";
  s.shares.forEach(function (lbl, i) {
    legend +=
      '<div class="lg"><i class="lg__sw lg__sw--' +
      i +
      '"></i><span>' +
      esc(T(lbl)) +
      "</span><b data-share=\"" +
      i +
      '">' +
      fmtMln(PLAT_TOTAL.tolabS * PLAT_SHARES[i]) +
      "</b></div>";
  });

  return (
    '<div class="plat">' +
    /* Sarlavha */
    '<div class="plat__head"><div><h1 class="plat__h1">' +
    esc(T(s.title)) +
    '</h1><p class="plat__live"><i></i>' +
    esc(T(s.live)) +
    '</p></div><span class="plat__date">' +
    icon("calendar") +
    date +
    "</span></div>" +
    /* KPI */
    kpiCards(s) +
    /* Asosiy: xarita + o'ng panel */
    '<div class="plat__main">' +
    '<div class="card plat__map"><div class="card__head"><h3 class="card__t">' +
    esc(T(s.mapT)) +
    '</h3><span class="plat__region" data-region-title></span></div>' +
    '<p class="card__sub">' +
    esc(T(s.mapSub)) +
    "</p>" +
    mapSvg() +
    '<div class="uz-tip" data-tip></div></div>' +
    '<div class="plat__side">' +
    /* Doughnut */
    '<div class="card plat__donut"><div class="card__head"><h3 class="card__t">' +
    esc(T(s.donutT)) +
    '</h3><button class="mbtn" data-open="region">' +
    esc(T(s.more)) +
    icon("chevron-right") +
    '</button></div><div class="donut">' +
    donutSvg(PLAT_SHARES) +
    '<div class="donut__c"><span>' +
    esc(T(s.donutCenter)) +
    "</span><b data-donut-total>" +
    fmtMln(PLAT_TOTAL.tolabS) +
    "</b></div></div>" +
    '<div class="lgs">' +
    legend +
    "</div></div>" +
    /* Qizil chegara */
    '<div class="card plat__red"><div class="red__top"><span class="red__ico">' +
    icon("alert-triangle") +
    '</span><span class="red__pulse"></span></div>' +
    '<h3 class="card__t">' +
    esc(T(s.redT)) +
    '</h3><div class="red__row"><b data-red-count>' +
    PLAT_TOTAL.xodim +
    "</b><span>" +
    esc(T(s.redSub)) +
    '</span></div><p class="card__sub">' +
    esc(T(s.redNote)) +
    '</p><button class="mbtn mbtn--wide" data-open="staff">' +
    icon("users") +
    esc(T(s.showList)) +
    "</button></div>" +
    "</div></div>" +
    /* Oqim */
    flowRow(s) +
    /* Ko'rsatma */
    '<p class="plat__hint">' +
    icon("info") +
    esc(T(s.hint)) +
    "</p>" +
    /* Batafsil oynalari */
    platformModals(s) +
    "</div>"
  );
}

/* --- Interaktivlik --------------------------------------------------------
   Slayd har til almashganda qaytadan quriladi, shuning uchun hodisalar
   har safar yangi elementga bog'lanadi. */
function initPlatform(el, s) {
  const byId = {};
  UZ_REGIONS.forEach(function (r) {
    byId[r.id] = r;
  });

  const tip = el.querySelector("[data-tip]");
  const regionTitle = el.querySelector("[data-region-title]");
  const shapes = el.querySelectorAll(".uz-region");
  let active = null;

  function setNums(o) {
    const set = function (key, v) {
      const n = el.querySelector('[data-kpi="' + key + '"]');
      if (n) n.textContent = v;
    };
    set("jamiN", fmtCount(o.jamiN));
    set("jamiS", fmtMln(o.jamiS));
    set("tolabN", fmtCount(o.tolabN));
    set("tolabS", fmtMln(o.tolabS));
    set("qarzN", fmtCount(o.qarzN));
    set("qarzS", fmtMln(o.qarzS));

    const red = el.querySelector("[data-red-count]");
    if (red) red.textContent = o.xodim;

    const tot = el.querySelector("[data-donut-total]");
    if (tot) tot.textContent = fmtMln(o.tolabS);

    PLAT_SHARES.forEach(function (p, i) {
      const b = el.querySelector('[data-share="' + i + '"]');
      if (b) b.textContent = fmtMln(o.tolabS * p);
    });
  }

  function select(r) {
    active = r;
    shapes.forEach(function (p) {
      p.classList.toggle("is-active", !!r && p.dataset.id === r.id);
    });
    regionTitle.textContent = r ? T(r.n) : "";
    regionTitle.classList.toggle("is-on", !!r);
    setNums(r || PLAT_TOTAL);
  }

  shapes.forEach(function (p) {
    const r = byId[p.dataset.id];
    if (!r) return;

    p.addEventListener("click", function () {
      select(active && active.id === r.id ? null : r);
    });

    p.addEventListener("mousemove", function (e) {
      tip.innerHTML =
        "<h4>" +
        esc(T(r.n)) +
        "</h4>" +
        tipRow(plStr("Jami", "Всего"), r.jamiN, r.jamiS, "") +
        tipRow(plStr("To‘langan", "Оплачено"), r.tolabN, r.tolabS, "is-ok") +
        tipRow(plStr("Qarzdorlik", "Задолженность"), r.qarzN, r.qarzS, "is-bad");

      /* Sahna koordinatalariga o'tkazamiz — slayd o'lchami ekranga qarab
         o'zgargani uchun getBoundingClientRect ishlatiladi. */
      const box = el.getBoundingClientRect();
      const w = tip.offsetWidth;
      const h = tip.offsetHeight;
      let x = e.clientX - box.left + 16;
      let y = e.clientY - box.top - h - 12;
      if (x + w > box.width - 8) x = e.clientX - box.left - w - 16;
      if (y < 8) y = e.clientY - box.top + 20;
      tip.style.left = x + "px";
      tip.style.top = y + "px";
      tip.classList.add("is-on");
    });

    p.addEventListener("mouseleave", function () {
      tip.classList.remove("is-on");
    });
  });

  /* --- «Batafsil» oynalari ---
     Modal ochiq bo'lganda deck'ning ←/→ tugmalari slaydni almashtirmasligi
     uchun keydown bu yerda ushlab qolinadi (capture bosqichida). */
  const modals = {};
  el.querySelectorAll("[data-modal]").forEach(function (m) {
    modals[m.dataset.modal] = m;
  });

  function closeModals() {
    Object.keys(modals).forEach(function (k) {
      modals[k].classList.remove("is-open");
    });
    el.classList.remove("has-modal");
  }

  function openModal(k) {
    if (!modals[k]) return;
    closeModals();
    modals[k].classList.add("is-open");
    el.classList.add("has-modal");
  }

  el.querySelectorAll("[data-open]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      openModal(b.dataset.open);
    });
  });

  el.querySelectorAll("[data-close]").forEach(function (b) {
    b.addEventListener("click", closeModals);
  });

  /* Fon bosilganda yopiladi */
  Object.keys(modals).forEach(function (k) {
    modals[k].addEventListener("click", function (e) {
      if (e.target === modals[k]) closeModals();
    });
  });

  document.addEventListener(
    "keydown",
    function (e) {
      if (!el.classList.contains("has-modal")) return;
      if (!el.classList.contains("is-active")) return;
      if (e.key === "Escape" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        closeModals();
      }
    },
    true
  );

  function tipRow(label, n, v, cls) {
    return (
      '<div class="uz-tip__r"><span>' +
      esc(label) +
      "</span><b" +
      (cls ? ' class="' + cls + '"' : "") +
      ">" +
      fmtCount(n) +
      " · " +
      fmtMln(v) +
      "</b></div>"
    );
  }

  select(null);
}
