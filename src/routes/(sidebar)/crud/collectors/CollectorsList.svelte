<script lang="ts">
	import { createEventDispatcher, SvelteComponent } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleSave(event: {
		detail: { name: any; technology: any; description: any; configuration: any };
	}) {
		// Dispatch the event upwards with more details if needed
		dispatch('collectorSaved', {
			name: event.detail.name,
			technology: event.detail.technology,
			description: event.detail.description,
			configuration: event.detail.configuration
		});
	}
	// Exported for use in parent components
	export let configuration: {};
	export let hidden: boolean;
	import Collectors from '../../../data/collectors.json';
	import DriveForm from './Drive.svelte';
	import AzureForm from './Azure.svelte';
	import DropboxForm from './Dropbox.svelte';
	import EmailForm from './Email.svelte';
	import GCSForm from './GCS.svelte';
	import GithubForm from './Github.svelte';
	import JiraForm from './Jira.svelte';
	import S3Form from './S3.svelte';
	import SlackForm from './Slack.svelte';
	import NewsForm from './News.svelte';
	import CollectorComponent from '../../../data/collector-component.json';
	import { Drawer } from 'flowbite-svelte';

	let selectedCollector: null = null;

	interface FormComponents {
		[key: string]: typeof SvelteComponent<any, any, any>;
	}

	const formComponents: FormComponents = {
		AWSForm: S3Form,
		AzureForm: AzureForm,
		DriveForm: DriveForm,
		DropboxForm: DropboxForm,
		EmailForm: EmailForm,
		GCSForm: GCSForm,
		GithubForm: GithubForm,
		JiraForm: JiraForm,
		NewsForm: NewsForm,
		SlackForm: SlackForm
	};

	function getFormComponent(name: string) {
		const entry = CollectorComponent.find((c) => c.name === name);
		return entry ? formComponents[entry.formComponent] : null;
	}
</script>

<select bind:value={selectedCollector}>
	<option disabled selected value={null}>-- Select a collector --</option>
	{#each Collectors as collector}
		<option value={collector.name}>{collector.name}</option>
	{/each}
</select>

{#if selectedCollector}
	<div class="form-container">
		{#if getFormComponent(selectedCollector)}
			<svelte:component
				this={getFormComponent(selectedCollector)}
				bind:hidden
				on:saveCollector={handleSave}
			/>
		{/if}
	</div>
{/if}

<style>
	.form-container {
		margin-top: 1rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
</style>
