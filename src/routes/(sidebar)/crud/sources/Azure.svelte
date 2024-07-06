<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control

	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	export let sourceName: string = 'Azure'; // this should be passed as a prop for reusability

	let account_url: string = '';
	let connection_url: string = '';
	let credentials: string = '';
	let container: string = '';
	let prefix: string = '';

	export let configuration: {
		'Connection URL': string;
		'Account URL': string;
		Credentials: string;
		Container: string;
		Prefix: string;
	};
	function initializeForm() {
		if (configuration) {
			account_url = configuration['Account URL'] || '';
			connection_url = configuration['Connection URL'] || '';
			credentials = configuration['Credentials'] || '';
			container = configuration['Container'] || '';
			prefix = configuration['Prefix'] || '';
		}
	}

	onMount(() => {
		initializeForm();
	});

	$: if (!hidden && configuration) {
		initializeForm();
	}

	function saveConfiguration() {
		// Dispatch event with collected data
		dispatch('saveSource', {
			name: sourceName,
			technology: 'Azure',
			description: 'Configured Azure bucket',
			configuration: {
				'Connection URL': connection_url,
				'Account URL': account_url,
				Credentials: credentials,
				Container: container,
				Prefix: prefix
			}
		});
		hidden = true; // Optionally close the modal/form after saving
	}
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Azure Source</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Connection URL</span>
			<Input
				bind:value={connection_url}
				class="border font-normal outline-none"
				placeholder="Type connection url"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Account URL</span>
			<Input
				bind:value={account_url}
				class="border font-normal outline-none"
				placeholder="Type account url"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Credentials</span>
			<Input
				bind:value={credentials}
				class="border font-normal outline-none"
				placeholder="Type credentials"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Container</span>
			<Input
				bind:value={container}
				class="border font-normal outline-none"
				placeholder="Type container"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Prefix</span>
			<Input
				bind:value={prefix}
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
