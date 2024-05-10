<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure GitHub Repository</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>GitHub Username</span>
            <Input
                name="github_username"
                class="border font-normal outline-none"
                placeholder="Enter your GitHub username"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Repository Name</span>
            <Input
                name="repository"
                class="border font-normal outline-none"
                placeholder="Enter the GitHub repository name"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Access Token</span>
            <Input
                name="github_access_token"
                type="password"
                class="border font-normal outline-none"
                placeholder="Paste your GitHub access token"
                required
            />
        </Label>

        <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
            <Button type="submit" class="w-full">Connect</Button>
            <Button color="alternative" class="w-full" on:click={() => (hidden = true)}>
                <CloseSolid />
                Cancel
            </Button>
        </div>
    </div>
</form>
