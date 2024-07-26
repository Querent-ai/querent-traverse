<script lang="ts">
	import { onMount } from 'svelte';
	import { GoogleDriveCollectorConfig } from '../../../codegen/protos/semantics';
	import { Button, Input, Label } from 'flowbite-svelte';

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
	<Label class="mb-5 w-1/4 space-y-2">
		<span>Source ID</span>
		<Input
			bind:value={collectorId}
			class="border font-normal outline-none"
			placeholder="Enter the ID for the source"
			required
		/>
	</Label>

	<Label class="mb-5 w-1/4 space-y-2">
		<span>Folder to crawl</span>
		<Input
			bind:value={folderPath}
			class="border font-normal outline-none"
			placeholder="Enter path of your folder to crawl"
			required
		/>
	</Label>

	<div class="flex w-full justify-center space-x-4 pb-4">
		<Button type="submit" class="w-full">Save Configuration</Button>
	</div>
</form>
