<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';
	import NotFound from '$lib/pages/NotFound.svelte';
	import Maintenance from '$lib/pages/Maintenance.svelte';
	import ServerError from '$lib/pages/ServerError.svelte';

	const pages = {
		400: Maintenance,
		404: NotFound,
		500: ServerError
	};

	const status = +$page.status;
	const index = Object.keys(pages)
		.map((x) => +x)
		.reduce((p, c) => (p < status ? c : p));
	const component = pages[index];

	import MetaTag from './utils/MetaTag.svelte';

	const path: string = `/errors/${index}`;
	const description: string = `${index} - Querent Admin Dashboard`;
	const title: string = `Querent Admin Dashboard - ${index} page`;
	const subtitle: string = `${index} page`;
</script>

<MetaTag {path} {description} {title} {subtitle} />

<svelte:component this={component}></svelte:component>
