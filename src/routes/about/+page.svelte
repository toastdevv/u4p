<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
</script>

<svelte:head>
	<title>{$name} | About Us</title>
	<meta name="og:title" content="{$name} | About Us" />
</svelte:head>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-center bg-black bg-opacity-30">
			<h1 class="text-center text-5xl font-black text-slate-100">About Us</h1>
		</div>
	</div>
	<div class="p-8 md:p-28">
		<p class="text-center text-2xl font-medium">Together for a free palestine.</p>
		<br />
		<a href="#contact">
			<h1
				id="contact"
				class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl"
			>
				<Icon icon="fa:caret-right" class="text-4xl" />
				Contact
			</h1>
		</a>
		<ul class="ms-4 list-disc">
			<!-- <li><p class="my-3 font-semibold underline md:text-xl"><a href="/">Facebook</a></p></li>
			<li><p class="my-3 font-semibold underline md:text-xl"><a href="/">Instagram</a></p></li>
			<li><p class="my-3 font-semibold underline md:text-xl"><a href="/">X</a></p></li> -->
			<li>
				<p class="my-3 md:text-xl">
					<span class="font-semibold">Email:</span>&nbsp;
					<a href="mailto:benamrerayane@proton.me">benamrerayane@proton.me</a>
				</p>
			</li>
		</ul>
	</div>
</div>
