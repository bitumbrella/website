function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    const menuWrapper = document.querySelector('.bu-navigationWrap');

    function closeMenu() {
        menuWrapper.classList.remove('bu-navigation--open');
    }

    // Logo / Home scroll to top only on the home page (where the sections exist)
    const isHomePage = !!document.getElementById('doctrine');

    if (isHomePage) {
        document.querySelector('.bu-logoBlock').onclick = function(e) {
            window.scroll({
                top: 0,
            });
        };

        document.querySelector('.bu-navigation-link--home').onclick = function(e) {
            window.scroll({
                top: 0
            });
            closeMenu();
        };

        ['doctrine', 'services', 'leadership', 'contactUs'].forEach(function(id) {
            const link = document.querySelector('.bu-navigation-link--' + id);
            if (link) {
                link.onclick = function(e) {
                    document.getElementById(id).scrollIntoView();
                    closeMenu();
                };
            }
        });
    }

    document.querySelector('.bu-navigation-toggle').onclick = function(e) {
        menuWrapper.classList.toggle('bu-navigation--open');
    };

    // Dropdown menus (Products > Lyra > ...)
    const dropdownToggles = document.querySelectorAll('.bu-navigation-dropdownToggle');

    function setOpen(dropdown, open) {
        dropdown.classList.toggle('bu-navigation-dropdown--open', open);
        const toggle = dropdown.querySelector(':scope > .bu-navigation-dropdownToggle');
        if (toggle) {
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        // Closing a menu also closes any menus nested inside it
        if (!open) {
            dropdown.querySelectorAll('.bu-navigation-dropdown--open').forEach(function(child) {
                setOpen(child, false);
            });
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.bu-navigation-dropdown--open').forEach(function(dropdown) {
            setOpen(dropdown, false);
        });
    }

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = toggle.parentElement;
            setOpen(dropdown, !dropdown.classList.contains('bu-navigation-dropdown--open'));
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.bu-navigation-dropdown')) {
            closeAllDropdowns();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });

    // Header background on scroll
    const doctrineSection = document.querySelector('.bu-section--doctrine');
    const header = document.querySelector('.bu-header');

    if (doctrineSection) {
        window.onscroll = function(){
            //TOP
            if(doctrineSection.getBoundingClientRect().top <= 0){
                header.classList.add('buu-header--scrolled');
            }
            else {
                header.classList.remove('buu-header--scrolled');
            }
        }
    }
});
