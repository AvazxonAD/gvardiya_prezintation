/* ==========================================================================
   Slaydlarni chizish — 4 slayd, katta tipografiya
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
  return (
    '<div class="punch"><b>' +
    esc(T(p.b)) +
    "</b><span>" +
    esc(T(p.t)) +
    "</span></div>"
  );
}

/* ------------------------------------------------------------------ turlar */

const BODY = {
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
      '<div class="kicker">' +
      esc(T(s.kicker)) +
      "</div><h1>" +
      T(s.h1) +
      "</h1>" +
      blocks +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* Jarayon — 5 qadam */
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
      '<div class="kicker">' +
      esc(T(s.kicker)) +
      "</div><h1>" +
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

  /* Ishlab turgan tizim — 5 ta modul kartasi (3 + 2 markazda) */
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
      '<div class="kicker">' +
      esc(T(s.kicker)) +
      "</div><h1>" +
      T(s.h1) +
      "</h1>" +
      (s.sub ? '<p class="live-sub">' + esc(T(s.sub)) + "</p>" : "") +
      cards +
      punchHtml(s.punch) +
      "</div>"
    );
  },

  /* Tashqi HTML slaydni to'liq to'ldiruvchi iframe (prezintation slide1/slide2).
     Bu slaydlar o'zining gold-bar va footeriga ega, shuning uchun deck
     slide__rule/slide__foot chizmaydi — buildSlide() da maxsus ishlov beriladi. */
  embed(s) {
    return (
      '<iframe class="embed" src="' +
      esc(s.src) +
      '" loading="eager" title="' +
      esc(T(s.foot)) +
      '"></iframe>'
    );
  },

  /* Rahmat */
  thanks(s) {
    let facts = "";
    if (s.facts && s.facts.length) {
      facts = '<div class="facts">';
      s.facts.forEach((f) => {
        facts +=
          "<div><span>" + esc(T(f[0])) + "</span><strong>" + esc(T(f[1])) + "</strong></div>";
      });
      facts += "</div>";
    }

    return (
      '<div class="thanks"><div class="big__glow"></div>' +
      "<h1>" +
      esc(T(s.h1)) +
      '</h1><p class="thanks__lead">' +
      esc(T(s.lead)) +
      "</p>" +
      facts +
      '<div class="punch punch--center"><b>' +
      esc(T(s.next.b)) +
      "</b><span>" +
      esc(T(s.next.t)) +
      "</span></div></div>"
    );
  },
};

/** Bitta slayd elementini quradi. */
function buildSlide(s, i, total) {
  const el = document.createElement("section");
  el.className = "slide";
  el.dataset.type = s.type;

  /* embed — to'liq to'ldiruvchi iframe, deck chromasiz (slayd o'zining
     gold-bar va footeriga ega). */
  if (s.type === "embed") {
    el.innerHTML = BODY.embed(s);
    return el;
  }

  el.innerHTML =
    '<div class="slide__rule"></div>' +
    (BODY[s.type] ? BODY[s.type](s) : "") +
    footHtml(s, i, total);
  return el;
}
