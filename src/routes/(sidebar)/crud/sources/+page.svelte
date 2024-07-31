<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Heading } from 'flowbite-svelte';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar } from 'flowbite-svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { goto } from '$app/navigation';
	import { dataSources } from '../../../../stores/appState';
	import type { CollectorConfig } from '../../../codegen/protos/semantics';

	function navigateToAddNewSource() {
		goto('/crud/sources/add');
	}

	const path: string = '/crud/source';
	const description: string = 'Sources example - Querent Admin Dashboard';
	const title: string = 'Querent Admin Dashboard - Sources';
	const subtitle: string = 'Sources';

	$: sources_list = $dataSources;

	$: {
		console.log('abcd', $dataSources);
	}

	function getId(source: CollectorConfig): string {
		if (source.files) return source.files.id;
		if (source.drive) return source.drive.id;
		if (source.azure) return source.azure.id;
		if (source.dropbox) return source.dropbox.id;
		if (source.email) return source.email.id;
		if (source.gcs) return source.gcs.id;
		if (source.github) return source.github.id;
		if (source.jira) return source.jira.id;
		if (source.news) return source.news.id;
		if (source.onedrive) return source.onedrive.id;
		if (source.s3) return source.s3.id;
		if (source.slack) return source.slack.id;
		return 'None';
	}
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/sources">Sources</BreadcrumbItem>
			<BreadcrumbItem>Sources</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All sources
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<div slot="end" class="space-x-2">
				<Button class="whitespace-nowrap" on:click={navigateToAddNewSource}>Add new source</Button>
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
			{#each ['ID', 'Type', 'Name'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
			<TableHeadCell class="pe-100 ps-4 text-right font-normal">Delete</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each sources_list as source}
				<TableBodyRow class="text-base">
					<TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell>
					<TableBodyCell class="flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{getId(source)}
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{'source.technology'}</TableBodyCell>
					<TableBodyCell
						class="max-w-md overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-lg"
						>{source.name}</TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
