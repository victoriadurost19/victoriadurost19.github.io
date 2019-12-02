(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
     platform.init = function (game) {
     platform.create(350, 450);
     platform.create(100,250);
     platform.create(0, 100);
     platform.create(750,350);
     platform.create(150, 550);
    };
})(window);