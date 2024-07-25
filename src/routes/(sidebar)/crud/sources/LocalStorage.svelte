<script lang="ts">
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

<form on:submit|preventDefault>
	<label for="dirPath">Enter Directory Path:</label>
	<input
		id="dirPath"
		type="text"
		bind:value={root_path}
		placeholder="Enter your directory path here"
	/>

	<label for="id">Enter ID for source:</label>
	<input id="id" type="text" bind:value={id} placeholder="Enter ID for the source" />

	<button type="button" on:click={updateDirectoryPath}>Submit</button>
</form>
