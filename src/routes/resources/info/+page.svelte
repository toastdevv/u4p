<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';

	const links = [
		{
			title: 'Introduction to Palestine',
			link: 'https://mega.nz/file/1LMwjb7A#TEZf4bWMvN0IPn7JeCymkWWGELkr7wNMhxlJgpX_lTs'
		},
		{
			title: 'Zionist History',
			link: 'https://mega.nz/file/BaMkDCbI#Gywb0xX4JPaLM3dnMSiTSR026BRVR-5-PUqq1mhIhSw'
		},
		{
			title: 'Israeli government group chats leaked (and more refutations to Zionism)',
			link: 'https://mega.nz/file/daNnSYbC#vcRdjoVs8oQg5O-RUguk6_6nbMAmB44aekT-E5BCaJY'
		}
	];
</script>

<svelte:head>
	<title>{$name} | Information</title>
</svelte:head>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-between bg-black bg-opacity-30">
			<div class="px-5">
				<a href="/resources">
					<Icon icon="solar:arrow-left-linear" class="text-5xl text-slate-100" />
				</a>
			</div>
			<h1 class="text-center text-4xl font-black text-slate-100">Information</h1>
			<div class="p-5"></div>
		</div>
	</div>

	<div class="p-8 md:p-28">
		<h1 class="py-2 text-center text-3xl font-semibold">
			A compilation of information about Palestine.
		</h1>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Documents
		</h1>
		<ul class="ms-4 list-disc">
			{#each links as link, i (i)}
				<li>
					<p class="my-4 font-semibold underline md:text-xl">
						<a href={link.link}>{link.title}</a>
					</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
