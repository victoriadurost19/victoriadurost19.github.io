var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
var circle;		// variable to hold a single circle when creating circles / iterating
var circles = [];	// variable to store all circles in one Array


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    circles.push(circle);
}

        // TODO 3 / 7 : Call the drawCircle function 
functionName(<arguments go here if the function has parameters>);
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR COD    
        function update() {
            // TODO 4 : Update the circle's position //
circles[ <index> ]
function update() {
    // TODO 4 : Update the circle's position //
    physikz.updatePosition(circles[0]);
    // code to call the function on the other 4 circles...
}
            
            // TODO 5 : Call game.checkCirclePosition on your circles.
          
            // TODO 8 : Iterate over the array
           
for (var i = 0; i < myArray.length; i++) {
    var eachValue = myArray[i];
    
    // code to repeat using eachValue
}
        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
