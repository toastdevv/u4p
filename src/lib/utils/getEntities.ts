export const getEntities = async () => {
	const allEntitiesFiles = import.meta.glob('/src/routes/entities/*.md');
	const iterableEntitiesFiles = Object.entries(allEntitiesFiles);

	const allEntities = await Promise.all(
		iterableEntitiesFiles.map(async ([path, resolver]) => {
			//@ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allEntities;
};
