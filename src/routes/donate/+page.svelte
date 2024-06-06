<script>
	import { name } from '$lib/stores';

	const links = [
		{
			name: 'MATW PROJECT',
			url: 'https://matwproject.org/'
		},
		{
			name: "The Middle East Children's Alliance (MECA)",
			url: 'https://www.mecaforpeace.org/'
		},
		{
			name: 'United Nations Relief and Works Agency for Palestine refugees in the Near East (UNRWA)',
			url: 'https://www.unrwa.org/'
		},
		{
			name: 'Medical Aid for Palestine (MAP)',
			url: 'https://www.map.org.uk/'
		},
		{
			name: 'Healing Our Homeland',
			url: 'https://healingourhomeland.org/'
		},
		{
			name: 'Mutual Aid Gaza',
			url: 'https://opencollective.com/mutual-aid-gaza'
		},
		{
			name: 'Gaza.Online',
			url: 'https://www.gaza.online/'
		},
		{
			name: 'Unity for Gaza',
			url: 'https://www.gofundme.com/f/support-gaza-resilience'
		},
		{
			name: 'Urgent support for medical professionals in Gaza',
			url: 'https://www.gofundme.com/f/urgent-support-for-medical-workers-in-gaza'
		}
	];
</script>

<svelte:head>
	<title>{$name} | Donate</title>
	<meta name="og:title" content="{$name} | Donate" />
</svelte:head>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-center bg-black bg-opacity-30">
			<h1 class="text-center text-5xl font-black text-slate-100">Donate</h1>
		</div>
	</div>

	<div class="p-8 md:px-28 md:py-20">
		<h1 class="py-4 text-center text-2xl font-semibold md:text-3xl">
			A list of websites and organizations to donate to.
		</h1>
		<ul class="ms-4 list-disc">
			{#each links as link}
				<li>
					<p class="my-4 text-xl font-semibold underline">
						<a href={link.url}>{link.name}</a>
					</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
