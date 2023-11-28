import { getBlogPosts } from '$lib/utils/getBlogPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await getBlogPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		//@ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};
