export async function load({ params }) {
	//@ts-ignore
	const post = await import(`../${params.slug}.md`);
	const { name, organization, residence, occupation, date, picture } = post.metadata;
	const content = post.default;

	return {
		name,
		content,
		picture,
		date,
		occupation,
		residence,
		organization
	};
}
