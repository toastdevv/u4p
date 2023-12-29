import { getNews } from '$lib/utils/getNews';

export async function load() {
	const allNews = await getNews();

	const sortedPosts = allNews.sort((a, b) => {
		//@ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return { posts: sortedPosts };
}
