(function() {
    let header = document.getElementById('header');
    let navToggle = document.getElementById('nav-toggle');

    navToggle.addEventListener('click', function() {
        toggleClass(header, 'open');
    })

    function addClass(element, className) {
        let classList = element.className.split(' ');
        classList.push(className);
        element.className = classList.join(' ');
    }

    function removeClass(element, className) {
        let classList = element.className.split(' ');
        classList = classList.filter(function(e) {
            return e !== className;
        });
        element.classList = classList;
    }

    function toggleClass(element, className) {
        let classList = element.className.split(' ');
        if((classList.indexOf(className)) !== -1) {
            removeClass(element, className);     
        } else {
            addClass(element, className);
        }
    }
})();