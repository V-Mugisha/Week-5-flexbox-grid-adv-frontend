document.querySelectorAll('.collapse-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var sidebar = document.getElementById(btn.dataset.target);
        var isCollapsed = sidebar.classList.toggle('is-collapsed');
        btn.setAttribute('aria-expanded', String(!isCollapsed));
        btn.textContent = isCollapsed ? 'Expand' : 'Collapse';
    });
});
