<script lang="ts">
	import '$lib/styles/app.css';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { name } from '$lib/stores';

	let navs = [
		{ title: 'Home', href: '/' },
		{ title: 'Resources', href: '/resources' },
		{ title: 'Introduction', href: '/resources/info' },
		{ title: 'Gallery', href: '/resources/gallery' },
		{ title: 'About Us', href: '/about' }
	];

	let isMenu: boolean = false;
</script>

<svelte:head>
	<title>{$name}</title>
	<meta name="og:title" content={$name} />
	<meta name="og:description" content="F**k Zionism" />
	<meta name="og:image" content="/psflag.jpg" />
	<meta
		name="keywords"
		content="palestine, arabs, muslims, islamophobia, zionism, israel, anti-zionism, pro-palestine, pro-israel, anti-palestine, occupation, freedom, zionist, islam, genocide, ethnic cleansing, racism, anti-semitism, free palestine"
	/>
</svelte:head>

<div
	class="{isMenu
		? 'pointer-events-auto opacity-100 backdrop-blur-md'
		: 'pointer-events-none invisible opacity-0'} fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-white transition-all duration-300"
>
	<div class="fixed top-0 flex w-full flex-row items-center justify-end p-4">
		<button on:click={() => (isMenu = false)}>
			<Icon icon="ph:x" class="text-4xl font-bold text-gray-600" />
		</button>
	</div>
	<div class="pr-12">
		<ul class="flex flex-col gap-5">
			{#each navs as nav}
				<li class="p-2">
					<a
						href={nav.href}
						on:click={() => (isMenu = false)}
						aria-current={$page.url.pathname === nav.href}
						class="text-3xl font-semibold {$page.url.pathname === nav.href
							? 'text-maingreen-800'
							: 'text-gray-600'} underline drop-shadow-lg"
					>
						<div class="absolute flex h-full w-full items-center">
							<Icon
								icon="fa:caret-right"
								class="text-2xl text-red-700 {$page.url.pathname === nav.href
									? '-translate-x-6 opacity-100'
									: '-translate-x-8 opacity-0'} transition-all "
							/>
						</div>
						{nav.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<nav class="flex flex-row items-center justify-between px-6 py-4">
	<a href="/">
		<p class="flex flex-row items-center justify-between text-2xl font-bold">
			<img src="/favicon.png" class="mr-3 h-6 w-6 object-contain" alt="logo" />
			{$name}
			<img src="/favicon.png" class="ml-3 h-6 w-6 object-contain" alt="logo" />
		</p>
	</a>
	<button
		role="menu"
		class="visible inline-flex gap-8 md:invisible md:hidden"
		on:click={() => (isMenu = true)}
	>
		<Icon icon="ci:hamburger-md" class="text-3xl" />
	</button>
	<ul class="invisible hidden md:visible md:inline-flex md:gap-8">
		{#each navs as nav}
			<li
				class="group relative underline decoration-transparent transition-all hover:decoration-maingreen-600 hover:decoration-2 hover:underline-offset-2 hover:opacity-75"
			>
				<a href={nav.href} class="text-lg font-normal">
					<div class="absolute flex h-full w-full justify-center">
						<Icon
							icon="ion:caret-down-sharp"
							class="-translate-y-4 text-2xl text-red-600 opacity-0 transition-all group-hover:-translate-y-3 group-hover:opacity-100"
						/>
					</div>
					{nav.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<slot />

<hr class="mx-4 mb-4 bg-gray-300" />

<footer class="p-5">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<a href="/">
				<p class="flex flex-row items-center justify-between text-2xl font-bold">
					<img src="/favicon.png" class="mr-3 h-6 w-6 object-contain" alt="logo" />
					{$name}
					<img src="/favicon.png" class="ml-3 h-6 w-6 object-contain" alt="logo" />
				</p>
			</a>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-8">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
					Resources
				</h2>
				<ul>
					<li class="mb-4">
						<a
							href="/resources/info"
							class="font-normal text-gray-600 hover:text-gray-900 hover:underline"
						>
							Introduction
						</a>
					</li>
					<li class="mb-4">
						<a
							href="/resources/gallery"
							class="font-normal text-gray-600 hover:text-gray-900 hover:underline"
						>
							Gallery
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
					Information
				</h2>
				<ul>
					<li class="mb-4">
						<a href="/" class="font-normal text-gray-600 hover:text-gray-900 hover:underline">
							Home
						</a>
					</li>
					<li class="mb-4">
						<a href="/about" class="font-normal text-gray-600 hover:text-gray-900 hover:underline">
							About Us
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<p class="text-base text-gray-500">© 2023 All Rights Reserved.</p>
	</div>
</footer>
