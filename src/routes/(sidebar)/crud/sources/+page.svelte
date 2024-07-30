<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Heading } from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalSolid } from 'flowbite-svelte-icons';
	import { ExclamationCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { goto } from '$app/navigation';

	function navigateToAddNewSource() {
		goto('/crud/sources/add');
	}

	const path: string = '/crud/source';
	const description: string = 'Sources example - Querent Admin Dashboard';
	const title: string = 'Querent Admin Dashboard - Sources';
	const subtitle: string = 'Sources';
	let sources_list: any[] = [];
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
			<!-- <Input placeholder="Search for sources" class="me-6 w-80 border xl:w-96" />
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
			</ToolbarButton> -->

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
								{source.name}
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{source.technology}</TableBodyCell>
					<TableBodyCell
						class="max-w-md overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-lg"
						>{source.description}</TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
