<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    
    export let collectorName: string = 'Dropbox'; // this should be passed as a prop for reusability
    
    let dropbox_app_key: string = '';
    let dropbox_refresh_token: string = '';
    let dropbox_app_secret: string = '';
    let folder_path: string = '';

    export let configuration: { 
		'Dropbox App Key': string,
        'Dropbox Refresh Token': string,
        'Dropbox App Secret': string,
        'Dropbox Folder Path': string,
	};
	$: {
        if (configuration) {
            dropbox_app_key = configuration['Dropbox App Key'] || '';
            dropbox_refresh_token = configuration["Dropbox Refresh Token"] || '';
            dropbox_app_secret = configuration['Dropbox App Secret'] || '';
            folder_path = configuration['Dropbox Folder Path'] || '';
        }
    }

    function saveConfiguration() {
        // Dispatch event with collected data
        dispatch('saveCollector', {
            name: collectorName,
            technology: 'Dropbox',
            description: 'Configured Dropbox',
            configuration: {
                'Dropbox App Key': dropbox_app_key,
                'Dropbox Refresh Token': dropbox_refresh_token,
                'Dropbox App Secret': dropbox_app_secret,
                'Dropbox Folder Path': folder_path,
            }
        });
        hidden = true; // Optionally close the modal/form after saving
    }
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Dropbox</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>Dropbox App Key</span>
            <Input
                bind:value={dropbox_app_key}
                class="border font-normal outline-none"
                placeholder="Enter your Dropbox App Key"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Dropbox Refresh Token</span>
            <Input
                bind:value={dropbox_refresh_token}
                class="border font-normal outline-none"
                placeholder="Enter your Dropbox Refresh Token"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Dropbox App Secret</span>
            <Input
                bind:value={dropbox_app_secret}
                class="border font-normal outline-none"
                placeholder="Enter your Dropbox App Secret"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Dropbox Folder Path</span>
            <Input
                bind:value={folder_path}
                class="border font-normal outline-none"
                placeholder="Enter Dropbox Folder Path"
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
