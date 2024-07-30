<script lang="ts">
	import { onMount } from 'svelte';
	import { GoogleDriveCollectorConfig, CollectorConfig } from '../../../codegen/protos/semantics';
	import { Button, Input, Label } from 'flowbite-svelte';
	import { addDataSource } from '../../../../stores/appState';

	let drive_config: GoogleDriveCollectorConfig = {
		driveClientId: import.meta.env.VITE_DRIVE_CLIENT_ID,
		driveClientSecret: import.meta.env.VITE_DRIVE_CLIENT_SECRET,
		driveRefreshToken: '',
		folderToCrawl: '',
		id: ''
	};
	let collector_config: CollectorConfig = {
		name: '',
		drive: drive_config
	};

	let folderPath = '';
	let name = '';

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
		if (folderPath && name) {
			drive_config.folderToCrawl = folderPath;
			drive_config.id = crypto.randomUUID();
			collector_config.drive = drive_config;
			collector_config.name = name;

			addDataSource(collector_config);
			console.log('Drive Configuration:', collector_config);

			// TODO: make the API call
			window.location.href = "/crud/sources";
		} else {
			console.error('Please fill in all required fields.');
		}
	}
</script>

<div class="flex min-h-screen items-start justify-center pt-20">
	<form on:submit|preventDefault={handleSubmit} class="w-full max-w-2xl px-4">
		<Label class="mb-5 block w-full space-y-2">
			<span>Name</span>
			<Input
				bind:value={name}
				class="border font-normal outline-none"
				placeholder="Enter the name for the source"
				required
				style="min-width: 300px;"
			/>
		</Label>

		<Label class="mb-5 block w-full space-y-2">
			<span>Folder to crawl</span>
			<Input
				bind:value={folderPath}
				class="border font-normal outline-none"
				placeholder="Enter path of your folder to crawl"
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
