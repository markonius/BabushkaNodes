nodes = [];
contents = {};

mouseDelta = new Vector(0, 0);
mousePosition = new Vector(0, 0);
rawMousePosition = new Vector(0, 0);

var mouseDown = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    mouseDownCount = 0;

pan = new Vector(0, 0);
zoom = 1;

activeTool = null;

function clearCanvas()
{
	//canvas[0].width = canvas[0].width;
	ctx.clearRect(0, 0, canvas[0].clientWidth, canvas[0].clientHeight);
}

function repaint()
{
	clearCanvas();
	for (let node of nodes)
	{
		node.paint();
	}
}

function applyZoomAndPan(point)
{
	return point.multiply(zoom).add(pan);
}

function applyZoom(number)
{
	return number * zoom;
}

drekec = function() { 
	canvas.click(function()	{
		if (activeTool != null)
		{
			activeTool.use();
		}
		repaint();
	});

	canvas.mousemove(function(e) {
		var rmp = canvas[0].getBoundingClientRect();
		rmp = new Vector(e.pageX - rmp.left, e.pageY - rmp.top);
		mouseDelta = rmp.subtract(rawMousePosition);
		rawMousePosition = rmp;
		var pos = rmp.subtract(pan);
		pos = pos.divide(zoom);
		mousePosition = pos;

		if (mouseDownCount && mouseDown[1])
		{
			pan = pan.add(mouseDelta);
			repaint();
		}
	});
	
	$(window).bind('mousewheel DOMMouseScroll', function(event){
		if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
			zoom *= 1.1;
		}
		else {
			zoom /= 1.1;
		}
		repaint();
	});

	canvas[0].onmousedown = function(evt) { 
		++mouseDown[evt.button];
		++mouseDownCount;
		if (mouseDown[evt.button] < 0 || mouseDown[evt.button] > 1)
		{
			mouseDown[evt.button] = 0;
		}
	}
	canvas[0].onmouseup = function(evt) {
		--mouseDown[evt.button];
		--mouseDownCount;
		if (mouseDown[evt.button] < 0 || mouseDown[evt.button] > 1)
		{
			mouseDown[evt.button] = 0;
		}
	}

	$("#clearCanvas").click(clearCanvas);

	$("#editTool").click(function() { activeTool = new EditTool(); });
	$("#nodeTool").click(function() { activeTool = new NodeTool(); });
	$("#connectionTool").click(function() { activeTool = new ConnectionTool(); });
};
startFunctions.push(drekec);
