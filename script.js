(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Không tải được data.js");
    return;
  }

  const page = document.body.dataset.page || "home";
  const icons = {
    folder: '<path d="M4 8h7l2 3h15v13H4z"/><path d="M4 8V5h8l3 3"/>',
    globe: '<circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c4 4 5 8 5 12s-1 8-5 12c-4-4-5-8-5-12s1-8 5-12z"/>',
    spark: '<path d="M16 3c1.5 7.5 5.5 11.5 13 13-7.5 1.5-11.5 5.5-13 13-1.5-7.5-5.5-11.5-13-13C10.5 14.5 14.5 10.5 16 3z"/><path d="M26 3v6M29 6h-6"/>',
    network: '<circle cx="7" cy="9" r="3"/><circle cx="25" cy="8" r="3"/><circle cx="16" cy="24" r="3"/><path d="m9.5 10.5 5 11M22.5 10l-5 11M10 9h12"/>',
    media: '<rect x="3" y="6" width="26" height="20" rx="3"/><path d="m13 12 8 4-8 4zM7 3v3M25 3v3"/>',
    compass: '<circle cx="16" cy="16" r="12"/><path d="m20.5 11.5-3 6-6 3 3-6z"/><circle cx="16" cy="16" r="1"/>'
  };

  const icon = (name) => `<svg viewBox="0 0 32 32" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
  const fileUrl = (file) => encodeURI(file);

  function renderShell() {
    const header = document.querySelector("[data-site-header]");
    const footer = document.querySelector("[data-site-footer]");
    const links = [
      { key: "home", href: "index.html", label: "Trang chủ" },
      { key: "assignments", href: "assignments.html", label: "Bài tập" },
      { key: "reflection", href: "reflection.html", label: "Tổng kết" }
    ];

    if (header) {
      header.className = "site-header";
      header.innerHTML = `
        <a class="brand" href="index.html" aria-label="Trang chủ portfolio Nguyễn Phương Anh">
          <span class="brand-mark">PA</span>
          <span><strong>${data.student.fullName}</strong><span>Transnational Media</span></span>
        </a>
        <nav class="site-nav" aria-label="Điều hướng chính">
          ${links.map(link => `<a class="nav-link${page === link.key ? " active" : ""}" href="${link.href}"${page === link.key ? ' aria-current="page"' : ""}>${link.label}</a>`).join("")}
        </nav>
        <div class="header-meta"><span>ULIS · ${data.course.year}</span><a class="header-button" href="assignments.html">Mở hồ sơ ↗</a></div>`;
    }

    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML = `
        <div class="footer-main">
          <div><p class="eyebrow">END OF THIS CHAPTER · NOT THE JOURNEY</p><h2>Culture travels.<br><em>So do ideas.</em></h2></div>
          <div class="footer-facts">
            <div><span>Sinh viên</span><strong>${data.student.fullName} · ${data.student.studentId}</strong></div>
            <div><span>Chuyên ngành</span><strong>${data.student.major}</strong></div>
            <div><span>Đơn vị</span><strong>${data.student.university}</strong></div>
          </div>
        </div>
        <div class="footer-bottom"><span>Portfolio học tập · ${data.course.year}</span><span>Made with care, context & pink paper.</span><button class="back-top" type="button" data-back-top>Về đầu trang ↑</button></div>`;
    }
  }

  function fillCommonContent() {
    const map = {
      "[data-name]": data.student.fullName,
      "[data-student-id]": data.student.studentId,
      "[data-major]": data.student.major,
      "[data-university]": data.student.university,
      "[data-introduction]": data.student.introduction,
      "[data-quote]": data.student.quote,
      "[data-year]": data.course.year,
      "[data-thanks-heading]": data.thankYou.heading,
      "[data-thanks-message]": data.thankYou.message,
      "[data-thanks-signature]": data.thankYou.signature,
      "[data-reflection-label]": data.reflection.label,
      "[data-reflection-title]": data.reflection.title
    };
    Object.entries(map).forEach(([selector, value]) => {
      document.querySelectorAll(selector).forEach(node => { node.textContent = value; });
    });
    document.querySelectorAll("[data-profile-image]").forEach(image => { image.src = data.student.profileImage; });
    document.querySelectorAll("[data-secondary-image]").forEach(image => { image.src = data.student.secondaryImage; });
  }

  function renderHome() {
    const keywordTrack = document.querySelector("[data-keyword-track]");
    if (keywordTrack) {
      const row = data.culturalKeywords.map(word => `<span>${word}</span>`).join("");
      keywordTrack.innerHTML = row + row;
    }

    const milestoneGrid = document.querySelector("[data-milestones]");
    if (milestoneGrid) {
      milestoneGrid.innerHTML = data.milestones.map((item, index) => `
        <article class="milestone ${index % 2 ? "reveal-right" : "reveal-left"}">
          <div class="milestone-top"><span class="milestone-icon">${icon(item.icon)}</span><span class="milestone-meta">${item.phase}<br>${item.date}</span></div>
          <h3>${item.title}</h3><p>${item.text}</p>
        </article>`).join("");
    }

    const statGrid = document.querySelector("[data-stats]");
    if (statGrid) {
      statGrid.innerHTML = data.stats.map((item, index) => `
        <div class="stat reveal-up" style="transition-delay:${index * 70}ms">
          <span class="stat-value" data-counter="${item.value}" data-suffix="${item.suffix}">0${item.suffix}</span>
          <span class="stat-label">${item.label}</span>
        </div>`).join("");
    }
  }

  function assignmentCard(work, index) {
    const colors = ["#f7d9df", "#ddd2eb", "#f8cfdb", "#f3d7c7", "#f8e7be", "#d8cde6"];
    return `
      <article class="assignment-card variant-${index + 1} ${index % 2 ? "reveal-right" : "reveal-left"}" data-category="${work.category}" style="--card-color:${colors[index]}">
        <div class="card-visual">
          <img src="${work.preview}" alt="Trang bìa ${work.title}" loading="lazy">
          <span class="card-index">${work.id}</span><span class="card-category">${work.category}</span>
          <span class="assignment-icon">${icon(work.icon)}</span>
        </div>
        <div class="card-body">
          <span class="card-kicker">ASSIGNMENT ${work.id} · PDF · ${work.pages} TRANG</span>
          <h3>${work.title}</h3><p>${work.description}</p>
          <div class="card-tags">${work.tools.map(tool => `<span>${tool}</span>`).join("")}</div>
          <span class="completion-status"><i></i> Đã hoàn thành</span>
          <div class="card-actions">
            <button class="button button-primary" type="button" data-open-pdf="${index}">Đọc PDF trong web</button>
            <a class="button button-ghost" href="${fileUrl(work.file)}" download>Tải file ↓</a>
          </div>
        </div>
      </article>`;
  }

  function renderAssignments() {
    const grid = document.querySelector("[data-assignment-grid]");
    if (!grid) return;
    grid.innerHTML = data.assignments.map(assignmentCard).join("");

    const categories = ["Tất cả", ...new Set(data.assignments.map(item => item.category))];
    const filters = document.querySelector("[data-filters]");
    filters.innerHTML = categories.map((category, index) => `<button type="button" class="filter-button${index === 0 ? " active" : ""}" data-filter="${category}" aria-pressed="${index === 0}">${category}</button>`).join("");
    filters.addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      filters.querySelectorAll("button").forEach(item => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      grid.querySelectorAll(".assignment-card").forEach(card => {
        card.classList.toggle("is-hidden", button.dataset.filter !== "Tất cả" && card.dataset.category !== button.dataset.filter);
      });
    });

    grid.addEventListener("click", event => {
      const button = event.target.closest("[data-open-pdf]");
      if (button) openPdf(Number(button.dataset.openPdf));
    });

    const requestedPdf = Number(new URLSearchParams(window.location.search).get("pdf"));
    if (Number.isInteger(requestedPdf) && requestedPdf >= 1 && requestedPdf <= data.assignments.length) {
      setTimeout(() => openPdf(requestedPdf - 1), 120);
    }
  }

  let lastFocused = null;
  function openPdf(index) {
    const modal = document.querySelector("[data-pdf-modal]");
    const work = data.assignments[index];
    if (!modal || !work) return;
    lastFocused = document.activeElement;
    modal.querySelector("[data-pdf-kicker]").textContent = `ASSIGNMENT ${work.id} · ${work.pages} TRANG · ${work.category}`;
    modal.querySelector("[data-pdf-title]").textContent = work.title;
    modal.querySelector("[data-pdf-summary]").textContent = work.description;
    modal.querySelector("[data-pdf-preview]").src = work.preview;
    modal.querySelector("[data-pdf-preview]").alt = `Trang bìa ${work.title}`;
    modal.querySelector("[data-pdf-tags]").innerHTML = work.tools.map(tool => `<span>${tool}</span>`).join("");
    modal.querySelector("[data-pdf-details]").innerHTML = [
      ["Mục tiêu", work.objective],
      ["Quá trình", work.process],
      ["Thử thách", work.challenge],
      ["Điều học được", work.learned]
    ].map(([label, text]) => `<section><strong>${label}</strong><p>${text}</p></section>`).join("");
    const url = fileUrl(work.file);
    modal.querySelector("[data-open-new]").href = url;
    modal.querySelector("[data-pdf-frame]").src = `${url}#toolbar=1&navpanes=0&view=FitH`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    setTimeout(() => modal.querySelector(".modal-close").focus(), 80);
  }

  function closePdf() {
    const modal = document.querySelector("[data-pdf-modal]");
    if (!modal || !modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modal.querySelector("[data-pdf-frame]").src = "about:blank";
    document.body.classList.remove("no-scroll");
    lastFocused?.focus();
  }

  function setupPdfModal() {
    const modal = document.querySelector("[data-pdf-modal]");
    if (!modal) return;
    modal.addEventListener("click", event => {
      if (event.target.closest("[data-close-modal]")) closePdf();
    });
    document.addEventListener("keydown", event => {
      if (!modal.classList.contains("open")) return;
      if (event.key === "Escape") closePdf();
      if (event.key === "Tab") {
        const focusable = [...modal.querySelectorAll("a[href], button")];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
  }

  function renderReflection() {
    const skills = document.querySelector("[data-skills]");
    if (skills) {
      skills.innerHTML = data.skills.map(item => `<div class="skill-node"><strong>${item.name}</strong><span>${item.group}</span><small>${item.note}</small></div>`).join("");
    }
    const shift = document.querySelector("[data-shift]");
    if (shift) {
      shift.innerHTML = `
        <article class="shift-card reveal-left"><span>BEFORE · ĐIỂM KHỞI ĐẦU</span><h3>Mình từng...</h3><ul>${data.reflection.before.map(item => `<li>${item}</li>`).join("")}</ul></article>
        <article class="shift-card reveal-right"><span>AFTER · SAU 6 BÀI TẬP</span><h3>Mình đã biết...</h3><ul>${data.reflection.after.map(item => `<li>${item}</li>`).join("")}</ul></article>`;
    }
    const copy = document.querySelector("[data-reflection-copy]");
    if (copy) copy.innerHTML = data.reflection.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
  }

  function setupMotion() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach(item => item.classList.add("revealed"));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -5%" });
      revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
        observer.observe(item);
      });
    }

    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const target = Number(node.dataset.counter);
        const suffix = node.dataset.suffix || "";
        if (reduceMotion) { node.textContent = `${target}${suffix}`; }
        else {
          const started = performance.now();
          const tick = now => {
            const progress = Math.min(1, (now - started) / 900);
            node.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
        counterObserver.unobserve(node);
      });
    }, { threshold: .5 });
    counters.forEach(counter => counterObserver.observe(counter));
  }

  function setupGlobalInteractions() {
    const header = document.querySelector(".site-header");
    const progress = document.querySelector(".scroll-progress span");
    const updateScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 60);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    document.querySelectorAll("[data-back-top]").forEach(button => button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })));

    const heroArt = document.querySelector(".hero-art");
    if (heroArt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.addEventListener("pointermove", event => {
        const x = (event.clientX / window.innerWidth - .5) * 7;
        const y = (event.clientY / window.innerHeight - .5) * 5;
        heroArt.style.transform = `scale(1.035) translate(${x}px, ${y}px)`;
      }, { passive: true });
    }
  }

  renderShell();
  fillCommonContent();
  if (page === "home") renderHome();
  if (page === "assignments") renderAssignments();
  if (page === "reflection") renderReflection();
  setupPdfModal();
  setupMotion();
  setupGlobalInteractions();
  if (window.location.hash) {
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target) window.setTimeout(() => target.scrollIntoView({ block: "start", behavior: "auto" }), 180);
  }
})();
