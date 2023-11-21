<script lang="ts">
	import { Heading, Span, P, DropdownDivider } from 'flowbite-svelte';
	import { CaretRightSolid } from 'flowbite-svelte-icons';
</script>

<header class="coolbg semi-screen w-full">
	<div class="flex h-full w-full items-center bg-black bg-opacity-30">
		<div class="p-20">
			<Heading class="py-7 text-6xl text-white drop-shadow-lg">
				From the river to the sea...
			</Heading>
			<Heading class="drop-shadow-lg ">
				<Span class="py-7 text-6xl font-black text-red-700">Palestine{' '}</Span>
				<Span class="py-7 text-6xl font-black text-gray-800">Will{' '}</Span>
				<Span class="py-7 text-6xl font-black text-white">Be{' '}</Span>
				<Span class="py-7 text-6xl font-black text-primary-500">Free{' '}</Span>
			</Heading>
			<a
				href="/about"
				class="group mt-10 flex w-fit items-center justify-center border-b-0 bg-transparent py-2 text-3xl font-semibold text-white drop-shadow-lg transition-all hover:border-b-2 hover:border-b-primary-500 hover:bg-transparent"
			>
				<CaretRightSolid
					size="lg"
					class="-translate-x-2 text-red-600 transition-all group-hover:translate-x-0"
				/>
				Learn more
			</a>
		</div>
	</div>
</header>

<main class="flex flex-col justify-evenly gap-28 p-32">
	<div>
		<P class="text-3xl font-medium">
			We are on a mission to expose the propaganda and hate towards Palestinians, Arabs and Muslims.
			It's about time we take the narrative into our hands, to show the people the truth.
			<br />
			<br />
			If you know any organization, individual, or any entity that has taken part into discrimination
			against Muslims, Arabs or Palestinians, you can contact us
			<a href="/" class="underline">here</a>.
		</P>
	</div>
	<DropdownDivider class="bg-gray-300" />
	<div>
		<P class="flex items-center gap-2 text-4xl font-bold">
			<CaretRightSolid size="lg" />
			Recent Blogs
		</P>
		<div class="flex flex-col gap-2 py-8">
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
