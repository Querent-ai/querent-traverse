<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import { CollectorConfig, FileCollectorConfig } from '../../../codegen/protos/semantics';
	import { dataSources, addDataSource } from '../../../../stores/appState';
	import { goto } from '$app/navigation';

	let file_collector_config: FileCollectorConfig = {
		rootPath: '',
		id: ''
	};
	let isVisible = true;
	function handleClose() {
		isVisible = false;
	}
	let collector_config: CollectorConfig = {
		name: '',
		files: file_collector_config
	};

	let root_path = '';
	let name = '';

	function updateDirectoryPath() {
		if (name && root_path) {
			file_collector_config.id = crypto.randomUUID();
			file_collector_config.rootPath = root_path;
			collector_config.files = file_collector_config;
			collector_config.name = name;

			addDataSource(collector_config);
			console.log('Object is ', $dataSources);

			// TODO: make the API call
			goto('/crud/sources');
		} else {
			console.log('No directory path or id entered.');
		}
	}
</script>

{#if isVisible}
	<div class="flex min-h-screen items-start justify-center pt-20">
		<form
			on:submit|preventDefault={updateDirectoryPath}
			class="relative rounded-lg bg-white p-4 shadow-lg"
		>
			<button
				type="button"
				class="absolute right-0 top-0 m-4 text-lg font-bold text-gray-800 hover:text-gray-600"
				on:click={handleClose}
				aria-label="Close form">&times;</button
			>

			<Label class="mb-5 block w-full space-y-2">
				<span>Enter Directory Path:</span>
				<Input
					bind:value={root_path}
					class="border font-normal outline-none"
					placeholder="Enter the directory path"
					required
					style="min-width: 300px;"
				/>
			</Label>

			<Label class="mb-5 block w-full space-y-2">
				<span>Name</span>
				<Input
					bind:value={name}
					class="border font-normal outline-none"
					placeholder="Enter name for the source"
					required
					style="min-width: 300px;"
				/>
			</Label>

			<div class="flex w-full pb-5">
				<Button type="submit" class="w-full rounded bg-blue-600 px-4 py-2 text-base text-white"
					>Save Configuration</Button
				>
			</div>
		</form>
	</div>
{/if}
