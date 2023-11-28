import { getNews } from '$lib/utils/getNews';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allNews = await getNews();

	const sortedNews = allNews.sort((a, b) => {
		//@ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedNews);
};
