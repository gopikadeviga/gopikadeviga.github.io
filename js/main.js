/**
 * ============================================================
 *  RENDER ENGINE
 * ============================================================
 *  Reads PORTFOLIO_DATA (from content.js) and builds the page.
 *  You generally don't need to edit this file — update
 *  js/content.js instead. Only touch this if you're changing
 *  layout/behavior, not text.
 * ============================================================
 */

(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not found — make sure content.js is loaded before main.js");
    return;
  }

  // ---------- SIDEBAR ----------
  document.getElementById("profileName").textContent = data.profile.name;
  document.getElementById("footerName").textContent = data.footer.copyrightLine;

  const avatarEl = document.getElementById("avatar");
  if (data.profile.avatarImage) {
    avatarEl.innerHTML = `<img src="${data.profile.avatarImage}" alt="${escapeHtml(data.profile.name)}">`;
  } else {
    avatarEl.textContent = data.profile.initials;
  }

  const s = data.profile.status;
  document.getElementById("statusAvailability").textContent = s.availability;
  document.getElementById("statusLocation").textContent = s.location;
  document.getElementById("statusNotice").textContent = s.noticePeriod;
  document.getElementById("statusResponse").innerHTML = s.responseTime;

  const resumeBtn = document.getElementById("downloadCvBtn");
  resumeBtn.href = data.profile.resumePath;
  resumeBtn.setAttribute("download", "");

  const emailBtn = document.getElementById("emailBtn");
  emailBtn.href = `mailto:${data.profile.email}`;
  emailBtn.textContent = data.profile.email;

  document.getElementById("linkedinLink").href = data.profile.linkedin;
  document.getElementById("githubLink").href = data.profile.github;

  // Role rotator
  const roleEl = document.getElementById("roleRotator");
  const roles = data.profile.roles && data.profile.roles.length ? data.profile.roles : [""];
  let roleIndex = 0;
  roleEl.innerHTML = `<span>${escapeHtml(roles[0])}</span>`;
  if (roles.length > 1 && !prefersReducedMotion()) {
    setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleEl.style.opacity = 0;
      setTimeout(() => {
        roleEl.innerHTML = `<span>${escapeHtml(roles[roleIndex])}</span>`;
        roleEl.style.opacity = 1;
      }, 200);
    }, 3200);
  }

  // ---------- HERO ----------
  document.getElementById("heroKicker").textContent = data.hero.kicker;
  document.getElementById("heroHeadline").textContent = data.hero.headline;
  document.getElementById("heroLede").textContent = data.hero.lede;

  // ---------- SKILLS STATUS BOARD ----------
  const board = document.getElementById("skillsBoard");
  board.innerHTML = data.skills.map(skill => `
    <div class="service-row">
      <div class="service-name">${escapeHtml(skill.name)}</div>
      <div class="service-proof">${escapeHtml(skill.proof)}</div>
      <div class="service-status">● operational</div>
    </div>
  `).join("");

  // ---------- PROJECTS (standalone section) ----------
  const projectsGrid = document.getElementById("projectsGrid");
  if (data.projects.length) {
    projectsGrid.innerHTML = data.projects.map(p => renderCard(p, "🚀 Project")).join("");
  } else {
    projectsGrid.innerHTML = `<div class="empty-state">No projects yet — add entries to js/content.js under "projects"</div>`;
  }
  document.getElementById("countProjects").textContent = data.projects.length;

  // ---------- CERTIFICATIONS (standalone section) ----------
  const certsGrid = document.getElementById("certsGrid");
  if (data.certifications.length) {
    certsGrid.innerHTML = data.certifications.map(c => renderCard(c, "🏆 Certification", true)).join("");
  } else {
    certsGrid.innerHTML = `<div class="empty-state">No certifications yet — add entries to js/content.js under "certifications"</div>`;
  }
  document.getElementById("countCerts").textContent = data.certifications.length;

  function renderCard(item, tagLabel, isCert) {
    const desc = isCert ? item.subtitle : item.description;
    const links = (item.links || [])
      .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
      .join("");
    const chips = (item.tags || [])
      .map(t => `<span class="chip">${escapeHtml(t)}</span>`)
      .join("");
    return `
      <article class="card">
        <div class="card-tag">${tagLabel}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(desc)}</p>
        <div class="chips">${chips}</div>
        <div class="card-links">${links}</div>
      </article>
    `;
  }

  // ---------- THEME TOGGLE ----------
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");
  const root = document.documentElement;

  function applyThemeUI(theme) {
    themeIcon.textContent = theme === "light" ? "☀️" : "🌙";
    themeLabel.textContent = theme === "light" ? "Light mode" : "Dark mode";
  }
  applyThemeUI(root.getAttribute("data-theme") || "dark");

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("gopika-theme", next); } catch (e) { /* storage unavailable — theme still applies for this session */ }
    applyThemeUI(next);
  });

  // ---------- JOURNEY ----------
  document.getElementById("journeyKicker").textContent = data.journey.kicker;
  document.getElementById("journeyTitle").textContent = data.journey.title;
  document.getElementById("journeyBody").innerHTML = data.journey.paragraphs
    .map(p => `<p>${p}</p>`)
    .join("");

  // ---------- CONTACT ----------
  document.getElementById("contactKicker").textContent = data.contact.kicker;
  document.getElementById("contactTitle").textContent = data.contact.title;
  document.getElementById("contactIntro").textContent = data.contact.intro;

  const contactCards = [
    { label: "Email", value: data.profile.email, href: `mailto:${data.profile.email}`, icon: "✉️" },
    { label: "LinkedIn", value: "linkedin.com/in/gopikadevi", href: data.profile.linkedin, icon: "in" },
    { label: "GitHub", value: "github.com/gopikadeviga", href: data.profile.github, icon: "⌘" }
  ];
  document.getElementById("contactGrid").innerHTML = contactCards.map(c => `
    <a class="contact-card" href="${c.href}" target="_blank" rel="noopener">
      <span class="contact-card-icon">${c.icon}</span>
      <span class="contact-card-label">${escapeHtml(c.label)}</span>
      <span class="contact-card-value">${escapeHtml(c.value)}</span>
    </a>
  `).join("");

  // ---------- PAGE NAVIGATION (each nav item shows its own section) ----------
  const navLinks = Array.from(document.querySelectorAll("#sideNav a, a[data-section]"));
  const sections = Array.from(document.querySelectorAll(".page-section"));
  const validSectionIds = sections.map(s => s.id);

  function showSection(id, { updateHash = true, scrollTop = true } = {}) {
    if (!validSectionIds.includes(id)) id = "about";

    if (id === "about") {
      // About = combined overview: every section's content shown together
      sections.forEach(sec => sec.classList.add("is-active"));
    } else {
      // Any other nav item = focused view: only that section's content
      sections.forEach(sec => sec.classList.toggle("is-active", sec.id === id));
    }

    navLinks.forEach(link => {
      const isActive = link.dataset.section === id;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    if (updateHash && window.location.hash !== `#${id}`) {
      try { history.replaceState(null, "", `#${id}`); }
      catch (e) { /* some browsers block history API on file:// pages — safe to ignore */ }
    }
    if (scrollTop) {
      const mainEl = document.getElementById("main");
      if (mainEl) mainEl.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  window.addEventListener("hashchange", () => {
    showSection(window.location.hash.replace("#", ""));
  });

  // Initial section: whatever's in the URL hash, else "about"
  showSection(window.location.hash.replace("#", "") || "about", { updateHash: false, scrollTop: false });

  // ---------- helpers ----------
  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
})();
