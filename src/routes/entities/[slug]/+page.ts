export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, author, date, thumbnailUrl } = post.metadata;
	const content = post.default;

	return {
		content,
		thumbnailUrl,
		title,
		author,
		date
	};
}
