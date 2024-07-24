<script>
	export let configuration = { 'Storage Path': '' }; // Configuration is received and exported

	// Function to handle the button click
	function updateDirectoryPath() {
		if (configuration['Storage Path']) {
			console.log('Directory Path: ', configuration['Storage Path']); // Print the path to the console
		} else {
			console.log('No directory path entered.');
		}
	}
</script>

<form on:submit|preventDefault>
	<label for="dirPath">Enter Directory Path:</label>
	<input
		id="dirPath"
		type="text"
		bind:value={configuration['Storage Path']}
		placeholder="Enter your directory path here"
	/>

	<button type="button" on:click={updateDirectoryPath}>Submit</button>
</form>
