<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
	import * as Dialog from '$lib/components/ui/dialog';

	export let data;

	let videos = data.videos;

	let links = data.links;

	let books = data.books;

	let images = data.images;
</script>

<svelte:head>
	<title>{$name} | Gallery</title>
	<meta name="og:title" content="{$name} | Gallery" />
</svelte:head>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-between bg-black bg-opacity-30">
			<div class="px-5">
				<a href="/resources">
					<Icon icon="solar:arrow-left-linear" class="text-5xl text-slate-100" />
				</a>
			</div>
			<h1 class="text-center text-4xl font-black text-slate-100">Gallery</h1>
			<div class="p-5"></div>
		</div>
	</div>

	<div class="p-8 md:p-28">
		<h1 class="py-2 text-center text-3xl font-semibold">
			A compilation of articles, media and resources about Palestine.
		</h1>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Links
		</h1>
		<ul class="ms-4 list-disc">
			{#each links as link, i (i)}
				<li>
					<p class="my-4 font-semibold underline md:text-xl">
						<a href={link.link}>{link.title}</a>
					</p>
				</li>
			{/each}
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Videos/Movies
		</h1>
		<ul class="ms-4 list-disc">
			{#each videos as link, i (i)}
				<li>
					<p class="my-4 font-semibold underline md:text-xl">
						<a href={link.link}>{link.title}</a>
					</p>
				</li>
			{/each}
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Books (and PDFs)
		</h1>
		<ul class="ms-4 list-disc">
			{#each books as link, i (i)}
				<li>
					<p class="my-4 font-semibold underline md:text-xl">
						<a href={link.link}>{link.title}</a>
					</p>
				</li>
			{/each}
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Media
		</h1>
		<div class="inline-flex flex-wrap justify-center gap-6">
			{#each images.images as image, i (i)}
				<Dialog.Root>
					<Dialog.Trigger>
						<div
							class="h-72 w-48 overflow-hidden rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700 hover:brightness-90"
						>
							<img
								src={images.prefix + image.src}
								alt={image.src}
								class="h-full w-full object-cover transition-all hover:scale-105"
							/>
						</div>
					</Dialog.Trigger>
					<Dialog.Content class="h-screen w-screen lg:h-auto lg:max-h-full lg:min-h-0 lg:w-auto">
						<img
							src={images.prefix + image.src}
							alt={image.src}
							class="h-full w-full rounded-md object-contain transition-all"
						/>
					</Dialog.Content>
				</Dialog.Root>
			{/each}
		</div>
	</div>
</div>
