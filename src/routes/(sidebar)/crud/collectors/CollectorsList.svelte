<script>
// @ts-nocheck

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

    let selectedCollector = null;

    const formComponents = {
        'AWSForm': S3Form,
        'AzureForm': AzureForm,
        'DriveForm': DriveForm,
        'DropboxForm': DropboxForm,
        'EmailForm': EmailForm,
        'GCSForm': GCSForm,
        'GithubForm': GithubForm,
        'JiraForm': JiraForm,
        'NewsForm': NewsForm,
        'SlackForm': SlackForm,
    };

    function getFormComponent(name) {
      const entry = CollectorComponent.find(c => c.name === name);
      return entry ? formComponents[entry.formComponent] : null;
    }
</script>

<style>
    .form-container {
        margin-top: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
</style>

<select bind:value={selectedCollector}>
    <option disabled selected value={null}>-- Select a collector --</option>
    {#each Collectors as collector}
        <option value={collector.name}>{collector.name}</option>
    {/each}
</select>

{#if selectedCollector}
    <div class="form-container">
        {#if getFormComponent(selectedCollector)}
            <svelte:component this={getFormComponent(selectedCollector)} />
        {/if}
    </div>
{/if}
