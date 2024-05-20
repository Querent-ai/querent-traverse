<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control

	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	export let collectorName: string = 'Google Drive'; // this should be passed as a prop for reusability

	let drive_refresh_token: string = '';
	let drive_token: string = '';
	let drive_scopes: string = '';
	let drive_client_id: string = '';
	let drive_client_secret: string = '';
	let specific_file_type: string = '';
	let folder_to_crawl: string = '';

	export let configuration: {
		'Refresh Token': string;
		Token: string;
		Scopes: string;
		'Client ID': string;
		'Client Secret': string;
		'Specific file type': string;
		'Folder to crawl': string;
	};
	function initializeForm() {
		if (configuration) {
			drive_refresh_token = configuration['Refresh Token'] || '';
			drive_token = configuration['Token'] || '';
			drive_scopes = configuration['Scopes'] || '';
			drive_client_id = configuration['Client ID'] || '';
			drive_client_secret = configuration['Client Secret'] || '';
			specific_file_type = configuration['Specific file type'] || '';
			folder_to_crawl = configuration['Folder to crawl'] || '';
		}
	}

    onMount(() => {
        initializeForm();
    });

    $: if (!hidden && configuration) {
        initializeForm();
    }

	function saveConfiguration() {
		// Dispatch event with collected data
		dispatch('saveCollector', {
			name: collectorName,
			technology: 'Google',
			description: 'Configured Google Drive',
			configuration: {
				'Refresh Token': drive_refresh_token,
				Token: drive_token,
				Scopes: drive_scopes,
				'Client ID': drive_client_id,
				'Client Secret': drive_client_secret,
				'Specific file type': specific_file_type,
				'Folder to crawl': folder_to_crawl
			}
		});
		hidden = true; // Optionally close the modal/form after saving
	}
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Drive Collector</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Refresh Token</span>
			<Input
				bind:value={drive_refresh_token}
				class="border font-normal outline-none"
				placeholder="Type drive refresh token"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Token</span>
			<Input
				bind:value={drive_token}
				class="border font-normal outline-none"
				placeholder="Type drive token"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Scopes</span>
			<Input
				bind:value={drive_scopes}
				class="border font-normal outline-none"
				placeholder="Type drive scopes"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Client ID</span>
			<Input
				bind:value={drive_client_id}
				class="border font-normal outline-none"
				placeholder="Type drive client id"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Client Secret</span>
			<Input
				bind:value={drive_client_secret}
				class="border font-normal outline-none"
				placeholder="Type drive client secret"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Specific file type</span>
			<Input
				bind:value={specific_file_type}
				class="border font-normal outline-none"
				placeholder="Type specific file type"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Folder to crawl</span>
			<Input
				bind:value={folder_to_crawl}
				class="border font-normal outline-none"
				placeholder="Type folder to crawl"
				required
			/>
		</Label>

		<div class="flex w-full justify-center space-x-4 pb-4">
			<Button type="submit" class="w-full">Save Configuration</Button>
			<Button color="alternative" class="w-full" on:click={() => (hidden = true)}>
				<CloseSolid />
				Cancel
			</Button>
		</div>
	</div>
</form>
