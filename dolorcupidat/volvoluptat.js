/**
 * Draws Bezier curves between given points and appends them to the canvas.
 * 
 * @param {CanvasRenderingContext2D} ctx - The drawing context of the canvas.
 * @param {Array} points - An array of points where each point is an object with x and y properties.
 */
function drawCurves(ctx, points) {
    if (points.length < 2) {
        console.error('At least two points are required to draw a curve.');
        return;
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length - 1; i += 2) {
        // Ensure there are enough points to form a cubic bezier curve
        if (i + 1 < points.length) {
            ctx.bezierCurveTo(
                points[i].x, points[i].y,  // control point 1
                points[i + 1].x, points[i + 1].y,  // control point 2
                points[i + 1].x, points[i + 1].y // end point
            );
        }
    }

    ctx.stroke();  // Draw the path defined by moveTo and bezierCurveTo
}

// Example usage:
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const points = [
    { x: 50, y: 50 },
    { x: 150, y: 200 },
    { x: 250, y: 100 },
    { x: 350, y: 300 },
    { x: 450, y: 150 }
];

drawCurves(ctx, points);
