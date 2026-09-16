/* Through the Fog — theme toggle + mobile menu. No dependencies. */
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = 'ttf-theme';

  /* ---- theme ---- */
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  setTheme(stored === 'dark' || stored === 'light' ? stored : 'light');

  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    var icon = mode === 'dark' ? '☀' : '☾';
    document.querySelectorAll('.theme-toggle span').forEach(function (el) { el.textContent = icon; });
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
  }

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  });

  /* ---- mobile menu ---- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');

  function closeMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) closeMenu();
    });
  }
})();
