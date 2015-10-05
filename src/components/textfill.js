'use strict';

jQuery.fn.textfill = function(maxFontSize) {
  maxFontSize = parseInt(maxFontSize, 10);
  return this.each(function() {
    var ourText = jQuery('span', this),
      parent = ourText.parent(),
      maxWidth = parent.width(),
      fontSize = parseInt(ourText.css('fontSize'), 10),
      multiplier = maxWidth / ourText.width(),
      newSize = Math.floor(fontSize * (multiplier - 0.1));
    newSize -= newSize % 10;
    ourText.css('fontSize', (maxFontSize > 0 && newSize > maxFontSize) ? maxFontSize : newSize);
  });
};

setInterval(function () {
  $('.textfill').textfill();
}, 1000);
