<script>
	import Icon from '@iconify/svelte';
	import { name } from '$lib/stores';
	import * as Dialog from '$lib/components/ui/dialog';

	const videos = [
		{
			title: 'Package of videos hosted on Mega.nz',
			link: 'https://mega.nz/folder/YXE2lSJK#MgKFDUF1d8d5zPXvd8wIwQ'
		},
		{
			title: 'Palestine in 1896',
			link: 'https://youtu.be/1vaIK8wlAl0?si=MCT3aW_qosgydbn0'
		},
		{
			title: 'First Nakba (in Arabic)',
			link: 'https://youtu.be/hxxP9NZsHEc?si=ScyoDiaCfky5oMFo'
		},
		{
			title: 'EX Zionist turned Pro Palestinian for ONE REASON! - David Mivasair',
			link: 'https://www.youtube.com/watch?v=yFMVJtm38tU'
		},
		{
			title: 'Tantura (Movie)',
			link: 'https://www.imdb.com/title/tt16378034/?ref_=nm_flmg_t_1_dr'
		},
		{
			title:
				'Israeli soldiers blow up a building in Gaza Strip as festive gifts on the occasion of Hanukkah',
			link: 'https://www.instagram.com/p/C0xE1f-K23_/'
		},
		{
			title:
				'Hebron, the West Bank | The Israeli Military, against humanitarian law, and its own law, detained an 8 year old without the presence of his parents to interogate him down a locked alleyway.',
			link: 'https://www.instagram.com/p/C0tu0ouM7iW/'
		}
	];

	const links = [
		{
			title: 'Israeli army killing their own civilians',
			link: 'https://new.thecradle.co/articles-id/7775'
		},
		{
			title: 'Israel proving Palestinian existence before 1948 in propaganda video',
			link: 'https://twitter.com/Israel/status/1729874807356010621'
		},
		{
			title: 'Evidence of Israeli army killing Israeli civilians',
			link: 'https://twitter.com/21WIRE/status/1728879330866971006'
		},
		{
			title: 'Israeli child burned completely by Israeli tank',
			link: 'https://twitter.com/NurAinfleur/status/1730190685809365251'
		},
		{
			title: 'Executions And Mass Graves In Tantura, 23 May 1948',
			link: 'https://forensic-architecture.org/investigation/executions-and-mass-graves-in-tantura-23-may-1948/'
		},
		{
			title: 'Tantura Massacre Eyewittnesses (PDF in Arabic)',
			link: 'https://www.palestine-studies.org/sites/default/files/mdf-articles/شهود_عيان_يروون.pdf'
		},
		{
			title: '"Nakba Law" - Amendment No. 40 to the Budgets Foundations Law ',
			link: 'https://www.adalah.org/en/law/view/496'
		},
		{
			title: 'Canaan (origins of Palestine, not Israelites)',
			link: 'https://www.britannica.com/place/Canaan-historical-region-Middle-East'
		},
		{
			title: 'Safsaf Massacre',
			link: 'https://en.wikipedia.org/wiki/Safsaf_massacre'
		},
		{
			title: 'Kafr Qasim Massacre',
			link: 'https://en.wikipedia.org/wiki/Kafr_Qasim_massacre'
		},
		{
			title: 'Eilabun Massacre',
			link: 'https://en.wikipedia.org/wiki/Eilabun_massacre'
		},
		{
			title: 'Saliha',
			link: 'https://en.wikipedia.org/wiki/Saliha'
		},
		{
			title: 'Hula Massacre',
			link: 'https://en.wikipedia.org/wiki/Hula_massacre'
		},
		{
			title: 'Qana Massacre',
			link: 'https://en.m.wikipedia.org/wiki/Qana_massacre'
		},
		{
			title: 'Rafah Massacre',
			link: 'https://en.wikipedia.org/wiki/Rafah_massacre'
		},
		{
			title: 'Siege of Tel al-Zaatar',
			link: 'https://en.wikipedia.org/wiki/Siege_of_Tel_al-Zaatar'
		},
		{
			title: 'Sabra and Shatila Massacre',
			link: 'https://simple.wikipedia.org/wiki/Sabra_and_Shatila_massacre'
		},
		{
			title: 'Balad al-Shaykh Massacre',
			link: 'https://en.wikipedia.org/wiki/Balad_al-Shaykh_massacre'
		},
		{
			title: 'Explainer: The Deir Yassin Massacre',
			link: 'https://imeu.org/article/explainer-the-deir-yassin-massacre'
		},
		{
			title:
				'A history stained with innocent blood: A chronicle of Israel’s massacres in Palestine',
			link: 'https://english.ahram.org.eg/News/510520.aspx'
		},
		{
			title: 'Abu Susha',
			link: 'https://en.wikipedia.org/wiki/Abu_Shusha'
		},
		{
			title: 'Tantura Massacre',
			link: 'https://en.wikipedia.org/wiki/Tantura_massacre'
		},
		{
			title: 'Remembering the Qibya massacre of 1953',
			link: 'https://english.wafa.ps/Pages/Details/126449'
		},
		{
			title: 'Qibya Massacre',
			link: 'https://en.wikipedia.org/wiki/Qibya_massacre'
		},
		{
			title: 'Tomorrow .. The anniversary of the massacre of the Center in Qalqilya',
			link: 'https://www.palpress.net/News/3838'
		},
		{
			title: 'Kafr Qasim Massacre',
			link: 'https://en.wikipedia.org/wiki/Kafr_Qasim_massacre'
		},
		{
			title: 'Khan Yunis Massacre',
			link: 'https://en.wikipedia.org/wiki/Khan_Yunis_massacre'
		},
		{
			title: '1990 Temple Mount killings',
			link: 'https://en.wikipedia.org/wiki/1990_Temple_Mount_killings'
		},
		{
			title: 'Cave of the Patriarchs Massacre (this resulted in the Hamas we know today)',
			link: 'https://en.wikipedia.org/wiki/Cave_of_the_Patriarchs_massacre'
		},
		{
			title: 'Battle of Jenin (2002)',
			link: 'https://en.wikipedia.org/wiki/Battle_of_Jenin_(2002)'
		}
	];

	const books = [
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
		},
		{
			title: 'Dissection of the Israeli mind (in Arabic)',
			link: 'https://www.goodreads.com/book/show/18386339'
		},
		{
			title: 'The Arabs: A History',
			link: 'https://www.goodreads.com/book/show/4100352-the-arabs'
		},
		{
			title: 'The Ethnic Cleansing of Palestine (Ilan Pappe is Israeli btw)',
			link: 'https://www.amazon.com/Ethnic-Cleansing-Palestine-Ilan-Pappe/dp/1851685553'
		},
		{
			title: 'Ten Myths about Israel',
			link: 'https://www.amazon.com/Myths-About-Israel-Ilan-Pappe/dp/1786630192'
		},
		{
			title: 'Palestine: ...it is something colonial (Decolonizing the mind)',
			link: 'https://www.amazon.com/Palestine-something-colonial-Decolonizing-mind/dp/9074897819'
		},
		{
			title: 'The Israli - Palestinien Conflict: 100 Question and Answers (in Arabic)',
			link: 'https://www.goodreads.com/book/show/17458561'
		},
		{
			title:
				'Collusion Across The Jordan: King Abdullah, The Zionist Movement, And The Partition Of Palestine',
			link: 'https://www.goodreads.com/book/show/614966.Collusion_Across_The_Jordan'
		}
	];

	const images = {
		prefix: '/resources/gallery/images/',
		images: [
			{
				src: 'jaffa1937.jpg'
			},
			{
				src: 'workpermit.jpg'
			},
			{
				src: 'shakespear.jpg'
			},
			{
				src: 'publicrelations.png'
			},
			{
				src: 'balfourdeclaration.jpg'
			},
			{
				src: 'banner.jpeg'
			},
			{
				src: 'dirtyplan.png'
			},
			{
				src: 'documents.jpg'
			},
			{
				src: 'exidf.jpeg'
			},
			{
				src: 'handshake.jpg'
			},
			{
				src: 'hypocrites.jpg'
			},
			{
				src: 'palestinenewspaper.jpg'
			},
			{
				src: 'palestinemap.jpeg'
			},
			{
				src: 'israelsexualassault.jpg'
			}
		]
	};
