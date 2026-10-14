(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('header nav a[href^="#"]'));
  var sections = links.map(function (link) {
    return document.getElementById(link.hash.slice(1));
  });
  if (!links.length || sections.indexOf(null) !== -1) return;

  var header = document.querySelector('body > header');
  var ticking = false;

  function update() {
    ticking = false;
    var threshold = (header ? header.offsetHeight : 0) + window.innerHeight * 0.2;
    var current = 0;
    sections.forEach(function (section, i) {
      if (section.getBoundingClientRect().top <= threshold) current = i;
    });
    // A short last section can never reach the threshold, so the page bottom selects it.
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0 && window.innerHeight + scrolled >= document.documentElement.scrollHeight - 2) {
      current = sections.length - 1;
    }
    links.forEach(function (link, i) {
      var active = i === current;
      link.classList.toggle('active', active);
      if (active) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
