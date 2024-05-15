<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    
    export let hidden: boolean = true; // modal control
    const dispatch = createEventDispatcher();
    
    export let collectorName: string = 'Google Cloud Storage'; // this should be passed as a prop for reusability
    
    let bucketName: string = '';
    let credentials: string = '';

    function saveConfiguration() {
        dispatch('saveCollector', {
            name: collectorName,
            technology: 'Google Cloud Storage',
            description: 'Configured GCS bucket: ' + bucketName
        });
        hidden = true; // Optionally close the modal/form after saving
    }

    function closePanel() {
        console.log("Closing panel...");
        hidden = true; // This should now reflect in the parent component
    }
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Google Cloud Storage Bucket</Heading>
<CloseButton
    on:click={closePanel}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>Bucket Name</span>
            <Input
                bind:value={bucketName}
                class="border font-normal outline-none"
                placeholder="Enter your storage bucket name"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Credentials (Stringified JSON)</span>
            <Textarea
                bind:value={credentials}
                class="border font-normal outline-none"
                placeholder="Paste your JSON credentials here"
                rows="6"
                required
            ></Textarea>
        </Label>

        <div class="flex w-full justify-center space-x-4 pb-4">
            <Button type="submit" class="w-full">Save Configuration</Button>
            <Button color="alternative" class="w-full" on:click={closePanel}>
                <CloseSolid />
                Cancel
            </Button>
        </div>
    </div>
</form>
