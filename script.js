document.addEventListener('DOMContentLoaded', function () {
    // IMAGE MODAL (works with multiple images with class "modal-img")
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];

    var imgs = document.querySelectorAll('.modal-img');
    imgs.forEach(function (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function () {
            if (!modal) return;
            modal.style.display = 'block';
            modalImg.src = el.src;
            captionText.innerText = el.alt || '';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (modal) modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close offcanvas when a link inside it is clicked (Bootstrap offcanvas auto-closes with data-bs-dismiss, but ensure for JS hooks)
    var offcanvasLinks = document.querySelectorAll('#offcanvasDarkNavbar a[data-bs-dismiss]');
    offcanvasLinks.forEach(function (lnk) {
        lnk.addEventListener('click', function () {
            var offcanvasEl = document.getElementById('offcanvasDarkNavbar');
            var bsOff = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (bsOff) bsOff.hide();
        });
    });
});
