class Content
{
	constructor()
	{
		this.size = new Vector(90, 20);
		this.guid = getGUID();
		contents[this.guid] = this;
	}
}

class SimpleText extends Content
{
	constructor()
	{
		super();
		this.text = "Hello world!";
	}

	paint(node)
	{
		node.drawText(this.text, new Vector(5, 11));

		node.drawLine(new Vector(0, 0), new Vector(this.size.x, 0));
		node.drawLine(new Vector(this.size.x, 0), this.size);
		node.drawLine(this.size, new Vector(0, this.size.y));
		node.drawLine(new Vector(0, this.size.y), new Vector(0, 0));
	}
}
