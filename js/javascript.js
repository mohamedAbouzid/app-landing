// start smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
//end smooth scroll
$(window).scroll(function(){$(".navbar").css('background-color', 'white');});
//scroll reveal

window.sr = ScrollReveal();
sr.reveal('.mainimg', {
  origin: "left",
  duration: 2000,
  distance: "200px",
});
sr.reveal('#homediv', {
  origin: "right",
  duration: 2000,
  distance: "100px",
});
sr.reveal('.mainfheader', {
  origin: "bottom",
  duration: 2000,
  distance: "100px",
});
sr.reveal('.fimg', {
  origin: "left",
  duration: 2000,
  distance: "300px",
});
sr.reveal('.fp', {
  origin: "right",
  duration: 2000,
  distance: "400px",
});
sr.reveal('.cfh1', {
  origin: "top",
  duration: 2000,
  distance: "100px",
});
sr.reveal('.cfp', {
  origin: "left",
  duration: 2000,
  distance: "100px",
});
sr.reveal('.cfp ul', {
  origin: "left",
  duration: 1000,
  distance: "100px",
  delay: 1000,
});
sr.reveal('.cfimg', {
  origin: "right",
  duration: 2000,
  distance: "100px",
});
sr.reveal('#screenshots h1', {
  origin: "top",
  duration: 2000,
  distance: "100px",
});
sr.reveal('#imgs', {
  origin: "bottom",
  duration: 2000,
  distance: "500px",
});
sr.reveal('#contactus .container', {
  origin: "right",
  duration: 2000,
  distance: "600px",
});
sr.reveal('footer', {
  origin: "bottom",
  duration: 2000,
  distance: "200px",
  
});