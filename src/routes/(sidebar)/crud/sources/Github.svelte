<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	export let sourceName: string = 'Github'; // this should be passed as a prop for reusability

	let github_username: string = '';
	let repository: string = '';
	let github_access_token: string = '';

	export let configuration: {
		'GitHub Username': string;
		'Repository Name': string;
		'Access Token': string;
	};
	function initializeForm() {
		if (configuration) {
			github_username = configuration['GitHub Username'] || '';
			repository = configuration['Repository Name'] || '';
			github_access_token = configuration['Access Token'] || '';
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
			technology: 'Github',
			description: 'Configured Github repository',
			configuration: {
				'GitHub Username': github_username,
				'Repository Name': repository,
				'Access Token': github_access_token
			}
		});
		hidden = true; // Optionally close the modal/form after saving
	}
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure GitHub Repository</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>GitHub Username</span>
			<Input
				bind:value={github_username}
				class="border font-normal outline-none"
				placeholder="Enter your GitHub username"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Repository Name</span>
			<Input
				bind:value={repository}
				class="border font-normal outline-none"
				placeholder="Enter the GitHub repository name"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Access Token</span>
			<Input
				bind:value={github_access_token}
				type="password"
				class="border font-normal outline-none"
				placeholder="Paste your GitHub access token"
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
