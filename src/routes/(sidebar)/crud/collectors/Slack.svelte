<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Checkbox } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Slack Collector</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>Channel Name</span>
            <Input
                name="channel_name"
                class="border font-normal outline-none"
                placeholder="Enter Slack channel ID (e.g., C05TA5R7D88)"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Cursor (optional)</span>
            <Input
                name="cursor"
                class="border font-normal outline-none"
                placeholder="Enter cursor for pagination"
            />
        </Label>

        <Label class="space-y-2">
            <span>Include All Metadata</span>
            <Checkbox name="include_all_metadata" class="border font-normal outline-none" />
        </Label>

        <Label class="space-y-2">
            <span>Inclusive (Include messages with latest or oldest timestamp)</span>
            <Checkbox name="inclusive" class="border font-normal outline-none" />
        </Label>

        <Label class="space-y-2">
            <span>Latest (timestamp)</span>
            <Input
                name="latest"
                class="border font-normal outline-none"
                placeholder="Enter latest timestamp (e.g., 0 for now)"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Limit</span>
            <Input
                name="limit"
                type="number"
                class="border font-normal outline-none"
                placeholder="Enter limit for fetched messages (e.g., 100)"
                required
                min="1"
                max="1000"
            />
        </Label>

        <Label class="space-y-2">
            <span>Access Token</span>
            <Input
                name="access_token"
                type="password"
                class="border font-normal outline-none"
                placeholder="Paste your Slack access token"
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
