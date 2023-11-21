<script>
	import '$lib/app.css';
	import {
		P,
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		DropdownDivider
	} from 'flowbite-svelte';
	import { CaretDownSolid, FacebookSolid, XCompanySolid } from 'flowbite-svelte-icons';
	import Icon from '@iconify/svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<P size="2xl" weight="bold">oooo</P>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi
			href="/news"
			class="group relative text-base font-semibold underline decoration-transparent transition-all hover:decoration-primary-600
				hover:decoration-2 hover:opacity-75"
		>
			<div class="absolute flex h-full w-full justify-center">
				<CaretDownSolid
					size="sm"
					class="-translate-y-4 text-red-600 opacity-0 transition-all group-hover:-translate-y-3 group-hover:opacity-100"
				/>
			</div>
			News
		</NavLi>
		<NavLi
			href="/blog"
			class="group relative text-base font-semibold underline decoration-transparent transition-all hover:decoration-primary-600 hover:decoration-2 hover:opacity-75"
		>
			<div class="absolute flex h-full w-full justify-center">
				<CaretDownSolid
					size="sm"
					class="-translate-y-4 text-red-600 opacity-0 transition-all group-hover:-translate-y-3 group-hover:opacity-100"
				/>
			</div>
			Blog
		</NavLi>
		<NavLi
			href="/entities"
			class="group relative text-base font-semibold underline decoration-transparent transition-all hover:decoration-primary-600 hover:decoration-2 hover:opacity-75"
		>
			<div class="absolute flex h-full w-full justify-center">
				<CaretDownSolid
					size="sm"
					class="-translate-y-4 text-red-600 opacity-0 transition-all group-hover:-translate-y-3 group-hover:opacity-100"
				/>
			</div>
			Entities
		</NavLi>
		<NavLi
			href="/disclaimer"
			class="group relative text-base font-semibold underline decoration-transparent transition-all hover:decoration-primary-600 hover:decoration-2 hover:opacity-75"
		>
			<div class="absolute flex h-full w-full justify-center">
				<CaretDownSolid
					size="sm"
					class="-translate-y-4 text-red-600 opacity-0 transition-all group-hover:-translate-y-3 group-hover:opacity-100"
				/>
			</div>
			Disclaimer
		</NavLi>
		<NavLi
			href="/about"
			class="group relative text-base font-semibold underline decoration-transparent transition-all hover:decoration-primary-600 hover:decoration-2 hover:opacity-75"
		>
			<div class="absolute flex h-full w-full justify-center">
				<CaretDownSolid
					size="sm"
					class="-translate-y-4 text-red-600 opacity-0 transition-all group-hover:-translate-y-3 group-hover:opacity-100"
				/>
			</div>
			About Us
		</NavLi>
	</NavUl>
</Navbar>

<slot />

<DropdownDivider class="mx-4 mb-4 bg-gray-300" />

<Footer footerType="socialmedia">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand href="/" name="ooooo" />
		</div>
		<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
					Resources
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/news">News</FooterLink>
					<FooterLink liClass="mb-4" href="/blog">Blog</FooterLink>
					<FooterLink liClass="mb-4" href="/entities">Entities</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
					Follow us
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/">Instagram</FooterLink>
					<FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
					<FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
					Information
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/about">About Us</FooterLink>
					<FooterLink liClass="mb-4" href="/disclaimer">Disclaimer</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="FreePS" />
		<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
			<FooterIcon href="/">
				<Icon
					icon="mdi:instagram"
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<XCompanySolid
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<FacebookSolid
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
