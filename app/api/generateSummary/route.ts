import openai from '@/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { todos } = await request.json();

	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		temperature: 0.2,
		stream: false,
		n: 1,
		messages: [
			{
				role: 'system',
				content: 'When responding, welcome the user as always as Mr.GG',
			},
			{
				role: 'user',
				content: `Hi there, provide the summary of the following todos. Count how many todos in each category such as To do, in progress and done, then tell the user too have a prodductive day! Here is the data: ${JSON.stringify(
					todos
				)}`,
			},
		],
	});

	const { data } = response;
	return NextResponse.json(data.choices[0].message);
}
