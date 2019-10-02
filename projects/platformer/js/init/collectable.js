(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    collectable.init = function (game) {
        collectable.create(type.max, 200, 170, 6, 0.7);
        collectable.create(type.db, 400, 340, 12, 0.14);
        collectable.create(type.kennedi, 600, 680, 24, 0.28);
        collectable.create(type.steve, 800, 500, 48, 0.56);
        collectable.create(type.grace, 240, 350, 76, 1.12);
    };
})(window);