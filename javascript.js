$(document).ready(function () {
  var vague = $('#about-me-jumbotron').Vague({
  	intensity:      6,      // Blur Intensity
  	forceSVGUrl:    false,   // Force absolute path to the SVG filter,
  	// default animation options
      animationOptions: {
        duration: 1000,
        easing: 'linear' // here you can use also custom jQuery easing functions
      }
  });

  $("#about-me-button").click(function() {
    vague.blur();
    var card = '<div id="more-about-me-card" class="card"><div class="card-header">Featured</div><div class="card-block"><h4 class="card-title">Special title treatment</h4><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus dui non odio consequat molestie. In nisi est, vulputate in pulvinar quis.</p><a href="#" class="btn btn-primary" id="go-back-button">Go somewhere</a></div></div>';
    $(".hidden-more-about-me").append(card);

    $(document).on("scroll", function() {
     $("#more-about-me-card").remove();
     vague.unblur();
    });
  });

});
