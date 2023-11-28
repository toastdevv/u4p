import { getEntities } from '$lib/utils/getEntities';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allEntities = await getEntities();

	const sortedEntities = allEntities.sort((a, b) => {
		//@ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedEntities);
};
