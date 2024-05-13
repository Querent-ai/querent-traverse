<script lang="ts">
    import { Button, CloseButton, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
    import { CloseSolid } from 'flowbite-svelte-icons';
    export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure News API</Heading>
<CloseButton
    on:click={() => (hidden = true)}
    class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
    <div class="space-y-4">
        <Label class="space-y-2">
            <span>API Key</span>
            <Input
                name="api_key"
                type="password"
                class="border font-normal outline-none"
                placeholder="Enter your API key"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Query Topic</span>
            <Input
                name="query"
                class="border font-normal outline-none"
                placeholder="Enter topic (e.g., technology)"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Date Range From</span>
            <Input
                name="from_date"
                type="date"
                class="border font-normal outline-none"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Date Range To</span>
            <Input
                name="to_date"
                type="date"
                class="border font-normal outline-none"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Language</span>
            <Select name="language" class="border-gray-300 font-normal outline-none">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <!-- Add other languages as needed -->
            </Select>
        </Label>

        <Label class="space-y-2">
            <span>Sort By</span>
            <Select name="sort_by" class="border-gray-300 font-normal outline-none">
                <option value="publishedAt">Published At</option>
                <option value="relevancy">Relevancy</option>
                <option value="popularity">Popularity</option>
            </Select>
        </Label>

        <Label class="space-y-2">
            <span>Page Size</span>
            <Input
                name="page_size"
                type="number"
                class="border font-normal outline-none"
                placeholder="Enter page size (e.g., 5)"
                min="1"
                max="100"
                required
            />
        </Label>

        <Label class="space-y-2">
            <span>Page Number</span>
            <Input
                name="page"
                type="number"
                class="border font-normal outline-none"
                placeholder="Enter page number (e.g., 1)"
                min="1"
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
