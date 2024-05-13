<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure S3 Collector</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form action="#">
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Bucket</span>
			<Input
				name="bucket"
				class="border font-normal outline-none"
				placeholder="Type bucket name"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Region</span>
			<Input name="region" class="border font-normal outline-none" placeholder="Type region of your bucket" required />
		</Label>

        <Label class="space-y-2">
			<span>Access Key</span>
			<Input
				name="access_key"
				class="border font-normal outline-none"
				placeholder="Type access key"
				required
			/>
		</Label>
        <Label class="space-y-2">
			<span>Secret Key</span>
			<Input
				name="secret_key"
				class="border font-normal outline-none"
				placeholder="Type secret_key"
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
