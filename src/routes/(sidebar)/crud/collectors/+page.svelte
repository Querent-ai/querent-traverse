<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Drawer, Heading } from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalSolid, EditOutline } from 'flowbite-svelte-icons';
	import { ExclamationCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import Collector from './Collectors.svelte';
	import CollectorsList from './CollectorsList.svelte';
	import GCSForm from './GCS.svelte';
	import AzureForm from './Azure.svelte';
	import DriveForm from './Drive.svelte';
	import DropboxForm from './Dropbox.svelte';
	import EmailForm from './Email.svelte';
	import GithubForm from './Github.svelte';
	import JiraForm from './Jira.svelte';
	import NewsForm from './News.svelte';
	import AWSForm from './S3.svelte';
	import SlackForm from './Slack.svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Collector; // drawer component

	const toggle = (component: typeof SvelteComponent | undefined, config: any) => {
		if (!component) {
			console.error('No component found for this collector type:');
			return; // Handle this case appropriately, maybe show an error message
		}
		drawerComponent = component;
		configuration = config; // Directly use the provided configuration
		hidden = !hidden;
	};

	function toggleList() {
		drawerComponent = CollectorsList;
		hidden = !hidden;
	}
	let configuration = {};
	type CollectorComponents = {
		[key: string]: any;
	};
	const nameToCollector: CollectorComponents = {
		'Google Cloud Storage': GCSForm,
		Azure: AzureForm,
		'Google Drive': DriveForm,
		Dropbox: DropboxForm,
		Email: EmailForm,
		Github: GithubForm,
		Jira: JiraForm,
		News: NewsForm,
		'AWS S3': AWSForm,
		Slack: SlackForm
	};

	const path: string = '/crud/collectors';
	const description: string = 'Collectors examaple - Querent Admin Dashboard';
	const title: string = 'Querent Admin Dashboard - Collectors';
	const subtitle: string = 'Collectors';
	let collectors_list: any[] = [];
	function handleCollectorSaved(event: {
		detail: { name: any; technology: any; description: any; configuration: any };
	}) {
		const { name, technology, description, configuration } = event.detail;
		const index = collectors_list.findIndex(collector => collector.name === name);

		if (index !== -1) {
			collectors_list[index] = { name, technology, description, configuration };
			collectors_list = [...collectors_list];
		} else {
			collectors_list.push({ name, technology, description, configuration });
			collectors_list = [...collectors_list];
		}
	}
	function getComponent(name: string): typeof SvelteComponent | undefined {
		console.log(name);
		return nameToCollector[name as keyof typeof nameToCollector] || undefined;
	}
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/collectors">Collectors</BreadcrumbItem>
			<BreadcrumbItem>Collectors</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All collectors
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<Input placeholder="Search for collectors" class="me-6 w-80 border xl:w-96" />
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<CogSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<TrashBinSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<ExclamationCircleSolid size="lg" />
			</ToolbarButton>
			<ToolbarButton
				color="dark"
				class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
			>
				<DotsVerticalSolid size="lg" />
			</ToolbarButton>

			<div slot="end" class="space-x-2">
				<Button class="whitespace-nowrap" on:click={toggleList}>Add new collector</Button>
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
			{#each ['Collector', 'Company', 'Description'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
			<TableHeadCell class="pe-100 ps-4 text-right font-normal">Actions</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each collectors_list as collector}
				<TableBodyRow class="text-base">
					<TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell>
					<TableBodyCell class="flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{collector.name}
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{collector.technology}</TableBodyCell>
					<TableBodyCell
						class="max-w-md overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-lg"
						>{collector.description}</TableBodyCell
					>

					<TableBodyCell class="flex justify-end space-x-2 p-4">
						<Button
							size="sm"
							class="gap-2 px-3"
							on:click={() => toggle(getComponent(collector.name), collector.configuration)}
						>
							<EditOutline size="sm" /> Edit
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

<Drawer placement="right" transitionType="fly" bind:hidden>
	{#if drawerComponent === CollectorsList}
		<CollectorsList bind:hidden bind:configuration on:collectorSaved={handleCollectorSaved} />
	{:else}
		<svelte:component this={drawerComponent} bind:hidden bind:configuration on:collectorSaved={handleCollectorSaved}/>
	{/if}
</Drawer>
