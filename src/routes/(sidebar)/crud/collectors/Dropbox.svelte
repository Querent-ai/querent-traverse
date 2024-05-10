<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Dropbox</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>Dropbox App Key</span>
            <Input
                name="dropbox_app_key"
                class="border font-normal outline-none"
                placeholder="Enter your Dropbox App Key"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Dropbox Refresh Token</span>
            <Input
                name="dropbox_refresh_token"
                class="border font-normal outline-none"
                placeholder="Enter your Dropbox Refresh Token"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Dropbox App Secret</span>
            <Input
                name="dropbox_app_secret"
                class="border font-normal outline-none"
                placeholder="Enter your Dropbox App Secret"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Dropbox Folder Path</span>
            <Input
                name="folder_path"
                class="border font-normal outline-none"
                placeholder="Enter Dropbox Folder Path"
                required
            />
        </Label>

        <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
            <Button type="submit" class="w-full">Save Configuration</Button>
            <Button color="alternative" class="w-full" on:click={() => (hidden = true)}>
                <CloseSolid />
                Cancel
            </Button>
        </div>
    </div>
</form>
