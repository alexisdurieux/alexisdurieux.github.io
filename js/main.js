$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: -70          // offste (in px) for fixed top navigation
});


// Tag Hover
$('.tag').mouseenter(function(e){
  if (!$(this).hasClass('selected-tag')){
    $(this).css('opacity', '1');
  } else {
    $(this).css('opacity', '0.5');
  }
});

$('.tag').mouseout(function(e){
  if (!$(this).hasClass('selected-tag')){
    $(this).css('opacity', '0.5');
  } else {
    $(this).css('opacity', '1');
  }
});

$('.tag').click(function(e){
  if ($(this).hasClass('selected-tag')){
    $(this).css('opacity', 0.5);
    $(this).removeClass('selected-tag');
    $('.background-item').each(function(i){
      $(this).show("slow");
    });
  } else {
    $('.tag.selected-tag').removeClass('selected-tag').css('opacity', '0.5');
    $(this).addClass('selected-tag').css('opacity', '1');
    var filter = $(this).attr('name');
    $('.tags').each(function(i){
      if ($(this).children('[filter-attribute=' + filter + ']').length){
        $(this).parent().show("slow");
      } else {
        $(this).parent().hide("slow");
      }
    });
  }
});

const SCROLL_REVEAL_DURATION = 800;

window.sr = ScrollReveal({reset: true});
sr.reveal('#experiences', { duration: SCROLL_REVEAL_DURATION });
sr.reveal('#projects', { duration: SCROLL_REVEAL_DURATION });
sr.reveal('#education', { duration: SCROLL_REVEAL_DURATION });
sr.reveal('#voyages', { duration: SCROLL_REVEAL_DURATION });
sr.reveal('#interets', { duration: SCROLL_REVEAL_DURATION });

$('.background-item').each(function(){
  $(this).click(function(e){
    window.open($(this).attr('link-url'));
  });
})
