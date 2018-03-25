class Tool
{
	constructor()
	{
		console.log("Tool");
	}

	use()
	{
		console.log("Not implemented");
	}
}

class EditTool extends Tool
{
	constructor()
	{
		super();
		console.log("EditTool");
	}
}

class NodeTool extends Tool
{
	constructor()
	{
		super();
		console.log("NodeTool");
	}

	use()
	{
		nodes.push(new Node(new Vector(mousePosition.x, mousePosition.y), new SimpleText()));
	}
}

class ConnectionTool extends Tool
{
	constructor()
	{
		super();
		console.log("ConnectionTool");
	}
}
