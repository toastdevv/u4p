<script>
	import Icon from '@iconify/svelte';
</script>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-center bg-black bg-opacity-30">
			<h1 class="text-center text-5xl font-black text-slate-100">Resources</h1>
		</div>
	</div>

	<div class="p-8 md:p-28">
		<h1 class="py-2 text-center text-3xl font-semibold">
			A compilation of resources and where to find them in the website.
		</h1>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			More About Us
		</h1>
		<ul class="ms-4 list-disc">
			<li><p class="my-4 font-semibold underline md:text-xl"><a href="/about">About Us</a></p></li>
			<li>
				<p class="my-4 font-semibold underline md:text-xl"><a href="/disclaimer">Disclaimer</a></p>
			</li>
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Palestine
		</h1>
		<ul class="ms-4 list-disc">
			<li>
				<p class="my-4 font-semibold underline md:text-xl">
					<a href="/resources/info">Information</a>
				</p>
			</li>
			<li>
				<p class="my-4 font-semibold underline md:text-xl">
					<a href="/resources/gallery">Gallery</a>
				</p>
			</li>
		</ul>
	</div>
</div>
