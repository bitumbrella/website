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
    document.querySelector('.bu-logoBlock').onclick = function(e) {
        window.scroll({
            top: 0,
        });
    };

    let menuWrapper = menu = document.querySelector('.bu-navigationWrap');

    document.querySelector('.bu-navigation-link--doctrine').onclick = function(e) {
        document.getElementById('doctrine').scrollIntoView();
        menuWrapper.classList.remove('bu-navigation--open');
    };

    document.querySelector('.bu-navigation-link--services').onclick = function(e) {
        document.getElementById('services').scrollIntoView();
        menuWrapper.classList.remove('bu-navigation--open');
    };

    document.querySelector('.bu-navigation-link--leadership').onclick = function(e) {
        document.getElementById('leadership').scrollIntoView();
        menuWrapper.classList.remove('bu-navigation--open');
    };

    document.querySelector('.bu-navigation-link--contactUs').onclick = function(e) {
        document.getElementById('contactUs').scrollIntoView();
        menuWrapper.classList.remove('bu-navigation--open');
    };

    document.querySelector('.bu-navigation-link--home').onclick = function(e) {
        window.scroll({
            top: 0
        });
        menuWrapper.classList.remove('bu-navigation--open');
    };

    document.querySelector('.bu-navigation-toggle').onclick = function(e) {
        menuWrapper.classList.toggle('bu-navigation--open');
    };

    const doctrineSection = document.querySelector('.bu-section--doctrine');
    const header = document.querySelector('.bu-header');

    window.onscroll = function(){
        //TOP
        if(doctrineSection.getBoundingClientRect().top <= 0){
            header.classList.add('buu-header--scrolled');
        }
        else {
            header.classList.remove('buu-header--scrolled');
        }
    }
});