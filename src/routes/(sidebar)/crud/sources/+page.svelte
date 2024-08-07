<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Heading } from 'flowbite-svelte';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar } from 'flowbite-svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { goto } from '$app/navigation';
	import { dataSources, deleteSourcefromList } from '../../../../stores/appState';
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
	import { Trash } from 'svelte-bootstrap-icons';

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

	function getImage(type: string): any {
		if (type == 'files') return LocalStorageIcon;
		if (type == 'drive') return GoogleDriveIcon;
		if (type == 'azure') return AzureIcon;
		if (type == 'dropbox') return DropboxIcon;
		if (type == 'email') return EmailIcon;
		if (type == 'gcs') return GCSIcon;
		if (type == 'github') return GithubIcon;
		if (type == 'jira') return JiraIcon;
		if (type == 'news') return NewsIcon;
		if (type == 'onedrive') return OnedriveIcon;
		if (type == 's3') return AwsIcon;
		if (type == 'slack') return SlackIcon;
		return null;
	}

	function deleteSource(id: string) {
		deleteSourcefromList(id);
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
			{#if Array.isArray(sources_list)}
				{#each sources_list as source}
					<TableBodyRow class="text-base">
						<TableBodyCell class="p-4">
							<svelte:component this={getImage(source.type)} />
						</TableBodyCell>
						<TableBodyCell
							class="overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400"
							>{source.name}</TableBodyCell
						>
						<TableBodyCell class="flex items-center space-x-2 whitespace-nowrap p-4">
							{source.id}
						</TableBodyCell>

						<TableBodyCell class="p-4 text-right">
							<Button color="red" size="xs" on:click={() => deleteSource(source.id)}>
								<Trash class="mr-2 h-4 w-4" />
								Delete
							</Button>
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			{/if}
		</TableBody>
	</Table>
</main>
