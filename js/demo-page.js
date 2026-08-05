/* ==========================================================================
   demo.html — interaktiv prototip (taqdimot slaydlaridan alohida)
   ========================================================================== */

const TABS = [
  { k: "cabinet", n: ["1. Buyurtmachi kabineti", "1. Кабинет заказчика"] },
  { k: "panel", n: ["2. JSTB paneli", "2. Панель ООП"] },
  { k: "decision", n: ["3. Qaror va uzatish", "3. Решение и передача"] },
];

const stage = document.getElementById("stage");
const root = document.getElementById("demoroot");
const tabsEl = document.getElementById("tabs");

function syncStage() {
  document.documentElement.style.setProperty("--stage-w", stage.clientWidth + "px");
}

function renderTabs() {
  tabsEl.innerHTML = "";
  TABS.forEach(function (t) {
    const b = document.createElement("button");
    b.className = "demotab" + (root.dataset.demo === t.k ? " is-on" : "");
    b.textContent = T(t.n);
    b.addEventListener("click", function () {
      root.dataset.demo = t.k;
      renderTabs();
      renderDemo(root);
    });
    tabsEl.appendChild(b);
  });
}

function syncLangButtons() {
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("is-on", b.dataset.lang === LANG);
  });
}

document.querySelectorAll(".lang-btn").forEach(function (b) {
  b.addEventListener("click", function () {
    setLang(b.dataset.lang);
  });
});

window.addEventListener("langchange", function () {
  syncLangButtons();
  renderTabs();
  renderDemo(root);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && DEMO.modal) {
    DEMO.modal = false;
    renderDemo(root);
  }
});

/* Boshlash */
document.documentElement.lang = LANG;
syncStage();
syncLangButtons();
renderTabs();
renderDemo(root);
initDemoEvents(stage);
window.addEventListener("resize", syncStage);
