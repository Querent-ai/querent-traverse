<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    
    export let collectorName: string = 'Google Drive'; // this should be passed as a prop for reusability
    
    let bucketName: string = '';
    let credentials: string = '';

    function saveConfiguration() {
        // Dispatch event with collected data
        dispatch('saveCollector', {
            name: collectorName,
            technology: 'Google',
            description: 'Configured Google Drive: ' + bucketName
        });
        hidden = true; // Optionally close the modal/form after saving
    }
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Drive Collector</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Refresh Token</span>
			<Input
				name="drive_refresh_token"
				class="border font-normal outline-none"
				placeholder="Type drive refresh token"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Token</span>
			<Input name="drive_token" 
            class="border font-normal outline-none" 
            placeholder="Type drive token" 
            required />
		</Label>

        <Label class="space-y-2">
			<span>Scopes</span>
			<Input
				name="drive_scopes"
				class="border font-normal outline-none"
				placeholder="Type drive scopes"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Client ID</span>
			<Input
				name="drive_client_id"
				class="border font-normal outline-none"
				placeholder="Type drive client id"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Client Secret</span>
			<Input
				name="drive_client_secret"
				class="border font-normal outline-none"
				placeholder="Type drive client secret"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Specific file type</span>
			<Input
				name="specific_file_type"
				class="border font-normal outline-none"
				placeholder="Type specific file type"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Folder to crawl</span>
			<Input
				name="folder_to_crawl"
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
