(function () {
  var triggerFor = new Map();

  function bindToggle(trigger, target) {
    triggerFor.set(target, trigger);
    trigger.addEventListener('click', function () {
      var open = target.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (navToggle && nav) {
    bindToggle(navToggle, nav);
    navToggle.addEventListener('click', function () {
      navToggle.textContent = nav.classList.contains('open') ? 'Menü schließen' : 'Menü öffnen';
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
    var dropdown = btn.nextElementSibling;
    if (dropdown) bindToggle(btn, dropdown);
  });

  function closeAll() {
    document.querySelectorAll('.open').forEach(function (target) {
      target.classList.remove('open');
      var trigger = triggerFor.get(target);
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
    if (navToggle) navToggle.textContent = 'Menü öffnen';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown') && !e.target.closest('.main-nav') && !e.target.closest('.nav-toggle')) {
      closeAll();
    }
  });
})();
