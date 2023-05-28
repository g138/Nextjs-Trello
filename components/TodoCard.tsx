'use client';
import { getUrl } from '@/lib/getUrl';
import { useBoardStore } from '@/store/BoardStore';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
	DraggableProvidedDraggableProps,
	DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';

type Props = {
	todo: Todo;
	index: number;
	id: TypedColumn;
	innerRef: (element: HTMLElement | null) => void;
	dragHandleProps: DraggableProvidedDragHandleProps;
	draggableProps: DraggableProvidedDraggableProps | null | undefined;
};

function TodoCard({
	todo,
	index,
	id,
	dragHandleProps,
	draggableProps,
	innerRef,
}: Props) {
	const deleteTask = useBoardStore((state) => state.deleteTask);
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	useEffect(() => {
		if (todo.image) {
			const fetchImage = async () => {
				const url = await getUrl(todo.image!);

				if (url) {
					setImageUrl(url.toString());
				}
			};

			fetchImage();
		}
	}, [todo]);

	return (
		<div
			className="bg-white rounded-md space-y-2 drop-shadow-md"
			{...dragHandleProps}
			{...draggableProps}
			ref={innerRef}
		>
			<div className="flex justify-between items-center p-5">
				<p>{todo.title}</p>
				<button
					onClick={() => deleteTask(index, todo, id)}
					className="text-red-500 hover:text-red-600"
				>
					<XCircleIcon className="ml-5 h-8 w-8" />
				</button>
			</div>

			{imageUrl && (
				<div className="rounded-b-md relative h-full w-full">
					<Image
						className="rounded-b-md w-full object-contain"
						alt="Task Image"
						height={200}
						width={400}
						src={imageUrl}
					/>
				</div>
			)}
		</div>
	);
}

export default TodoCard;
