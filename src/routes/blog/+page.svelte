<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import { CaretRightSolid } from 'flowbite-svelte-icons';
</script>

<header class="semi-screen-n coolbg w-full drop-shadow-lg">
	<div
		class="flex w-full flex-shrink flex-col gap-8 bg-black bg-opacity-20 p-4 drop-shadow-lg md:h-full md:flex-row md:p-8"
	>
		<div class="flex h-full w-full flex-col">
			<Heading class="mb-5 text-slate-100">Latest Post</Heading>
			<a
				href="/"
				class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-red-700 md:aspect-auto md:h-full"
			>
			</a>
		</div>
		<div class="flex w-full flex-col md:h-full md:w-96">
			<Heading class="mb-4 mt-3 text-4xl text-slate-100">More Posts</Heading>
			<div class="flex h-full flex-col gap-3 p-2 md:gap-2 md:p-0">
				<a
					href="/"
					class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-gray-800 md:aspect-auto md:h-full"
				>
				</a>
				<a
					href="/"
					class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-white md:aspect-auto md:h-full"
				>
				</a>
				<a
					href="/"
					class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-primary-500 md:aspect-auto md:h-full"
				>
				</a>
			</div>
		</div>
	</div>
</header>

<main class="flex flex-col justify-evenly gap-16 p-8 md:gap-28 md:p-24">
	<div>
		<P class="flex items-center gap-2 text-3xl font-bold sm:text-4xl">
			<CaretRightSolid size="lg" />
			Even More Posts
		</P>
		<div class="flex flex-col gap-2 py-4 sm:py-8">
			{#each Array(5) as item, i (i)}
				<a
					href="/"
					class="flex flex-col gap-2 rounded-md p-3 transition-all hover:bg-gray-100 hover:drop-shadow sm:h-36 sm:flex-row"
				>
					<div class="aspect-video bg-slate-400"></div>
					<div>
						<Heading class="pb-2 text-2xl font-bold">Why is Ben Shapiro stupid?</Heading>
						<P>A look at the Zionist's thought mechanism.</P>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
