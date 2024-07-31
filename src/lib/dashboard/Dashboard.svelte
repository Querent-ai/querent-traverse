<script lang="ts">
	import ChartWidget from '$lib/widgets/ChartWidget.svelte';
	import { Card } from 'flowbite-svelte';
	// import type { PageData } from '../../routes/(sidebar)/$types';
	import Stats from './Stats.svelte';

	import { getChartOptions } from '../../routes/(sidebar)/dashboard/chart_options';
	import TotalSources from './TotalSources.svelte';
	// import TotalEvents from './TotalEvents.svelte';

	// export let data: PageData;

	let vectorOptions = getChartOptions(false, 'vector');
</script>

<div class="mt-px space-y-4">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<Card class="min-h-[550px] min-w-[900px] rounded-lg shadow-lg">
				<div class="space-y-4">
					<ChartWidget
						chartOptions={vectorOptions}
						title="Total Events"
						subtitle="Events over Time"
					/>
					<!-- <ChartWidget
						chartOptions={graphOptions}
						title="Total Graph Events"
						subtitle="Events over Time"
					/> -->
				</div>
			</Card>
			<Card class="min-h-[550px] min-w-[900px] rounded-lg shadow-lg">
				<TotalSources />
			</Card>
		</div>
		<div class="lg:col-span-1">
			<Card class="min-h-[550px] rounded-lg shadow-lg">
				<Stats />
			</Card>
		</div>
	</div>

	<!-- <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		
		<Card class="min-h-[550px] min-w-[650px] rounded-lg shadow-lg">
			<TotalSubjects />
		</Card>
		<Card class="min-h-[550px] min-w-[650px] rounded-lg shadow-lg">
			<TotalObjects />
		</Card>
	</div> -->

	<!-- <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<div class="w-full">
			<Card class="min-h-[400px] min-w-[500px] rounded-lg shadow-lg">
				<TotalDocs />
			</Card>
		</div>

		<div class="w-full">
			<Card class="min-h-[400px] min-w-[500px] rounded-lg shadow-lg">
				<TotalEvents />
			</Card>
		</div>
	</div> -->

	<!-- <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<Card horizontal class="items-center justify-between" size="xl">
			<div class="w-full">
				<p>New products</p>
				<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
					2,340
				</p>
				<Change size="sm" value={12.5} since="Since last month" />
			</div>
			<Chart options={thickbars} class="w-full" />
		</Card>
		<Card horizontal class="items-center justify-between" size="xl">
			<div class="w-full">
				<p>Users</p>
				<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
					4,420
				</p>
				<Change size="sm" value={-3.4} since="Since last month" />
			</div>
			<Chart options={thinfillbars} class="w-full" />
		</Card>
		<Card horizontal class="items-center justify-between" size="xl">
			<div class="w-full">
				<p>Users</p>
				<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
					4,420
				</p>
				<Change size="sm" value={-3.4} since="Since last month" class="w-full" />
			</div>
			<Chart
				options={{
					...thinfillbars,
					plotOptions: {
						...thinfillbars.plotOptions,
						bar: { ...thinfillbars.plotOptions?.bar, horizontal: true }
					}
				}}
			/>
		</Card>
	</div> -->
	<!-- <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
		<TotalDocs />
		<div class="flex flex-col gap-4">
			<DesktopPc />
			<Traffic {dark} />
		</div>
	</div> -->
	<!-- <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
		<ActivityList />
		<Insights />
	</div> -->

	<!-- <Transactions {dark} /> -->
</div>
