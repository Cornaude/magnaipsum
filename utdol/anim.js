const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const startAngle = 0;
const endAngle = Math.PI * 2; // A full circle

context.beginPath();
context.arc(centerX, centerY, radius, startAngle, endAngle);
context.stroke();
