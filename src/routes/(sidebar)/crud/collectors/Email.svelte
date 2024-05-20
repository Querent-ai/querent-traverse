<script lang="ts">
	import { Button, CloseButton, Heading, Input, Label } from 'flowbite-svelte';
	import { CloseSolid } from 'flowbite-svelte-icons';
	export let hidden: boolean = true; // modal control
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	export let collectorName: string = 'Email'; // this should be passed as a prop for reusability

	let imap_server: string = '';
	let imap_port: string = '';
	let imap_username: string = '';
	let imap_password: string = '';
	let imap_folder: string = '';
	let imap_certfile: string = '';
	let imap_keyfile: string = '';

	export let configuration: {
		'IMAP Server': string;
		Port: string;
		Username: string;
		Password: string;
		Folder: string;
		'Certificate File (optional)': string;
		'Key File (optional)': string;
	};
	function initializeForm() {
		if (configuration) {
			imap_server = configuration['IMAP Server'] || '';
			imap_port = configuration['Port'] || '';
			imap_username = configuration['Username'] || '';
			imap_password = configuration['Password'] || '';
			imap_folder = configuration['Folder'] || '';
			imap_certfile = configuration['Certificate File (optional)'] || '';
			imap_keyfile = configuration['Key File (optional)'] || '';
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
			technology: 'Email',
			description: 'Configured Email collector',
			configuration: {
				'IMAP Server': imap_server,
				Port: imap_port,
				Username: imap_username,
				Password: imap_password,
				Folder: imap_folder,
				'Certificate File (optional)': imap_certfile,
				'Key File (optional)': imap_keyfile
			}
		});
		hidden = true; // Optionally close the modal/form after saving
	}
</script>

<Heading tag="h5" class="mb-6 text-sm font-semibold uppercase">Configure IMAP Server</Heading>
<CloseButton
	on:click={() => (hidden = true)}
	class="absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
/>

<form on:submit|preventDefault={saveConfiguration}>
	<div class="space-y-4">
		<Label class="space-y-2">
			<span>IMAP Server</span>
			<Input
				bind:value={imap_server}
				class="border font-normal outline-none"
				placeholder="e.g., imap.gmail.com"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Port</span>
			<Input
				bind:value={imap_port}
				type="number"
				class="border font-normal outline-none"
				placeholder="993"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Username</span>
			<Input
				bind:value={imap_username}
				class="border font-normal outline-none"
				placeholder="Enter your IMAP username"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Password</span>
			<Input
				bind:value={imap_password}
				type="password"
				class="border font-normal outline-none"
				placeholder="Enter your IMAP password"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Folder</span>
			<Input
				bind:value={imap_folder}
				class="border font-normal outline-none"
				placeholder="Enter IMAP folder path"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Certificate File (optional)</span>
			<Input
				bind:value={imap_certfile}
				class="border font-normal outline-none"
				placeholder="Path to certificate file"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Key File (optional)</span>
			<Input
				bind:value={imap_keyfile}
				class="border font-normal outline-none"
				placeholder="Path to key file"
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
