<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
</script>

<svelte:head>
	<title>{$name} | Gallery</title>
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
			Videos
		</h1>
		<ul class="ms-4 list-disc">
			<li>
				<p class="my-4 font-semibold underline md:text-xl">
					<a href="/resources/gallery">Palestine before 1948</a>
				</p>
			</li>
			<li>
				<p class="my-4 font-semibold underline md:text-xl">
					<a href="/resources/gallery">Israel before 1948 (jk XDD)</a>
				</p>
			</li>
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Images
		</h1>
		<div class="inline-flex flex-wrap gap-4">
			<a href="/resources/gallery">
				<div
					class="h-72 w-48 rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700"
				/>
			</a>
			<a href="/resources/gallery">
				<div
					class="h-72 w-48 rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700"
				/>
			</a>
			<a href="/resources/gallery">
				<div
					class="h-72 w-48 rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700"
				/>
			</a>
			<a href="/resources/gallery">
				<div
					class="h-72 w-48 rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700"
				/>
			</a>
			<a href="/resources/gallery">
				<div
					class="h-72 w-48 rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700"
				/>
			</a>
		</div>
	</div>
</div>
