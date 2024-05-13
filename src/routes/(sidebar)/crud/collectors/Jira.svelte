<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Jira Integration</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>Jira Server URL</span>
            <Input
                name="jira_server"
                class="border font-normal outline-none"
                placeholder="Enter your Jira server URL"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Jira Username</span>
            <Input
                name="jira_username"
                class="border font-normal outline-none"
                placeholder="Enter your Jira username"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Jira API Token</span>
            <Input
                name="jira_api_token"
                type="password"
                class="border font-normal outline-none"
                placeholder="Paste your Jira API token"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Jira Project</span>
            <Input
                name="jira_project"
                class="border font-normal outline-none"
                placeholder="Enter your Jira project key"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Jira Query</span>
            <Textarea
                name="jira_query"
                class="border font-normal outline-none"
                placeholder="Enter your Jira query"
                rows="3"
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
