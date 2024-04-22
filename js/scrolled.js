document.addEventListener('DOMContentLoaded', function() { 
    function scrolled() {
        var header_title = document.documentElement; // select the <html> element
        var scroll_position = window.scrollY || document.documentElement.scrollTop; // get scroll position

        if (scroll_position > 0) {
            header_title.classList.add('scrolled');
        } else {
            header_title.classList.remove('scrolled');
        }
    }

    // listen for the scrolling 
    window.addEventListener('scroll', scrolled);

    // chceck if the page is already scrolled
    scrolled();
});