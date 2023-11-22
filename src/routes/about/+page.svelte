<script>
	import { Heading, P } from 'flowbite-svelte';
	import { CaretRightSolid } from 'flowbite-svelte-icons';
</script>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-center bg-black bg-opacity-30">
			<Heading class="text-center text-slate-100">About Us</Heading>
		</div>
	</div>
	<div class="p-8 md:p-28">
		<P class="indent-3 text-xl">
			This website was created to expose Israeli propaganda, lies, fake news and misinformation.
			<br />
			It was also created to condemn the Zionist individuals, professors, politicians and organizations
			who have been spreading hate, racism and Islamophobia towards the Arabic nations.
			<br />
			As members of the pro-Palestine community, we have the right to protest and resist the Zionist
			occupation, so if you are interested into the Palestinian issue, we invite you to join us in our
			online protest.
			<br />
			<br />
			Contact us to learn more about our humanitarian movement and to participate in it.
		</P>
		<Heading class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<CaretRightSolid size="md" />
			Social Media
		</Heading>
		<ul class="ms-4 list-disc">
			<li><P class="my-3 font-semibold underline md:text-xl"><a href="/">Facebook</a></P></li>
			<li><P class="my-3 font-semibold underline md:text-xl"><a href="/">Instagram</a></P></li>
			<li><P class="my-3 font-semibold underline md:text-xl"><a href="/">X</a></P></li>
		</ul>
	</div>
</div>
