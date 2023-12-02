<script>
	import Icon from '@iconify/svelte';
	export let data;
</script>

<header class="semi-screen-n flex w-full flex-col gap-8 bg-gray-500 p-8 drop-shadow-lg md:flex-row">
	<div class="flex w-full flex-shrink flex-col drop-shadow-lg md:h-full">
		<h1 class="mb-5 text-5xl font-black text-slate-100">Latest News</h1>
		<a
			href={data.posts[0].path}
			class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-red-700 md:aspect-auto md:h-full"
		>
		</a>
	</div>
	<div class="flex w-full flex-col md:h-full md:w-96">
		<h1 class="mb-4 mt-3 text-4xl font-black text-slate-100">More Articles</h1>
		<div class="flex h-full flex-col gap-3 p-2 md:gap-2 md:p-0">
			<a
				href="/"
				class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-gray-800 md:aspect-auto md:h-full"
			>
			</a>
			<a
				href="/"
				class="aspect-video h-full w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-white md:aspect-auto md:h-full"
			>
			</a>
			<a
				href="/"
				class="aspect-video h-full w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-maingreen-500 md:aspect-auto md:h-full"
			>
			</a>
		</div>
	</div>
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
					<div class="aspect-video bg-slate-400"></div>
					<div>
						<h2 class="pb-2 text-2xl font-bold">{post.meta.title}</h2>
						<p>{post.meta.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
