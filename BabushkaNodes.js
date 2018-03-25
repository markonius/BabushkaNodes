var canvas = null;
var ctx = null;

let startFunctions = [];

function getGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function resizeCanvas()
{
	canvas.attr("width", canvas.width());
	canvas.attr("height", canvas.height());
	ctx.strokeStyle = "#c0c0c0";
	ctx.fillStyle = "#c0c0c0";
	repaint();
}

$(document).ready(function()
{
	canvas = $("#graphCanvas");
	ctx = canvas.get(0).getContext("2d");
	resizeCanvas();

	for (let f of startFunctions)
	{
		f();
	}
});

$(window).resize(function() {
	resizeCanvas();
});

