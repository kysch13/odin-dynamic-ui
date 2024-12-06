const activateDropdown = (function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((el) => {
        el.addEventListener('click', (e) => {
            el.classList.toggle('active');
        })
    })
})();

