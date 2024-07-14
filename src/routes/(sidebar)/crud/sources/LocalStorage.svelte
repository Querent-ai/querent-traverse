<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	export let configuration = { 'Storage Path': '' }; // Define the configuration prop type

	let selectedDirectory = writable('');

	function handleSelectFolder() {
		const input = document.createElement('input');
		input.type = 'file';
		input.webkitdirectory = true;

		input.addEventListener('change', (e) => {
			const files = e.target.files;
			if (files.length > 0) {
				const directory = files[0].webkitRelativePath.split('/')[0];
				selectedDirectory.set(directory);
				configuration['Storage Path'] = directory; // Update the configuration object
			}
		});

		input.click();
	}
</script>

<form on:submit|preventDefault>
	<button type="button" on:click={handleSelectFolder}>Select the folder</button>

	{#if $selectedDirectory}
		<p>Selected directory: {$selectedDirectory}</p>
	{/if}
</form>
