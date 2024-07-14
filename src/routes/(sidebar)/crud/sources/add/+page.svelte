<!-- src/routes/crud/sources/add/+page.svelte -->
<script lang="ts">
    import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
    import GCSForm from '../GCS.svelte';
    import AzureForm from '../Azure.svelte';
    import DriveForm from '../Drive.svelte';
    import DropboxForm from '../Dropbox.svelte';
    import EmailForm from '../Email.svelte';
    import GithubForm from '../Github.svelte';
    import JiraForm from '../Jira.svelte';
    import NewsForm from '../News.svelte';
    import AWSForm from '../S3.svelte';
    import SlackForm from '../Slack.svelte';
    import LocalStorageForm from '../LocalStorage.svelte';
    import GoogleDriveIcon from './DriveComponent.svelte';
    import FolderIcon from './FolderComponent.svelte';
    import AwsIcon from './AwsComponent.svelte';
    import MetaTag from '../../../../utils/MetaTag.svelte';
    import type { SvelteComponent } from 'svelte';

    export let configuration: Record<string, string>;

    const toggle = (component: typeof SvelteComponent | undefined, config: any) => {
        if (!component) {
            console.error('No component found for this Source type:');
            return; // Handle this case appropriately, maybe show an error message
        }
        configuration = config;
    };

    function getIcon(sourceName: string) {
        return iconMapping[sourceName as keyof typeof iconMapping];
    }

   // Holds the current component to display the form
    let selectedSource: string | null = null;

    // Initialize configuration objects for each form
    let configurations: Record<string, any> = {
        'Google Cloud Storage': { 'Bucket Name': '', Credentials: '' },
        Azure: { 'Connection URL': '', 'Account URL': '', Credentials: '', Container: '', Prefix: '' },
        'Google Drive': { 'Drive ID': '', Credentials: '' },
        Dropbox: { 'Dropbox App Key': '', 'Dropbox Refresh Token': '', 'Dropbox App Secret': '', 'Dropbox Folder Path': '' },
        Email: { 'IMAP Server': '', Port: '', Username: '', Password: '', Folder: '', 'Certificate File (optional)': '', 'Key File (optional)': '' },
        Github: { 'GitHub Username': '', 'Repository Name': '', 'Access Token': '' },
        Jira: { 'Jira Server URL': '', 'Jira Username': '', 'Jira API Token': '', 'Jira Project': '', 'Jira Query': '' },
        News: { 'API Key': '', 'Query Topic': '', 'Date Range From': '', 'Date Range To': '', Language: '', 'Sort By': '', 'Page Size': '', 'Page Number': '' },
        'AWS S3': { Bucket: '', Region: '', 'Access Key': '', 'Secret Key': '' },
        Slack: { 'Channel Name': '', 'Cursor (optional)': '', 'Include All Metadata': '', 'Inclusive (Include messages with latest or oldest timestamp)': '', 'Latest (timestamp)': '', Limit: '', 'Access Token': '' },
        'Local Storage': { 'Storage Path': '' }
    };

    const iconMapping: Record<string, any> = {
        'Google Cloud Storage': GoogleDriveIcon,
        Azure: FolderIcon,
        'Google Drive': GoogleDriveIcon,
        Dropbox: FolderIcon,
        Email: FolderIcon,
        Github: FolderIcon,
        Jira: FolderIcon,
        News: FolderIcon,
        'AWS S3': AwsIcon,
        Slack: FolderIcon,
        'Local Storage': FolderIcon
    };

    const path: string = '/crud/sources/add';
    const description: string = 'Add new source - Querent Admin Dashboard';
    const title: string = 'Querent Admin Dashboard - Add New Source';
    const subtitle: string = 'Add New Source';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
    <div class="p-4">
        <Breadcrumb class="mb-5">
            <BreadcrumbItem home>Home</BreadcrumbItem>
            <BreadcrumbItem href="/crud/sources">Sources</BreadcrumbItem>
            <BreadcrumbItem>Add New Source</BreadcrumbItem>
        </Breadcrumb>
        <Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            List of Sources
        </Heading>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {#each Object.keys(configurations) as sourceName}
                <button
                    type="button"
                    class="flex flex-col items-center space-y-2 cursor-pointer"
                    on:click={() => selectedSource = sourceName}
                    on:keydown={(event) => event.key === 'Enter' && (selectedSource = sourceName)}
                    aria-label={`Select ${sourceName}`}
                >
                    <svelte:component this={getIcon(sourceName)} class="w-16 h-16" />
                    <span class="text-center text-gray-700 dark:text-gray-200">{sourceName}</span>
                </button>
            {/each}
        </div>
        {#if selectedSource === 'Google Cloud Storage'}
            <GCSForm configuration={configurations['Google Cloud Storage']} />
        {:else if selectedSource === 'Azure'}
            <AzureForm configuration={configurations['Azure']} />
        {:else if selectedSource === 'Google Drive'}
            <DriveForm configuration={configurations['Google Drive']} />
        {:else if selectedSource === 'Dropbox'}
            <DropboxForm configuration={configurations['Dropbox']} />
        {:else if selectedSource === 'Email'}
            <EmailForm configuration={configurations['Email']} />
        {:else if selectedSource === 'Github'}
            <GithubForm configuration={configurations['Github']} />
        {:else if selectedSource === 'Jira'}
            <JiraForm configuration={configurations['Jira']} />
        {:else if selectedSource === 'News'}
            <NewsForm configuration={configurations['News']} />
        {:else if selectedSource === 'AWS S3'}
            <AWSForm configuration={configurations['AWS S3']} />
        {:else if selectedSource === 'Slack'}
            <SlackForm configuration={configurations['Slack']} />
        {:else if selectedSource === 'Local Storage'}
            <LocalStorageForm configuration={configurations['Local Storage']} />
        {/if}
    </div>
</main>

<style>
   .icon {
      width: 64px;
      height: 64px;
   }
</style>