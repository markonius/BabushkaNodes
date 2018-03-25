class BasicNode extends Node
{
	constructor(position)
	{
		super(position);
	}

	paint()
	{
		this.drawLine(new Vector(0, 0), new Vector(this.rect.size.x, 0));
		this.drawLine(new Vector(this.rect.size.x, 0), this.rect.size);
		this.drawLine(this.rect.size, new Vector(0, this.rect.size.y));
		this.drawLine(new Vector(0, this.rect.size.y), new Vector(0, 0));
	}
}
