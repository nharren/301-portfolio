'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.showPage = () => {
    app.view.init();
    
    if (app.snake.initialized) {
      app.snake.dispose();
    }

    app.aboutView.showPage();
  }

  module.aboutController = aboutController;
})(app);