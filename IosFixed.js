(function($) {
  jQuery.fn.IosFixed = function() {

    var eventSelector = this;
    var fixedClass = 'ios-fixed';

    var selector = 'body';
    var addFixed = function() {
      var scrollY = $(window).scrollTop();
      $(selector).css({
          position: 'fixed',
          top: -scrollY,
          width: '100%'
      });
      $(selector).addClass(fixedClass);
    };

    var removeFixed = function() {
      var scrollY = $(selector).css('top').replace(/px/, '');
      $(selector).css({
          position: 'inherit',
          top: 0,
          width: 'auto'
      });
      $(window).scrollTop(Math.abs(scrollY));
      $(selector).removeClass(fixedClass);
    };

    eventSelector.on({
      click: function () {
        if (! $(selector).hasClass(fixedClass)) {
          addFixed();
        }
        console.log('click');
      },
      touchstart: function() {
        if (! $(selector).hasClass(fixedClass)) {
          addFixed();
        }
        console.log('touch start');
      },
      blur: function() {
        if ($(selector).hasClass(fixedClass)) {
          removeFixed();
        }
        console.log('blur');
      }
    });
  }
})(jQuery);
