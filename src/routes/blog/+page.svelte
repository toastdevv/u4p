<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import { CaretRightSolid } from 'flowbite-svelte-icons';
</script>

<header class="semi-screen coolbg w-full drop-shadow-lg">
	<div class="flex h-full w-full gap-8 bg-black bg-opacity-20 p-8 drop-shadow-lg">
		<div class="flex h-full w-full flex-col">
			<Heading class="mb-5 text-slate-100">Latest Post</Heading>
			<a
				href="/"
				class="h-full w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-red-700"
			>
			</a>
		</div>
		<div class="flex h-full w-96 flex-col">
			<Heading class="mb-4 mt-3 text-4xl text-slate-100">More Posts</Heading>
			<div class="flex h-full flex-col gap-2">
				<a
					href="/"
					class="h-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-gray-800"
				>
				</a>
				<a
					href="/"
					class="h-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-white"
				>
				</a>
				<a
					href="/"
					class="h-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-primary-500"
				>
				</a>
			</div>
		</div>
	</div>
</header>

<main class="flex flex-col justify-evenly gap-28 p-24">
	<div>
		<P class="flex items-center gap-2 text-4xl font-bold">
			<CaretRightSolid size="lg" />
			Even More Posts
		</P>
		<div class="flex flex-col gap-3 py-8">
			{#each Array(5) as item, i (i)}
				<a
					href="/"
					class="flex h-36 gap-2 rounded-md p-3 transition-all hover:bg-gray-100 hover:drop-shadow"
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
