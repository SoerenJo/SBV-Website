(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Menü schließen' : 'Menü öffnen';
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
    var dropdown = btn.nextElementSibling;
    if (!dropdown) return;
    btn.addEventListener('click', function () {
      var open = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  function closeAll() {
    document.querySelectorAll('.dropdown.open').forEach(function (d) {
      d.classList.remove('open');
      var btn = d.previousElementSibling;
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) closeAll();
  });
})();
