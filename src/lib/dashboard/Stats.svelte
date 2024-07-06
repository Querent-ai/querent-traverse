<script lang="ts">
	import { Card, Heading, TabItem, Tabs } from 'flowbite-svelte';
	// import Change from '$lib/dashboard/Change.svelte';
	// import Customers from '../../routes/data/users.json';
	import { imagesPath } from '$lib/variables';
	import LastRange from '$lib/widgets/LastRange.svelte';
	import More from '$lib/widgets/More.svelte';
	// import { QuestionCircleSolid } from 'flowbite-svelte-icons';

	const products = [
		{
			label: 'total_batches',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_docs',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_events',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_events_processed',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_events_received',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_events_sent',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_graph_events',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_objects',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_predicates',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_sentences',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_subjects',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		},
		{
			label: 'total_vector_events',
			number: 0,
			image: 'iphone',
			src: 'iphone.png'
		}
	];

	// const customers = Customers.slice(0, 5);
</script>

<Card size="xl">
	<div class="mb-4 flex items-center gap-2">
		<Heading tag="h3" class="w-fit text-lg font-semibold dark:text-white">Pipeline Stats</Heading>
		<!-- <button>
			<span class="sr-only">Show information</span>
			<QuestionCircleSolid size="sm" class="text-gray-400 hover:text-gray-500" />
		</button>
		<Popover placement="bottom-start">
			<div class="w-72 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
				<h3 class="font-semibold text-gray-900 dark:text-white">Statistics</h3>
				<p>
					Stats about the given pipeline
				</p>
				<More title="Read more" href="#top" flat />
			</div>
		</Popover> -->
	</div>
	<Tabs
		style="full"
		defaultClass="flex divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
		contentClass="p-3 mt-4"
	>
		<TabItem class="w-full" open>
			<span slot="title">Pipeline ID:1234656</span>
			<ul class="-m-3 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
				{#each products as { src, image, label, number }}
					<li class="py-3 sm:py-4">
						<div class="flex items-center justify-between">
							<div class="flex min-w-0 items-center">
								<img
									class="h-10 w-10 flex-shrink-0"
									src={imagesPath(src, 'products')}
									alt={image}
								/>
								<div class="ml-3">
									<p class="truncate font-medium text-gray-900 dark:text-white">
										{label}
									</p>
								</div>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								{number}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</TabItem>
	</Tabs>

	<div
		class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6"
	>
		<LastRange />
		<More title="Full Report" href="#top" />
	</div>
</Card>
