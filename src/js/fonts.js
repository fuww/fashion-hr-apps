import FontFaceObserver from 'fontfaceobserver';

// if the class is already set, we're good.
function loadFonts() {
    if (document.documentElement.className.indexOf("fonts-loaded") > -1) {
        return;
    }
    var fontA = new FontFaceObserver("Futura PT Web Condensed Bold", [{
        weight: 300
    }, {
        weight: 400
    }, {
        weight: 700
    }]);
    var fontB = new FontFaceObserver("Droid Serif", [{
        weight: 400
    }, {
        weight: 700
    }]);
    Promise
        .all([fontA.check(), fontB.check()])
        .then(function () {
            document.documentElement.className += " fonts-loaded";
        });
};

loadFonts();
