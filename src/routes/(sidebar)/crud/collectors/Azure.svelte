<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Azure Collector</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Connection URL</span>
			<Input
				name="connection_url"
				class="border font-normal outline-none"
				placeholder="Type connection url"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Account URL</span>
			<Input name="account_url" class="border font-normal outline-none" placeholder="Type account url" required />
		</Label>

        <Label class="space-y-2">
			<span>Credentials</span>
			<Input
				name="credentials"
				class="border font-normal outline-none"
				placeholder="Type credentials"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Container</span>
			<Input
				name="container"
				class="border font-normal outline-none"
				placeholder="Type container"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Prefix</span>
			<Input
				name="prefix"
				class="border font-normal outline-none"
				placeholder="Type prefix"
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
