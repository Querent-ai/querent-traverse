<script lang="ts">
	import { onMount } from 'svelte';
	import { GoogleDriveCollectorConfig } from '../../../codegen/protos/semantics';

	let drive_config: GoogleDriveCollectorConfig = {
		driveClientId: import.meta.env.VITE_DRIVE_CLIENT_ID,
		driveClientSecret: import.meta.env.VITE_DRIVE_CLIENT_SECRET,
		driveRefreshToken: '',
		folderToCrawl: '',
		id: ''
	};

	let folderPath = '';
	let collectorId = '';
	let id = '';

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		if (code) {
			try {
				const response = await fetch('https://oauth2.googleapis.com/token', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: new URLSearchParams({
						code: code,
						client_id: import.meta.env.VITE_DRIVE_CLIENT_ID,
						client_secret: import.meta.env.VITE_DRIVE_CLIENT_SECRET,
						redirect_uri: import.meta.env.VITE_DRIVE_REDIRECT_URL,
						grant_type: 'authorization_code'
					})
				});

				if (!response.ok) {
					console.error('HTTP error! status:', response.status);
					console.log('Error response body:', await response.text());
					return;
				}

				const data = await response.json();
				drive_config.driveRefreshToken = data.refresh_token;
			} catch (error) {
				console.error('Error during token exchange:', error);
			}
		}
	});

	function handleSubmit() {
		if (folderPath && collectorId && id) {
			drive_config.folderToCrawl = folderPath;
			drive_config.id = collectorId;
			drive_config.id = id;
			console.log('Drive Configuration:', drive_config);
		} else {
			console.error('Please fill in all required fields.');
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="collectorId">Collector ID:</label>
	<input
		id="collectorId"
		type="text"
		bind:value={collectorId}
		placeholder="Enter your collector ID"
	/>

	<label for="folderPath">Folder to Crawl:</label>
	<input
		id="folderPath"
		type="text"
		bind:value={folderPath}
		placeholder="Enter your folder to crawl"
	/>

	<label for="id">ID</label>
	<input id="id" type="text" bind:value={id} placeholder="Enter the ID for the source" />

	<button type="submit">Submit Source</button>
</form>
