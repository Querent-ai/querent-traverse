<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import { FileCollectorConfig } from '../../../codegen/protos/semantics';

	let file_collector_config: FileCollectorConfig = {
		rootPath: '',
		id: ''
	};

	let root_path = '';
	let id = '';

	function updateDirectoryPath() {
		if (id && root_path) {
			file_collector_config.id = id;
			file_collector_config.rootPath = root_path;

			console.log('Object is ', file_collector_config);
		} else {
			console.log('No directory path or id entered.');
		}
	}
</script>

<div class="flex min-h-screen items-start justify-center pt-20">
	<form on:submit|preventDefault={updateDirectoryPath} class="w-full max-w-2xl px-4">
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
			<span>Source ID:</span>
			<Input
				bind:value={id}
				class="border font-normal outline-none"
				placeholder="Enter ID for the source"
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
