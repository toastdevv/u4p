<script lang="ts">
	import { Heading, Span, P, DropdownDivider } from 'flowbite-svelte';
	import { CaretRightSolid } from 'flowbite-svelte-icons';
</script>

<header class="coolbg semi-screen w-full">
	<div class="flex h-full w-full items-center bg-black bg-opacity-30">
		<div class="p-5 md:p-20">
			<Heading class="py-7 text-4xl text-white drop-shadow-lg md:text-6xl lg:text-5xl">
				From the river to the sea...
			</Heading>
			<Heading class="text-4xl drop-shadow-lg md:text-6xl lg:text-5xl">
				<Span class="py-7 font-black text-red-700">Palestine{' '}</Span>
				<Span class="py-7 font-black text-gray-800">Will{' '}</Span>
				<Span class="py-7 font-black text-white">Be{' '}</Span>
				<Span class="py-7 font-black text-primary-500">Free{' '}</Span>
			</Heading>
			<a
				href="/about"
				class="group mt-10 flex w-fit items-center justify-center border-b-0 bg-transparent py-2 text-2xl font-semibold text-white drop-shadow-lg transition-all hover:border-b-2 hover:border-b-primary-500 hover:bg-transparent sm:text-3xl"
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

<main class="flex flex-col justify-evenly gap-14 p-8 md:gap-28 md:p-32">
	<div>
		<P class="text-2xl font-medium md:text-3xl">
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
		<P class="flex items-center gap-2 text-3xl font-bold sm:text-4xl">
			<CaretRightSolid size="lg" />
			Recent Blogs
		</P>
		<div class="flex flex-col gap-2 py-4 sm:py-8">
			{#each Array(5) as item, i (i)}
				<a
					href="/"
					class="flex flex-col gap-2 rounded-md p-3 transition-all hover:bg-gray-100 hover:drop-shadow sm:h-36 sm:flex-row"
				>
					<div class="aspect-video h-36 bg-slate-400 sm:h-auto"></div>
					<div>
						<Heading class="pb-2 text-2xl font-bold">Why is Ben Shapiro stupid?</Heading>
						<P>A look at the Zionist's thought mechanism.</P>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
