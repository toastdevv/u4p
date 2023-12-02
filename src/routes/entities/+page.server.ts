import { getEntities } from '$lib/utils/getEntities';

export async function load() {
	const allEntities = await getEntities();

	const sortedEntities = allEntities.sort((a, b) => {
		//@ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return {
		indivs: sortedEntities.filter((entity) => entity.meta.type == 'indivs'),
		pros: sortedEntities.filter((entity) => entity.meta.type == 'pros'),
		orgs: sortedEntities.filter((entity) => entity.meta.type == 'orgs')
	};
}
