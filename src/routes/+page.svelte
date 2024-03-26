<script lang="ts">
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
</script>

<svelte:head>
	<title>{$name} | Home</title>
	<meta name="og:title" content="{$name} | Home" />
</svelte:head>

<header class="coolbg semi-screen w-full">
	<div class="flex h-full w-full items-center bg-black bg-opacity-30">
		<div class="z-0 p-5 md:p-20">
			<h1 class="py-7 text-4xl font-black text-white drop-shadow-lg md:text-6xl lg:text-5xl">
				From the river to the sea...
			</h1>
			<h1 class="text-4xl font-black drop-shadow-lg md:text-6xl lg:text-5xl">
				<span class="py-7 font-black text-red-700">Palestine{' '}</span>
				<span class="py-7 font-black text-gray-800">Will{' '}</span>
				<span class="py-7 font-black text-white">Be{' '}</span>
				<span class="py-7 font-black text-maingreen-500">Free{' '}</span>
			</h1>
			<a
				href="/resources"
				class="group mt-10 flex w-fit items-center justify-center gap-1 border-b-0 bg-transparent py-2 text-2xl font-semibold text-white drop-shadow-lg transition-all hover:border-b-2 hover:border-b-maingreen-500 hover:bg-transparent sm:text-3xl"
			>
				<Icon
					icon="fa:caret-right"
					class="-translate-x-2 text-4xl text-red-600 transition-all group-hover:translate-x-0"
				/>
				Learn more
			</a>
		</div>
	</div>
</header>

<main class="flex flex-col justify-evenly gap-14 p-8 md:gap-28 md:p-32">
	<div>
		<p class="text-2xl font-medium md:text-3xl">
			We are on a mission to expose the Zionist propaganda and hate aimed at Palestinians. It's
			about time we take the narrative into our hands. It's about time we show people the truth.
			<br />
			<br />
			If you have any valuable resources that you think would be valuable to the page, you can contact
			us
			<a href="/about#contact" class="underline">here</a>.
		</p>
	</div>
	<hr class="bg-gray-300" />
</main>
