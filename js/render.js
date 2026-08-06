/* ==========================================================================
   Slaydlarni chizish
   ========================================================================== */

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function pad2(n) {
  return n < 10 ? "0" + n : String(n);
}

/** appeal_types uchun rangli yorliq (demo sahifasida ishlatiladi) */
function pill(status) {
  return '<span class="pill pill--' + status + '">' + esc(T(UI.st[status])) + "</span>";
}

function footHtml(s, i, total) {
  return (
    '<div class="slide__foot"><span class="slide__foot-l">' +
    esc(T(DECK_NAME)) +
    " — " +
    esc(T(s.foot)) +
    '</span><span class="slide__foot-r">' +
    pad2(i + 1) +
    " / " +
    pad2(total) +
    "</span></div>"
  );
}

function punchHtml(p) {
  return '<div class="punch"><b>' + esc(T(p.b)) + "</b><span>" + esc(T(p.t)) + "</span></div>";
}

function kickerHtml(s) {
  return '<div class="kicker">' + esc(T(s.kicker)) + "</div>";
}

/* ------------------------------------------------------------------ turlar */

const BODY = {
  /* 01 — sarlavha, maqsad va uchta tezkor raqam */
  title(s) {
    /* Raqamlar UZ_REGIONS dan hisoblanadi — dashboard bilan doim mos keladi */
    const val = {
      regions: String(UZ_REGIONS.length),
      contracts: fmtCount(PLAT_TOTAL.jamiN),
      sum: fmtMln(PLAT_TOTAL.jamiS),
    };

    let facts = '<div class="tfacts">';
    s.facts.forEach((f) => {
      facts +=
        '<div class="tfact"><b>' + esc(val[f.k] || "") + "</b><span>" + esc(T(f.t)) + "</span></div>";
    });
    facts += "</div>";

    return (
      '<div class="title"><div class="big__glow"></div>' +
      '<div class="title__mark">' +
      kickerHtml(s) +
      "<h1>" +
      esc(T(s.h1)) +
      '</h1><p class="title__sub">' +
      esc(T(s.sub)) +
      '</p><p class="title__lead">' +
      esc(T(s.lead)) +
      "</p>" +
      facts +
      "</div>" +
      '<div class="goal goal--wide"><span>' +
      esc(T(s.goal.t)) +
      "</span><p>" +
      esc(T(s.goal.p)) +
      "</p></div>" +
      "</div>"
    );
  },

  /* 02 — beshta muammo kartochkasi (3 + 2) va natija bandi */
  problems(s) {
    let cards = '<div class="pcards">';
    s.cards.forEach((c, i) => {
      cards +=
        '<div class="pcard"><div class="pcard__top"><span class="pcard__ico">' +
        icon(c.i) +
        "</span><h3>" +
        esc(T(c.h)) +
        '</h3><span class="pcard__n">' +
        pad2(i + 1) +
        "</span></div><p>" +
        esc(T(c.p)) +
        "</p></div>";
    });
    cards += "</div>";

    return (
      '<div class="big big--bad"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      "</h1>" +
      cards +
      '<div class="result"><span class="result__ico">' +
      icon("alert-triangle") +
      "</span><p><b>" +
      esc(T(s.result.b)) +
      "</b> " +
      esc(T(s.result.t)) +
      "</p></div>" +
      "</div>"
    );
  },

  /* Muammo va Yechim — bir xil karkas, rangi bilan farq qiladi */
  big(s) {
    let blocks = '<div class="blocks">';
    s.blocks.forEach((b, i) => {
      blocks +=
        '<div class="block"><div class="block__top"><span class="block__ico">' +
        icon(b.i) +
        '</span><span class="block__tag">' +
        esc(T(b.tag)) +
        '</span><span class="block__n">' +
        pad2(i + 1) +
        "</span></div><h3>" +
        esc(T(b.h)) +
        "</h3><p>" +
        esc(T(b.p)) +
        "</p></div>";
    });
    blocks += "</div>";

    return (
      '<div class="big big--' +
      s.tone +
      '"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      "</h1>" +
      blocks +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* 09 — jarayon, to'rt qadam */
  process(s) {
    let steps = '<div class="steps">';
    s.steps.forEach((st, i) => {
      if (i) steps += '<div class="steps__link">' + icon("chevron-right") + "</div>";
      steps +=
        '<div class="step"><span class="step__n">' +
        (i + 1) +
        '</span><span class="step__ico">' +
        icon(st.i) +
        '</span><span class="step__who">' +
        esc(T(st.who)) +
        "</span><h3>" +
        esc(T(st.h)) +
        "</h3><p>" +
        esc(T(st.p)) +
        "</p></div>";
    });
    steps += "</div>";

    return (
      '<div class="big big--good"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      "</h1>" +
      steps +
      '<div class="track">' +
      icon("eye") +
      "<span>" +
      esc(T(s.track)) +
      "</span></div>" +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* 03 — ishlab turgan tizim, 5 ta modul kartasi (3 + 2 markazda) */
  live(s) {
    let cards = '<div class="live-grid">';
    s.items.forEach((it) => {
      cards +=
        '<div class="live-card"><span class="live-card__ico">' +
        icon(it.i) +
        '</span><div class="live-card__body"><h3>' +
        esc(T(it.h)) +
        "</h3><p>" +
        esc(T(it.p)) +
        "</p></div></div>";
    });
    cards += "</div>";

    return (
      '<div class="big big--good"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      "</h1>" +
      (s.sub ? '<p class="live-sub">' + esc(T(s.sub)) + "</p>" : "") +
      cards +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* 04 — jonli monitoring paneli (js/platform.js) */
  platform(s) {
    return platformHtml(s);
  },

  /* 05 — mablag' taqsimoti: bitta manba, to'rt yo'nalish.
     IIB va FVV `grouped` bilan belgilangan — ular hamkorlar uchun ajratilgan
     40% ni bo'lishadi, shuning uchun alohida foiz ko'rsatilmaydi. */
  payout(s) {
    let dest = '<div class="pay__dest">';
    s.dest.forEach((d, i) => {
      const prevGrouped = i > 0 && s.dest[i - 1].grouped;
      if (d.grouped && !prevGrouped) dest += '<div class="pay__group">';

      dest +=
        '<div class="pay__card' +
        (d.isNew ? " is-new" : "") +
        '">' +
        (d.isNew ? '<span class="pay__badge">' + esc(T(s.badge)) + "</span>" : "") +
        '<span class="pay__ico">' +
        icon(d.i) +
        "</span><h3>" +
        esc(T(d.h)) +
        "</h3>" +
        (d.v ? '<span class="pay__v">' + esc(d.v) + "</span>" : "") +
        "<p>" +
        esc(T(d.p)) +
        "</p></div>";

      const nextGrouped = i + 1 < s.dest.length && s.dest[i + 1].grouped;
      if (d.grouped && !nextGrouped) {
        dest += '<span class="pay__group-note">' + esc(T(s.groupNote)) + "</span></div>";
      }
    });
    dest += "</div>";

    return (
      '<div class="big big--good pay"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      '</h1><p class="pay__lead">' +
      esc(T(s.lead)) +
      "</p>" +
      '<div class="pay__row"><div class="pay__src"><span class="pay__ico">' +
      icon(s.src.i) +
      "</span><h3>" +
      esc(T(s.src.t)) +
      "</h3><p>" +
      esc(T(s.src.p)) +
      '</p></div><span class="pay__arrow">' +
      icon("chevron-right") +
      "</span>" +
      dest +
      "</div>" +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* 06 — ilgari / endi: ikki yo'nalishli taqqoslash */
  flows(s) {
    let cols = '<div class="flw__cols">';
    s.cols.forEach((c) => {
      let steps = "";
      c.steps.forEach((st, i) => {
        if (i) steps += '<span class="flw__link">' + icon("arrow-down") + "</span>";
        steps +=
          '<div class="flw__step"><span class="flw__ico">' +
          icon(st.i) +
          "</span><div><h4>" +
          esc(T(st.h)) +
          "</h4><p>" +
          esc(T(st.p)) +
          "</p></div></div>";
      });

      cols +=
        '<div class="flw__col flw__col--' +
        c.tone +
        '"><div class="flw__head"><span class="flw__tag">' +
        esc(T(c.tag)) +
        "</span>" +
        (c.tone === "new" ? '<span class="pay__badge">' + esc(T(s.badge)) + "</span>" : "") +
        "</div><h3>" +
        esc(T(c.h)) +
        "</h3>" +
        steps +
        "</div>";
    });
    cols += "</div>";

    return (
      '<div class="big big--good flw"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      '</h1><p class="pay__lead">' +
      esc(T(s.lead)) +
      "</p>" +
      cols +
      '<div class="track">' +
      icon("arrow-right-left") +
      "<span>" +
      esc(T(s.note)) +
      "</span></div>" +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* 10 — yo'l xaritasi va yakuniy so'z */
  roadmap(s) {
    let stages = '<div class="rm">';
    s.stages.forEach((st, i) => {
      if (i) stages += '<span class="rm__link">' + icon("chevron-right") + "</span>";
      stages +=
        '<div class="rm__item rm__item--' +
        st.s +
        '"><span class="rm__ico">' +
        icon(st.i) +
        '</span><span class="rm__tag">' +
        esc(T(st.tag)) +
        "</span><h3>" +
        esc(T(st.h)) +
        "</h3><p>" +
        esc(T(st.p)) +
        "</p></div>";
    });
    stages += "</div>";

    return (
      '<div class="big big--good rmw"><div class="big__glow"></div>' +
      kickerHtml(s) +
      "<h1>" +
      T(s.h1) +
      "</h1>" +
      stages +
      '<div class="rm__thanks"><b>' +
      esc(T(s.thanksT)) +
      "</b><span>" +
      esc(T(s.thanksP)) +
      "</span></div>" +
      "</div>"
    );
  },
};

/** Bitta slayd elementini quradi. */
function buildSlide(s, i, total) {
  const el = document.createElement("section");
  el.className = "slide";
  el.dataset.type = s.type;

  el.innerHTML =
    '<div class="slide__rule"></div>' +
    (BODY[s.type] ? BODY[s.type](s) : "") +
    footHtml(s, i, total);

  /* Interaktiv slaydlar HTML qo'yilgandan keyin bog'lanadi */
  if (s.type === "platform") initPlatform(el, s);

  return el;
}
