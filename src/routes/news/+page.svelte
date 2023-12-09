<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
	export let data;
</script>

<svelte:head>
	<title>{$name} | News</title>
</svelte:head>

<header class="coolgrid w-full bg-gray-500 p-8 drop-shadow-lg">
	<h1 class="mb-5 text-5xl font-black text-slate-100">Latest News</h1>
	<h1
		class="row-start-3 row-end-4 mb-4 mt-3 text-4xl font-black text-slate-100 lg:row-start-auto lg:row-end-auto"
	>
		More Articles
	</h1>
	<a
		href={data.posts[0].path}
		class="row-start-2 row-end-3 bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-red-700 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-5"
	>
		<img
			src={data.posts[0].meta.thumbnailUrl}
			alt={data.posts[0].meta.title}
			class="aspect-video h-full w-full grow-0 object-cover"
		/>
	</a>
	<a
		href="/"
		class="aspect-video bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-gray-800"
	>
	</a>
	<a
		href="/"
		class="aspect-video bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-gray-800"
	>
	</a>
	<a
		href="/"
		class="aspect-video bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-gray-800"
	>
	</a>
</header>

<main class="flex flex-col justify-evenly gap-16 p-8 md:gap-28 md:p-24">
	<div>
		<p class="flex items-center gap-2 text-3xl font-bold sm:text-4xl">
			<Icon icon="fa:caret-right" class="text-4xl" />
			More News
		</p>
		<div class="flex flex-col gap-2 py-4 sm:py-8">
			{#each data.posts as post, i (i)}
				<a
					href={post.path}
					class="flex flex-col gap-2 rounded-md p-3 transition-all hover:bg-gray-100 hover:drop-shadow sm:h-36 sm:flex-row"
				>
					<div class="aspect-video bg-slate-400">
						<img
							src={post.meta.thumbnailUrl}
							alt={post.meta.title}
							class="aspect-video h-full w-full grow-0 object-cover"
						/>
					</div>
					<div>
						<h2 class="pb-2 text-2xl font-bold">{post.meta.title}</h2>
						<p>{post.meta.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
