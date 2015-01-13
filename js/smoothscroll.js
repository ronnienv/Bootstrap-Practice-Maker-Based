$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top - 100
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$("a.navbar-brand[href^='#']").on('click', function(e) {

  e.preventDefault();

  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 300, function(){
    window.location.hash = hash;
  });
});

$("#back-to-top a[href^='#']").on('click', function(e) {

  e.preventDefault();

  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 300, function(){
    window.location.hash = hash;
  });
});