(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    cannon.init = function (game) {
 
        cannon.create.onTop(450);
        cannon.create.onBottom(500);
        cannon.create.onLeft(550);
        cannon.create.onRight(600);
    };
})(window);