</script>

<svelte:head>
	<title>{$name} | Gallery</title>
	<meta name="og:title" content="{$name} | Gallery" />
</svelte:head>

<div class="w-full">
	<div class="coolbg h-32 w-full">
		<div class="flex h-full w-full items-center justify-between bg-black bg-opacity-30">
			<div class="px-5">
				<a href="/resources">
					<Icon icon="solar:arrow-left-linear" class="text-5xl text-slate-100" />
				</a>
			</div>
			<h1 class="text-center text-4xl font-black text-slate-100">Gallery</h1>
			<div class="p-5"></div>
		</div>
	</div>

	<div class="p-8 md:p-28">
		<h1 class="py-2 text-center text-3xl font-semibold">
			A compilation of articles, media and resources about Palestine.
		</h1>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Links
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
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Videos/Movies
		</h1>
		<ul class="ms-4 list-disc">
			{#each videos as link, i (i)}
				<li>
					<p class="my-4 font-semibold underline md:text-xl">
						<a href={link.link}>{link.title}</a>
					</p>
				</li>
			{/each}
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Books (and PDFs)
		</h1>
		<ul class="ms-4 list-disc">
			{#each books as link, i (i)}
				<li>
					<p class="my-4 font-semibold underline md:text-xl">
						<a href={link.link}>{link.title}</a>
					</p>
				</li>
			{/each}
		</ul>
		<h1 class="mb-4 mt-5 flex items-center gap-2 text-2xl font-bold md:mt-6 md:text-3xl">
			<Icon icon="fa:caret-right" class="text-3xl" />
			Media
		</h1>
		<div class="inline-flex flex-wrap justify-center gap-6">
			{#each images.images as image, i (i)}
				<Dialog.Root>
					<Dialog.Trigger>
						<div
							class="h-72 w-48 overflow-hidden rounded-md bg-slate-400 transition-all hover:ring-2 hover:ring-red-700 hover:brightness-90"
						>
							<img
								src={images.prefix + image.src}
								alt={image.src}
								class="h-full w-full object-cover transition-all hover:scale-105"
							/>
						</div>
					</Dialog.Trigger>
					<Dialog.Content class="h-screen w-screen lg:h-auto lg:max-h-full lg:min-h-0 lg:w-auto">
						<img
							src={images.prefix + image.src}
							alt={image.src}
							class="h-full w-full rounded-md object-contain transition-all"
						/>
					</Dialog.Content>
				</Dialog.Root>
			{/each}
		</div>
	</div>
</div>
