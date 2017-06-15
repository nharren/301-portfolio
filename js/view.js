'use strict';

var projectView = {};

projectView.setTeasers = function() {
  $('.project-details').hide();

  $('.projects').on('click','.project-read-more', function(event) {
    var $readOn = $(this);
    $readOn.prev('.project-details').slideToggle();

    if ($readOn.text().startsWith('Read M')) {
      $readOn.text('Read Less');
    } else {
      $readOn.text('Read More');
    }

    event.preventDefault();
  });
};

$(document).ready(function() {
  projectView.setTeasers();
});