import { ID, storage } from '@/appwrite';

export const uploadImage = async (file: File) => {
	if (!file) return;

	const fileUploaded = await storage.createFile(
		'647248ea4dcda593f6a5',
		ID.unique(),
		file
	);

	return fileUploaded;
};
