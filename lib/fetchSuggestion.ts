import { formatTodosForAI } from './formatTodosForAI';

export const fetchSuggestion = async (board: Board) => {
	const todos = formatTodosForAI(board);

	const res = await fetch('/api/generateSummary', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ todos }),
	});

	console.log(res);

	const GPTData = await res.json();
	const { content } = GPTData;

	return content;
};
