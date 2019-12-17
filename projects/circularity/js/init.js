var init = function (window) {
    'use strict';
    var
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,

        app = window.opspark.makeApp(),
        canvas = app.canvas,
        view = app.view,
        fps = draw.fps('#eb34e1');


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
            circle = draw.randomCircleInArea(canvas, true, true, '#eb34e1', 2);
            physikz.addRandomVelocity(circle, canvas, 1, 1);
            view.addChild(circle);
            circles.push(circle);
        }


        // TODO 3 / 7 : Call the drawCircle function
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        view.addChild(fps);
        app.addUpdateable(fps);

        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            // TODO 5a) if the circle has gone past of the LEFT side of the screen then place it on the RIGHT
            else if ( circle.x > canvas.width) {
              circle.x = 1;

            }

            // TODO 5b) if the circle has gone past of the TOP side of the screen then place it on the BOTTOM
            if (circle.y > canvas. width ) {
            circle.y = 2;

            }
            // TODO 5c) if the circle has gone past of the BOTTOM side of the screen then place it OFF-SCREEN TOP
            else if (circle.y >canvas. width ) {
            circle.y = 3;

            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        };

        function update() {
            // TODO 4 : Update the circle's position //
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            physikz.updatePosition(circles[5]);
            physikz.updatePosition(circles[6]);
            physikz.updatePosition(circles[7]);
            physikz.updatePosition(circles[8]);
            physikz.updatePosition(circles[9]);
            physikz.updatePosition(circles[10]);
            physikz.updatePosition(circles[11]);
            physikz.updatePosition(circles[12]);


            // TODO 5 : Call game.checkCirclePosition on your circles.
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            game.checkCirclePosition(circles[5]);
            game.checkCirclePosition(circles[6]);
            game.checkCirclePosition(circles[7]);
            game.checkCirclePosition(circles[8]);
            game.checkCirclePosition(circles[9]);
            game.checkCirclePosition(circles[10]);
            game.checkCirclePosition(circles[11]);
            game.checkCirclePosition(circles[12]);
        }

        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////

        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;

        app.addUpdateable(window.opspark.game);
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}