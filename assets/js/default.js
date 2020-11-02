(function () {
  var bgaudio = document.getElementById("bgpianomusic");
  var scarevideo = document.getElementById("scarevideo");
  var stickyInstances = {};

  bgaudio.volume = 0.1;

  // Makes Title Sticky
  // Using the JS Library: https://github.com/rgalus/sticky-js
  stickyInstances['row1'] = new Sticky('.sm-sticky--1', {
    //stickyFor: 680,
    marginTop: -160,
    wrap: true
  });
  stickyInstances['row2'] = new Sticky('.sm-sticky--2', {
    //stickyFor: 680,
    marginTop:-10,
    wrap: true
  });
  stickyInstances['row3'] = new Sticky('.sm-sticky--3', {
    //stickyFor: 680,
    marginTop: 140,
    wrap: true
  });
  stickyInstances['row4'] = new Sticky('.sm-sticky--4', {
    //stickyFor: 680,
    marginTop: 290,
    wrap: true
  });
  stickyInstances['row5'] = new Sticky('.sm-sticky--5', {
    //stickyFor: 680,
    marginTop: 440,
    wrap: true
  });
  stickyInstances['row6'] = new Sticky('.sm-sticky--6', {
    //stickyFor: 680,
    marginTop: 590,
    wrap: true
  });
  stickyInstances['row7'] = new Sticky('.sm-sticky--7', {
    //stickyFor: 680,
    marginTop: 740,
    wrap: true
  });
  stickyInstances['row8']  = new Sticky('.sm-sticky--8', {
    //stickyFor: 680,
    marginTop: 890,
    wrap: true
  });

  $(window).scroll(function() {
    var isBottom = $(window).scrollTop() + $(window).height() == $(document).height();

    if (isBottom) {
      var $body = $(".sm-body");
      console.log("bottom!");
      if (!$body.hasClass('sm-body--end')) {
        $body.addClass('sm-body--end');
      }
      scarevideo.play();
    }
  });

})();
