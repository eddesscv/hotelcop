/*************LIRE PLUS ***************/
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var plusText = document.getElementById("plus");
    var arrowUp = document.getElementsByClassName("fa-arrow-up");
    var arrowDn = document.getElementsByClassName("fa-arrow-down");

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      plus.style.display = "none";
      btnText.innerHTML = " Lire plus"; 
      moreText.style.display = "none";
      arrowUp.style.display = "none";
      arrowDn.style.display = "inline";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = " Lire Moins"; 
      moreText.style.display = "inline";
      plus.style.display = "none";
      arrowUp.style.display = "inline";
      arrowDn.style.display = "none";
    }
  }

/*************GOOGLE ANALYTICS ***************/
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-103632569-1', 'auto');
ga('send', 'pageview');

/************ * Nav fixe en haut au scroll **************/
/*
    var positionElementInPage = $('.navbar').offset().top;

    $( window ).resize(function() {
        positionElementInPage = $('.navbar').offset().top;
    });

    $(window).scroll(
        function() {
            if ($(window).scrollDown() > positionElementInPage) {
                // fixe
                $('.navbar').addClass("fixed-top");
                $('.navbar').removeClass("fixed-top");
            } else {
                // non fixe
                $('.navbar').removeClass("fixed-top");
                $('.navbar').addClass("fixed-top");
            }
        }
    );
*/

/***************************************/
/*        
var monIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            monIndex++;
            if (monIndex > x.length) {
                monIndex = 1
            }
            x[monIndex - 1].style.display = "block";
            setTimeout(carousel, 5000);
        }
        */
