<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Drawer, Heading } from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalSolid, EditOutline } from 'flowbite-svelte-icons';
	import { ExclamationCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import RealtimeCollectors from '../../../data/realtime_collectors.json';
	import Collector from '../collectors/Collectors.svelte';
	import type { ComponentType } from 'svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Collector; // drawer component

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};

	const path: string = '/crud/collectors';
	const description: string = 'CRUD products examaple - Querent Admin Dashboard';
	const title: string = 'Querent Admin Dashboard - CRUD Products';
	const subtitle: string = 'CRUD Products';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/collectors">E-commerce</BreadcrumbItem>
			<BreadcrumbItem>Products</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All products
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<Input placeholder="Search for products" class="me-6 w-80 border xl:w-96" />
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
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell>
			{#each ['Product Name', 'Company', 'Description'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
			<TableHeadCell class="pe-100 ps-4 text-right font-normal">Actions</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each RealtimeCollectors as collector}
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
						<Button size="sm" class="gap-2 px-3" on:click={() => toggle(Collector)}>
							<EditOutline size="sm" /> Add
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

<Drawer placement="right" transitionType="fly" bind:hidden>
	<svelte:component this={drawerComponent} bind:hidden />
</Drawer>
