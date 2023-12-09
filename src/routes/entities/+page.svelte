<script>
	import Icon from '@iconify/svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { name } from '$lib/stores';
	export let data;
</script>

<svelte:head>
	<title>{$name} | Entities</title>
</svelte:head>

<header
	class="semi-screen-xl flex w-full flex-col gap-8 bg-maingreen-900 p-6 drop-shadow-lg xl:flex-row xl:p-16"
>
	<div class="flex h-full w-full flex-shrink flex-col drop-shadow-lg">
		<h1 class="mb-6 text-5xl font-black text-slate-100">Meet Ben Shapiro...</h1>
		<div class="flex h-full w-full flex-col gap-8 xl:flex-row">
			<a
				href={data.pros[0].path}
				class="aspect-video w-full bg-slate-300 transition-all hover:rounded-md hover:border-2 hover:border-red-700 xl:h-full"
			>
				<img src="/jordan.jpg" alt="lol" class="aspect-video h-full w-full grow-0 object-cover" />
			</a>
			<div>
				<h1 class="mb-6 text-3xl font-black text-slate-100">Bro thought he slick</h1>

				<p class="text-lg text-slate-100">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia et dolore provident
					necessitatibus ea enim voluptatibus, ab natus deserunt, modi totam. Quo culpa nobis
					facilis incidunt ea consequuntur repudiandae at. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Tempora tempore sit soluta dolor voluptatem inventore voluptas impedit,
					ipsa dolorem corporis neque atque explicabo numquam. Voluptate cumque ducimus eligendi
					accusamus qui.
				</p>
				<div class="mt-8 flex w-full justify-evenly gap-8 xl:w-auto xl:justify-normal">
					<a href="/entities">
						<Icon icon="mdi:instagram" class="h-10 w-10 text-slate-100" />
					</a>
					<a href="/entities">
						<Icon icon="fa6-brands:x-twitter" class="h-10 w-10 text-slate-100" />
					</a>
					<a href="/entities">
						<Icon icon="ri:facebook-fill" class="h-10 w-10 text-slate-100" />
					</a>
				</div>
			</div>
		</div>
	</div>
</header>

<main class="flex flex-col justify-evenly px-6 py-10 lg:p-24">
	<Tabs.Root value="indivs" class="w-full">
		<Tabs.List class="my-1 h-auto w-full justify-start gap-5 overflow-auto sm:justify-center">
			<Tabs.Trigger value="indivs" class="px-7 py-2 text-xl">Individuals</Tabs.Trigger>
			<Tabs.Trigger value="pros" class="px-7 py-2 text-xl">Professionals</Tabs.Trigger>
			<Tabs.Trigger value="orgs" class="px-7 py-2 text-xl">Organizations</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="indivs" class="bg-slate-50">
			<div class="flex flex-wrap justify-center">
				{#each data['indivs'] as item, i (i)}
					<div class="flex w-64 p-2">
						<a
							href={item.path}
							class="w-full flex-col gap-2 rounded-md border-[1px] border-gray-200 bg-white p-3 transition-all hover:bg-gray-100 hover:drop-shadow-lg"
						>
							<div class="h-44 w-full rounded-md bg-slate-400"></div>
							<h1 class="py-2 text-center text-xl font-medium">{item.meta.name}</h1>
							<p><span class="font-semibold">Occupation: </span>{item.meta.occupation}</p>
							<p><span class="font-semibold">Residence: </span>{item.meta.residence}</p>
							<p><span class="font-semibold">Organization: </span>{item.meta.organization}</p>
							<div class="mt-3 bg-slate-50 p-2">
								<p>
									{item.meta.description}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</Tabs.Content>
		<Tabs.Content value="pros" class="bg-slate-50">
			<div class="flex flex-wrap justify-center">
				{#each data['pros'] as item, i (i)}
					<div class="flex w-64 p-2">
						<a
							href={item.path}
							class="w-full flex-col gap-2 rounded-md border-[1px] border-gray-200 bg-white p-3 transition-all hover:bg-gray-100 hover:drop-shadow-lg"
						>
							<div class="h-44 w-full rounded-md bg-slate-400"></div>
							<h1 class="py-2 text-center text-xl font-medium">{item.meta.name}</h1>
							<p><span class="font-semibold">Occupation: </span>{item.meta.occupation}</p>
							<p><span class="font-semibold">Residence: </span>{item.meta.residence}</p>
							<p><span class="font-semibold">Organization: </span>{item.meta.organization}</p>
							<div class="mt-3 bg-slate-50 p-2">
								<p>
									{item.meta.description}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</Tabs.Content>
		<Tabs.Content value="orgs" class="bg-slate-50">
			<div class="flex flex-wrap justify-center">
				{#each data['orgs'] as item, i (i)}
					<div class="flex w-64 p-2">
						<a
							href={item.path}
							class="w-full flex-col gap-2 rounded-md border-[1px] border-gray-200 bg-white p-3 transition-all hover:bg-gray-100 hover:drop-shadow-lg"
						>
							<div class="h-44 w-full rounded-md bg-slate-400"></div>
							<h1 class="py-2 text-center text-xl font-medium">{item.meta.name}</h1>
							<p><span class="font-semibold">Occupation: </span>{item.meta.occupation}</p>
							<p><span class="font-semibold">Residence: </span>{item.meta.residence}</p>
							<p><span class="font-semibold">Organization: </span>{item.meta.organization}</p>
							<div class="mt-3 bg-slate-50 p-2">
								<p>
									{item.meta.description}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</Tabs.Content>
	</Tabs.Root>
</main>
