<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
</script>

<svelte:head>
	<title>{$name} | About Us</title>
</svelte:head>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-center bg-black bg-opacity-30">
			<h1 class="text-center text-5xl font-black text-slate-100">About Us</h1>
		</div>
	</div>
	<div class="p-8 md:p-28">
		<p class="indent-3 text-xl">
			We are {$name}. We are on a mission to expose Israeli propaganda, lies, fake news and
			misinformation.
			<br />
			<br />
			As members of the pro-Palestine community, we are entitled to show our firm oppositon to the Zionist
			occupation. If you are interested into supporting our cause, we invite you to join our online community.
			<br />
			<br />
			Contact us to learn more about our humanitarian movement and how you can participate in it.
		</p>
		<h1
			id="social-media"
			class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl"
		>
			<Icon icon="fa:caret-right" class="text-4xl" />
			Social Media
		</h1>
		<ul class="ms-4 list-disc">
			<!-- <li><p class="my-3 font-semibold underline md:text-xl"><a href="/">Facebook</a></p></li>
			<li><p class="my-3 font-semibold underline md:text-xl"><a href="/">Instagram</a></p></li>
			<li><p class="my-3 font-semibold underline md:text-xl"><a href="/">X</a></p></li> -->
			<li>
				<p class="my-3 font-semibold underline md:text-xl">
					<a href="https://discord.gg/DzGtpsCXD3">Discord</a>
				</p>
			</li>
		</ul>
	</div>
</div>
