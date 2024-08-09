<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
	import AGNForm from './AGN.svelte';
	import AgnIcon from './AGNIcon.svelte';
	export let formOpen = true;

	let activeForm: string | number | null = null;

	const forms: { [key: string]: typeof AGNForm } = {
		AGN: AGNForm
	};

	function setActiveForm(formKey: string | number | null) {
		activeForm = formKey === activeForm ? null : formKey;
		formOpen = activeForm !== null;

		console.log('Form open    ', formOpen);
		console.log('Active form ', activeForm);
		console.log('Form key ', formKey);
	}

	function getFormComponent() {
		if (activeForm && forms[activeForm]) {
			return forms[activeForm];
		}
		return null;
	}

	function getIcon(iconName: string) {
		if (iconName == 'AGN') {
			return AgnIcon;
		}
		return null;
	}

	function handleFormClose() {
		activeForm = null;
		formOpen = false;
	}
</script>

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/semantic-web">Pipelines</BreadcrumbItem>
			<BreadcrumbItem>Start New Pipeline</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			List of Engines
		</Heading>

		<div class="mt-6 flex flex-wrap justify-start gap-8">
			{#each Object.keys(forms) as icon (icon)}
				<button
					type="button"
					class="flex cursor-pointer items-start space-x-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
					on:click={() => setActiveForm(icon)}
					aria-label={`Select ${icon}`}
				>
					<img class="h-16 w-16" src="/images/icon.png" alt="" />
					<div class="text-left">
						<span class="text-left text-lg text-gray-700 dark:text-gray-200">{icon}</span>
						<div class="text-sm text-gray-500 dark:text-gray-400">Attention Graph Network</div>
					</div>
				</button>
			{/each}
		</div>
		{#if activeForm}
			<svelte:component this={getFormComponent()} {formOpen} on:close={handleFormClose} />
		{/if}
	</div>
</main>
