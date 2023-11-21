<script>
	import Icon from '@iconify/svelte';
	import { Heading, P, TabItem, Tabs } from 'flowbite-svelte';
	import { FacebookSolid, XCompanySolid } from 'flowbite-svelte-icons';
</script>

<header
	class="semi-screen-xl flex w-full flex-col gap-8 bg-primary-900 p-6 drop-shadow-lg xl:flex-row xl:p-16"
>
	<div class="flex h-full w-full flex-shrink flex-col drop-shadow-lg">
		<Heading class="mb-6 text-slate-100">Meet Ben Shapiro...</Heading>
		<div class="flex h-full w-full flex-col gap-8 xl:flex-row">
			<a
				href="/"
				class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-red-700 xl:h-full"
			>
			</a>
			<div>
				<Heading class="mb-6 text-3xl text-slate-100">Bro thought he slick</Heading>

				<P class="text-lg text-slate-100">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia et dolore provident
					necessitatibus ea enim voluptatibus, ab natus deserunt, modi totam. Quo culpa nobis
					facilis incidunt ea consequuntur repudiandae at. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Tempora tempore sit soluta dolor voluptatem inventore voluptas impedit,
					ipsa dolorem corporis neque atque explicabo numquam. Voluptate cumque ducimus eligendi
					accusamus qui.
				</P>
				<div class="mt-8 flex w-full justify-evenly gap-8 xl:w-auto xl:justify-normal">
					<a href="/entities">
						<Icon icon="mdi:instagram" class="h-10 w-10 text-slate-100" />
					</a>
					<a href="/entities">
						<XCompanySolid class="h-10 w-10 text-slate-100" />
					</a>
					<a href="/entities">
						<FacebookSolid class="h-10 w-10 text-slate-100" />
					</a>
				</div>
			</div>
		</div>
	</div>
</header>

<main class="flex flex-col justify-evenly px-6 py-10 lg:p-24">
	<Tabs
		style="full"
		defaultClass="flex rounded-lg overflow-auto divide-x divide-gray-200 shadow dark:divide-gray-700"
	>
		{#each ['Individuals', 'Professionals', 'Organizations'] as entity, i (i)}
			<TabItem open={i == 0} class="w-full">
				<span slot="title" class="text-base font-semibold lg:text-lg">{entity}</span>
				<div class="flex flex-wrap justify-center">
					{#each Array(5) as item, i (i)}
						<div class="flex w-64 p-2">
							<a
								href="/"
								class="w-full flex-col gap-2 rounded-md border-[1px] border-gray-200 p-3 transition-all hover:bg-gray-100 hover:drop-shadow-lg"
							>
								<div class="h-44 w-full rounded-md bg-slate-400"></div>
								<Heading class="py-2 text-center text-xl font-medium">Jordan Peterson</Heading>
								<P><span class="font-semibold">Occupation: </span>idk</P>
								<P><span class="font-semibold">Residence: </span>usa maybe</P>
								<P><span class="font-semibold">Organization: </span>ziopiss</P>
								<div class="mt-3 bg-slate-50 p-2">
									<P>
										fr fr Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis
										placeat pariatur nesciunt hic nulla cum recusandae commodi modi.
									</P>
								</div>
							</a>
						</div>
					{/each}
				</div>
			</TabItem>
		{/each}
	</Tabs>
</main>
