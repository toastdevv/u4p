export const getNews = async () => {
	const allNewsFiles = import.meta.glob('/src/routes/news/*.md');
	const iterableNewsFiles = Object.entries(allNewsFiles);

	const allNews = await Promise.all(
		iterableNewsFiles.map(async ([path, resolver]) => {
			//@ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allNews;
};
