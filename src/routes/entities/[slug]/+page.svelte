<script lang="ts">
	import Icon from '@iconify/svelte';

	export let data;
	let { name, organization, residence, occupation, date, content } = data;
</script>

<div class="coolbg h-32 w-full">
	<div class="flex h-full w-full items-center justify-between bg-black bg-opacity-30">
		<div class="px-5">
			<a href="/entities">
				<Icon icon="solar:arrow-left-linear" class="text-5xl text-slate-100" />
			</a>
		</div>
		<h1 class="text-center text-4xl font-black text-slate-100">Entities</h1>
		<div class="p-5"></div>
	</div>
</div>

<div class="prose prose-lg max-w-none p-8">
	<h1>{name}</h1>
	<h6>Occupation: {occupation}</h6>
	<h6>Organization: {organization}</h6>
	<h6>Residence: {residence}</h6>
	<svelte:component this={content} />
</div>
