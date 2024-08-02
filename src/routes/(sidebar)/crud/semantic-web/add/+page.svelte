<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
	import AGNForm from './AGN.svelte';
	import AgnIcon from './AGNIcon.svelte';

	let activeForm: string | number | null = null;

	const forms: { [key: string]: typeof AGNForm } = {
		AGN: AGNForm
	};

	function setActiveForm(formKey: string | number | null) {
		activeForm = formKey === activeForm ? null : formKey;
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

		<div class="mt-6 flex flex-wrap justify-center gap-8">
			{#each Object.keys(forms) as icon (icon)}
				<button
					type="button"
					class="flex cursor-pointer flex-col items-center space-y-3 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
					on:click={() => setActiveForm(icon)}
					aria-label={`Select ${icon}`}
				>
					<svelte:component this={getIcon(icon)} class="h-32 w-32" />
					<span class="text-center text-lg text-gray-700 dark:text-gray-200">{icon}</span>
				</button>
			{/each}
		</div>
		{#if activeForm}
			<svelte:component this={getFormComponent()} />
		{/if}
	</div>
</main>
