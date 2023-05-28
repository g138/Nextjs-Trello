export const formatTodosForAI = (board: Board) => {
	const todos = Array.from(board.columns.entries());

	const flatArrays = todos.reduce((map, [key, value]) => {
		map[key] = value.todos;
		return map;
	}, {} as { [key in TypedColumn]: Todo[] });

	const flatArrayCounted = Object.entries(flatArrays).reduce(
		(map, [key, value]) => {
			map[key as TypedColumn] = value.length;
			return map;
		},
		{} as { [key in TypedColumn]: number }
	);

	return flatArrayCounted;
};
