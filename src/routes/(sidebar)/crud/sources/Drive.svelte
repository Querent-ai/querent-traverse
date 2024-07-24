<script lang="ts">
	import { onMount } from 'svelte';

	export let configuration: {
		'Folder to crawl': string;
		'Refresh token': string;
		'Drive client id': string;
		'Drive client secret': string;
	};

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
				console.log('Access Token:', data.access_token);
				console.log('Refresh Token:', data.refresh_token);
			} catch (error) {
				console.error('Error during token exchange:', error);
			}
		}
	});

	function updateFolderPath() {
		if (configuration['Folder to crawl']) {
			console.log('Directory Path: ', configuration['Folder to crawl']);
		} else {
			console.log('No directory path entered.');
		}
	}
</script>

<form on:submit|preventDefault>
	<label for="dirPath">Enter Folder:</label>
	<input
		id="dirPath"
		type="text"
		bind:value={configuration['Folder to crawl']}
		placeholder="Enter your folder to crawl"
	/>

	<button type="button" on:click={updateFolderPath}>Submit</button>
</form>
