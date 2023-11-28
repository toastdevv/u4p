import { getBlogPosts } from '$lib/utils/getBlogPosts';

export async function load() {
	const allPosts = await getBlogPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		//@ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return { posts: sortedPosts };
}
