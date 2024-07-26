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

<form on:submit|preventDefault={updateDirectoryPath}>
	<Label class="mb-5 w-1/4 space-y-2">
		<span>Enter Directory Path:</span>
		<Input
			bind:value={root_path}
			class="border font-normal outline-none"
			placeholder="Enter the directory path"
			required
		/>
	</Label>

	<Label class="mb-5 w-1/4 space-y-2">
		<span>Source ID:</span>
		<Input
			bind:value={id}
			class="border font-normal outline-none"
			placeholder="Enter ID for the source"
			required
		/>
	</Label>

	<div class="left flex w-1/4 space-x-4 pb-5">
		<Button type="submit" class="w-full">Save Configuration</Button>
	</div>
</form>
