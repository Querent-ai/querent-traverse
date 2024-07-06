<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label, Checkbox } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control

	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	export let collectorName: string = 'Slack'; // this should be passed as a prop for reusability

	let channel_name: string = '';
	let cursor: string = '';
	let include_all_metadata: string = '';
	let inclusive: string = '';
	let latest: string = '';
	let limit: string = '';
	let access_token: string = '';

	export let configuration: {
		'Channel Name': string;
		'Cursor (optional)': string;
		'Include All Metadata': string;
		'Inclusive (Include messages with latest or oldest timestamp)': string;
		'Latest (timestamp)': string;
		Limit: string;
		'Access Token': string;
	};
	function initializeForm() {
		if (configuration) {
			channel_name = configuration['Channel Name'] || '';
			cursor = configuration['Cursor (optional)'] || '';
			include_all_metadata = configuration['Include All Metadata'] || '';
			inclusive =
				configuration['Inclusive (Include messages with latest or oldest timestamp)'] || '';
			latest = configuration['Latest (timestamp)'] || '';
			limit = configuration['Limit'] || '';
			access_token = configuration['Access Token'] || '';
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
		dispatch('saveCollector', {
			name: collectorName,
			technology: 'Slack',
			description: 'Configured Slack collector',
			configuration: {
				'Channel Name': channel_name,
				'Cursor (optional)': cursor,
				'Include All Metadata': include_all_metadata,
				'Inclusive (Include messages with latest or oldest timestamp)': inclusive,
				'Latest (timestamp)': latest,
				Limit: limit,
				'Access Token': access_token
			}
		});
		hidden = true; // Optionally close the modal/form after saving
	}
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure Slack Collector</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>Channel Name</span>
			<Input
				bind:value={channel_name}
				class="border font-normal outline-none"
				placeholder="Enter Slack channel ID (e.g., C05TA5R7D88)"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Cursor (optional)</span>
			<Input
				bind:value={cursor}
				class="border font-normal outline-none"
				placeholder="Enter cursor for pagination"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Include All Metadata</span>
			<Checkbox bind:value={include_all_metadata} class="border font-normal outline-none" />
		</Label>

		<Label class="space-y-2">
			<span>Inclusive (Include messages with latest or oldest timestamp)</span>
			<Checkbox bind:value={inclusive} class="border font-normal outline-none" />
		</Label>

		<Label class="space-y-2">
			<span>Latest (timestamp)</span>
			<Input
				bind:value={latest}
				class="border font-normal outline-none"
				placeholder="Enter latest timestamp (e.g., 0 for now)"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Limit</span>
			<Input
				bind:value={limit}
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
				bind:value={access_token}
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
