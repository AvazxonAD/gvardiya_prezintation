/* ==========================================================================
   Deck navigatsiyasi va boshlash
   ========================================================================== */

const stage = document.getElementById("stage");
const progress = document.getElementById("progress");
const overview = document.getElementById("overview");
const hint = document.getElementById("hint");

let cur = 0;
let slideEls = [];

/* --- Sahna kengligini CSS ga uzatish (barcha o'lchamlar shunga bog'liq) --- */
function syncStage() {
  document.documentElement.style.setProperty("--stage-w", stage.clientWidth + "px");
}

/* --- Slaydlarni qurish ---------------------------------------------------- */
function buildAll() {
  slideEls.forEach(function (el) {
    el.remove();
  });
  slideEls = SLIDES.map(function (s, i) {
    const el = buildSlide(s, i, SLIDES.length);
    stage.appendChild(el);
    return el;
  });
  buildOverview();
  show(cur, 0);
}

function buildOverview() {
  const grid = overview.querySelector(".ov-grid");
  grid.innerHTML = "";
  SLIDES.forEach(function (s, i) {
    const b = document.createElement("button");
    b.className = "ov-item" + (i === cur ? " is-current" : "");
    b.innerHTML =
      '<span class="ov-num">' +
      pad2(i + 1) +
      '</span><span class="ov-title">' +
      esc(T(s.nav)) +
      "</span>";
    b.addEventListener("click", function () {
      closeOverview();
      show(i);
    });
    grid.appendChild(b);
  });
  overview.querySelector("h3").textContent = T(UI.overview);
}

/* --- Ko'rsatish ----------------------------------------------------------- */
function show(i, dir) {
  i = Math.max(0, Math.min(SLIDES.length - 1, i));
  const back = dir === undefined ? i < cur : dir < 0;
  cur = i;

  slideEls.forEach(function (el, n) {
    el.classList.toggle("is-back", back);
    el.classList.toggle("is-active", n === i);
  });

  progress.style.width = ((i + 1) / SLIDES.length) * 100 + "%";
  document.getElementById("prev").disabled = i === 0;
  document.getElementById("next").disabled = i === SLIDES.length - 1;
  history.replaceState(null, "", "#/" + (i + 1));

  overview.querySelectorAll(".ov-item").forEach(function (b, n) {
    b.classList.toggle("is-current", n === i);
  });

  if (i > 0 && hint) hint.classList.add("is-hidden");
}

function go(step) {
  show(cur + step, step);
}

/* --- Overview ------------------------------------------------------------- */
function openOverview() {
  overview.classList.add("is-open");
}
function closeOverview() {
  overview.classList.remove("is-open");
}

/* --- Klaviatura ----------------------------------------------------------- */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    e.preventDefault();
    overview.classList.contains("is-open") ? closeOverview() : openOverview();
    return;
  }

  if (overview.classList.contains("is-open")) {
    if (e.key === "Enter") closeOverview();
    return;
  }

  switch (e.key) {
    case "ArrowRight":
    case "PageDown":
    case " ":
      e.preventDefault();
      go(1);
      break;
    case "ArrowLeft":
    case "PageUp":
      e.preventDefault();
      go(-1);
      break;
    case "Home":
      e.preventDefault();
      show(0, -1);
      break;
    case "End":
      e.preventDefault();
      show(SLIDES.length - 1, 1);
      break;
    case "f":
    case "F":
      e.preventDefault();
      toggleFullscreen();
      break;
    default:
      if (/^[1-9]$/.test(e.key)) {
        e.preventDefault();
        show(Number(e.key) - 1);
      }
  }
});

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().catch(function () {});
}

/* --- Sichqoncha / touch --------------------------------------------------- */
document.getElementById("prev").addEventListener("click", function () {
  go(-1);
});
document.getElementById("next").addEventListener("click", function () {
  go(1);
});
document.getElementById("grid").addEventListener("click", openOverview);
overview.addEventListener("click", function (e) {
  if (e.target === overview) closeOverview();
});

let touchX = null;
stage.addEventListener(
  "touchstart",
  function (e) {
    touchX = e.changedTouches[0].clientX;
  },
  { passive: true }
);
stage.addEventListener(
  "touchend",
  function (e) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
    touchX = null;
  },
  { passive: true }
);

/* --- Til ------------------------------------------------------------------ */
document.querySelectorAll(".lang-btn").forEach(function (b) {
  b.addEventListener("click", function () {
    setLang(b.dataset.lang);
  });
});

function syncLangButtons() {
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("is-on", b.dataset.lang === LANG);
  });
}

window.addEventListener("langchange", function () {
  syncLangButtons();
  buildAll();
  syncHint();
});

/* --- Yordam qatori -------------------------------------------------------- */
function syncHint() {
  if (!hint) return;
  hint.innerHTML =
    "<span><kbd>&larr; &rarr;</kbd>" +
    esc(T(UI.hintKeys)) +
    "</span><span><kbd>Esc</kbd>" +
    esc(T(UI.hintEsc)) +
    "</span><span><kbd>F</kbd>" +
    esc(T(UI.hintF)) +
    "</span>";
}

/* --- Boshlash ------------------------------------------------------------- */
function boot() {
  /* Eksport rejimi (?print) — PDF/PPTX uchun: navigatsiya chromasi va
     animatsiya o'chiriladi, faqat toza slayd qoladi. */
  if (/[?&]print/.test(location.search)) {
    document.body.classList.add("is-print", "no-anim");
  }

  document.documentElement.lang = LANG;
  syncStage();
  syncLangButtons();
  syncHint();

  const m = location.hash.match(/#\/(\d+)/);
  if (m) cur = Math.max(0, Math.min(SLIDES.length - 1, Number(m[1]) - 1));

  buildAll();

  /* Yordam qatori bir necha soniyadan keyin o'zi yo'qoladi */
  setTimeout(function () {
    if (hint) hint.classList.add("is-hidden");
  }, 6000);

  window.addEventListener("resize", syncStage);
  document.addEventListener("fullscreenchange", function () {
    setTimeout(syncStage, 60);
  });
}

boot();
