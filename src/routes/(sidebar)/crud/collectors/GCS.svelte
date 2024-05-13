<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Google Cloud Storage Bucket</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>Bucket Name</span>
            <Input
                name="bucket"
                class="border font-normal outline-none"
                placeholder="Enter your storage bucket name"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Credentials (Stringified JSON)</span>
            <Textarea
                name="credentials"
                class="border font-normal outline-none"
                placeholder="Paste your JSON credentials here"
                rows="6"
                required
            ></Textarea>
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
