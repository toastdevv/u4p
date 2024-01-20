export async function load() {
	const videos = (await import('./data/videos.json')).default;
	const links = (await import('./data/links.json')).default;
	const books = (await import('./data/books.json')).default;
	const images = (await import('./data/images.json')).default;
	return {
		videos,
		links,
		books,
		images
	};
}
