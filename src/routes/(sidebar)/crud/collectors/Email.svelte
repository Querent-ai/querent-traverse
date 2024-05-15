<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    
    export let collectorName: string = 'Email'; // this should be passed as a prop for reusability
    
    let bucketName: string = '';
    let credentials: string = '';

    function saveConfiguration() {
        // Dispatch event with collected data
        dispatch('saveCollector', {
            name: collectorName,
            technology: 'Email',
            description: 'Configured Email collector: ' + bucketName
        });
        hidden = true; // Optionally close the modal/form after saving
    }
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure IMAP Server</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>IMAP Server</span>
            <Input
                name="imap_server"
                class="border font-normal outline-none"
                placeholder="e.g., imap.gmail.com"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Port</span>
            <Input
                name="imap_port"
                type="number"
                class="border font-normal outline-none"
                placeholder="993"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Username</span>
            <Input
                name="imap_username"
                class="border font-normal outline-none"
                placeholder="Enter your IMAP username"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Password</span>
            <Input
                name="imap_password"
                type="password"
                class="border font-normal outline-none"
                placeholder="Enter your IMAP password"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Folder</span>
            <Input
                name="imap_folder"
                class="border font-normal outline-none"
                placeholder="Enter IMAP folder path"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Certificate File (optional)</span>
            <Input
                name="imap_certfile"
                class="border font-normal outline-none"
                placeholder="Path to certificate file"
            />
        </Label>

        <Label class="space-y-2">
            <span>Key File (optional)</span>
            <Input
                name="imap_keyfile"
                class="border font-normal outline-none"
                placeholder="Path to key file"
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
