<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Heading } from 'flowbite-svelte';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar } from 'flowbite-svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { goto } from '$app/navigation';
	import { dataSources } from '../../../../stores/appState';
	import type { CollectorConfig } from '../../../codegen/protos/semantics';
	import GoogleDriveIcon from './add/DriveComponent.svelte';
	import LocalStorageIcon from './add/FolderComponent.svelte';
	import DropboxIcon from './add/DropboxComponent.svelte';
	import AwsIcon from './add/AwsComponent.svelte';
	import AzureIcon from './add/AzureComponent.svelte';
	import GithubIcon from './add/GithubComponent.svelte';
	import OnedriveIcon from './add/OnedriveComponent.svelte';
	import JiraIcon from './add/JiraComponent.svelte';
	import SlackIcon from './add/SlackComponent.svelte';
	import EmailIcon from './add/EmailComponent.svelte';
	import NewsIcon from './add/NewsComponent.svelte';
	import GCSIcon from './add/GCSComponent.svelte';

	// import { clearDataSources } from '../../../../stores/appState';
	// clearDataSources();


	function navigateToAddNewSource() {
		goto('/crud/sources/add');
	}

	const path: string = '/crud/source';
	const description: string = 'Sources example - Querent Admin Dashboard';
	const title: string = 'Querent Admin Dashboard - Sources';
	const subtitle: string = 'Sources';

	$: sources_list = $dataSources;

	function getImage(source: CollectorConfig): any {
		if (source.files) return LocalStorageIcon;
		if (source.drive) return GoogleDriveIcon;
		if (source.azure) return AzureIcon;
		if (source.dropbox) return DropboxIcon;
		if (source.email) return EmailIcon;
		if (source.gcs) return GCSIcon;
		if (source.github) return GithubIcon;
		if (source.jira) return JiraIcon;
		if (source.news) return NewsIcon;
		if (source.onedrive) return OnedriveIcon;
		if (source.s3) return AwsIcon;
		if (source.slack) return SlackIcon;
		return null;
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
			{#each ['Type', 'Name', 'ID'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
			<TableHeadCell class="pe-100 ps-4 text-right font-normal">Delete</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each sources_list as source}
				<TableBodyRow class="text-base">
					<TableBodyCell class="p-4">
						<svelte:component this={getImage(source)} />
					</TableBodyCell>
					<TableBodyCell
						class="overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400"
						>{source.name}</TableBodyCell
					>
					<TableBodyCell class="flex items-center space-x-2 whitespace-nowrap p-4">
						{getId(source)}
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
