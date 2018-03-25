class Vector
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	add(other)
	{
		return new Vector(this.x + other.x, this.y + other.y);
	}

	subtract(other)
	{
		return new Vector(this.x - other.x, this.y - other.y);
	}

	multiply(factor)
	{
		return new Vector(this.x * factor, this.y * factor);
	}

	divide(factor)
	{
		return new Vector(this.x / factor, this.y / factor);
	}
}

class Rectangle
{
	constructor(position, size)
	{
		this.position = position;
		this.size = size;
	}
}

class Node
{
	constructor(position, ctnt)
	{
		this.position = position;
		this.parentNode = null;
		this.scale = 1;
		this.ctnt = ctnt;
	}

	getTransformed(point)
	{
		point = point.add(this.position);
		if (this.parentNode == null)
			return applyZoomAndPan(point);
		return this.parentNode.getTransformed(point);
	}

	getTransformed1(number)
	{
		if (this.parentNode == null)
			return applyZoom(number);
		return this.parentNode.getTransformed1(number);
	}

	drawLine(start, end)
	{
		start = this.getTransformed(start);
		end = this.getTransformed(end);

		ctx.beginPath();
		ctx.moveTo(start.x, start.y);
		ctx.lineTo(end.x, end.y);
		ctx.stroke();
	}

	drawText(text, position)
	{
		let fontSize = this.getTransformed1(11);
		position = this.getTransformed(position);

		ctx.beginPath();
		ctx.font = fontSize + "px monospace";
		ctx.fillText(text, position.x, position.y); 
	}

	paint()
	{
		this.ctnt.paint(this);
	}
}

