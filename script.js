(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initStarfield();
    initHeader();
    initReveals();
    if (document.getElementById("orrery")) initOrrery();
    if (document.getElementById("planetGrid")) initPlanetGrid();
    if (document.getElementById("planetHero")) initPlanetPage();
  });

  /* ----------------------------------------------------------
     STARFIELD — animated canvas of twinkling, drifting stars
     ---------------------------------------------------------- */
  function initStarfield() {
    var canvas = document.getElementById("starfield");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    var stars = [];
    var w = 0, h = 0;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.floor((w * h) / 4500);
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.9 + 0.1,        // depth/brightness
          r: Math.random() * 1.4 + 0.3,        // radius
          tw: Math.random() * Math.PI * 2,     // twinkle phase
          twSpd: Math.random() * 0.02 + 0.005, // twinkle speed
          drift: Math.random() * 0.04 + 0.01,  // horizontal drift
          hue: Math.random() < 0.08 ? (Math.random() < 0.5 ? "240, 210, 255" : "180, 230, 255") : "255, 250, 235"
        });
      }
    }

    function render() {
      ctx.clearRect(0, 0, w, h);

      // Faint nebula glows in fixed spots
      drawGlow(w * 0.18, h * 0.30, 220, "rgba(217, 107, 255, 0.05)");
      drawGlow(w * 0.82, h * 0.62, 280, "rgba(107, 227, 255, 0.04)");
      drawGlow(w * 0.5,  h * 0.05, 320, "rgba(244, 192, 98, 0.035)");

      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.tw += s.twSpd;
        var twinkle = (Math.sin(s.tw) * 0.5 + 0.5);
        var alpha = (0.35 + 0.65 * twinkle) * s.z;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + s.hue + "," + alpha.toFixed(3) + ")";
        ctx.fill();

        // Subtle bloom on bright stars
        if (s.z > 0.7) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + s.hue + "," + (alpha * 0.18).toFixed(3) + ")";
          ctx.fill();
        }

        s.x -= s.drift;
        if (s.x < -2) { s.x = w + 2; s.y = Math.random() * h; }
      }

      requestAnimationFrame(render);
    }

    function drawGlow(x, y, radius, color) {
      var grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, color);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 120);
    });

    resize();
    render();
  }

  /* ----------------------------------------------------------
     HEADER — adds .scrolled class after scroll
     ---------------------------------------------------------- */
  function initHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------
     SCROLL REVEALS — IntersectionObserver based fade-in
     ---------------------------------------------------------- */
  function initReveals() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
          setTimeout(function () { el.classList.add("is-visible"); }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ----------------------------------------------------------
     ORRERY — animated orbits and planets around the sun
     ---------------------------------------------------------- */
  function initOrrery() {
    var orrery = document.getElementById("orrery");
    if (!orrery || !window.PLANETS) return;

    window.PLANETS.forEach(function (planet) {
      var size = planet.orbitRadius * 2;

      var orbit = document.createElement("div");
      orbit.className = "orbit";
      orbit.style.width = size + "px";
      orbit.style.height = size + "px";

      var spinner = document.createElement("div");
      spinner.className = "orbit-spinner";
      spinner.style.animationDuration = (planet.orbitSpeed * 0.6) + "s";

      var dot = document.createElement("a");
      dot.className = "planet-dot";
      dot.href = "planet.html?id=" + planet.id;
      dot.title = planet.name;
      dot.style.width = planet.orbitSize + "px";
      dot.style.height = planet.orbitSize + "px";
      dot.style.background = planet.color;
      dot.style.boxShadow = "0 0 10px " + planet.color + "aa";

      spinner.appendChild(dot);
      orbit.appendChild(spinner);
      orrery.appendChild(orbit);
    });
  }

  /* ----------------------------------------------------------
     PLANET GRID — landing-page card list
     ---------------------------------------------------------- */
  function initPlanetGrid() {
    var grid = document.getElementById("planetGrid");
    if (!grid || !window.PLANETS) return;

    window.PLANETS.forEach(function (planet, i) {
      var a = document.createElement("a");
      a.href = "planet.html?id=" + planet.id;
      a.className = "planet-card reveal";
      a.setAttribute("data-delay", String(i * 70));
      a.style.setProperty("--accent", planet.color);

      a.innerHTML = [
        '<div class="planet-card-img" style="--accent:' + planet.color + '">',
        '  <img src="' + planet.image + '" alt="' + planet.name + '" loading="lazy" />',
        '</div>',
        '<h3 class="planet-card-name">' + planet.name + '</h3>',
        '<p class="planet-card-tagline">' + planet.tagline + '</p>',
        '<div class="planet-card-meta">',
        '  <span>Day<strong>' + planet.dayLength + '</strong></span>',
        '  <span>Moons<strong>' + planet.moons + '</strong></span>',
        '</div>'
      ].join("");

      grid.appendChild(a);
    });

    // Re-observe newly added cards for scroll reveal
    initReveals();
  }

  /* ----------------------------------------------------------
     PLANET DETAIL PAGE — render from ?id= query param
     ---------------------------------------------------------- */
  function initPlanetPage() {
    var hero = document.getElementById("planetHero");
    if (!hero || !window.PLANETS) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id") || "earth";
    var planet = window.getPlanetById(id);

    if (!planet) {
      hero.innerHTML =
        '<div style="text-align:center;padding:6rem 0">' +
          '<h1 class="display-md">Planet not found</h1>' +
          '<p class="muted" style="margin-top:1rem">' +
            '<a href="index.html" style="color:var(--gold)">Return to Galaxy →</a>' +
          '</p>' +
        '</div>';
      return;
    }

    document.title = planet.name + " — Cosmic Atlas";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", planet.description);

    var idx = window.PLANETS.findIndex(function (p) { return p.id === planet.id; });
    var prev = window.PLANETS[(idx - 1 + window.PLANETS.length) % window.PLANETS.length];
    var next = window.PLANETS[(idx + 1) % window.PLANETS.length];

    var stats = [
      { label: "Diameter",  value: planet.diameter,        icon: iconDisc() },
      { label: "Year",      value: planet.yearLength,      icon: iconOrbit() },
      { label: "Day",       value: planet.dayLength,       icon: iconClock() },
      { label: "Moons",     value: String(planet.moons),   icon: iconMoon() },
      { label: "Atmosphere",value: planet.atmosphere,      icon: iconWind() },
      { label: "Surface",   value: planet.surfaceTemp,     icon: iconTemp() }
    ];

    var statsHtml = stats.map(function (s) {
      return '' +
        '<div class="planet-stat">' +
          '<div class="planet-stat-icon">' + s.icon + '</div>' +
          '<div class="planet-stat-label">' + s.label + '</div>' +
          '<div class="planet-stat-value">' + s.value + '</div>' +
        '</div>';
    }).join("");

    var factsHtml = planet.funFacts.map(function (f) {
      return '<li>' + f + '</li>';
    }).join("");

    hero.innerHTML = [
      '<div class="planet-hero-grid">',
      '  <div class="planet-art reveal">',
      '    <div class="planet-art-glow" style="background:' + planet.color + '"></div>',
      '    <img src="' + planet.image + '" alt="' + planet.name + '" />',
      '  </div>',
      '  <div class="planet-info">',
      '    <div class="reveal">',
      '      <h1 class="planet-title" style="color:' + planet.color + '">' + planet.name + '</h1>',
      '      <p class="planet-description">' + planet.description + '</p>',
      '    </div>',
      '    <div class="planet-stats reveal" data-delay="120">' + statsHtml + '</div>',
      '    <div class="planet-block reveal" data-delay="200">',
      '      <h3>Exploration History</h3>',
      '      <p class="muted">' + planet.history + '</p>',
      '    </div>',
      '    <div class="planet-block reveal" data-delay="280">',
      '      <h3>Fun Facts</h3>',
      '      <ul class="fun-fact-list">' + factsHtml + '</ul>',
      '    </div>',
      '    <nav class="planet-nav reveal" data-delay="360">',
      '      <a class="nav-pill" href="planet.html?id=' + prev.id + '">',
      '        <span class="chev">‹</span>',
      '        <span><span class="label">Previous</span><span class="name">' + prev.name + '</span></span>',
      '      </a>',
      '      <a class="nav-pill right" href="planet.html?id=' + next.id + '">',
      '        <span><span class="label">Next</span><span class="name">' + next.name + '</span></span>',
      '        <span class="chev">›</span>',
      '      </a>',
      '    </nav>',
      '  </div>',
      '</div>'
    ].join("");

    initReveals();
    window.scrollTo(0, 0);
  }

  /* ----------------------------------------------------------
     INLINE SVG ICONS for the planet stats
     ---------------------------------------------------------- */
  function svg(path) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%">' + path + '</svg>';
  }
  function iconDisc()  { return svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/>'); }
  function iconOrbit() { return svg('<ellipse cx="12" cy="12" rx="9" ry="4"/><circle cx="20" cy="12" r="1.6" fill="currentColor"/>'); }
  function iconClock() { return svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'); }
  function iconMoon()  { return svg('<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.8 6.8 0 0 0 9.8 9.8z"/>'); }
  function iconWind()  { return svg('<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h17a3 3 0 1 1-3 3"/><path d="M3 16h9"/>'); }
  function iconTemp()  { return svg('<path d="M14 14.76V4a2 2 0 1 0-4 0v10.76a4 4 0 1 0 4 0z"/>'); }

})();