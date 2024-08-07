<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let entityTable: { entity: string; entityType: string }[];
	const dispatch = createEventDispatcher();

	let dummyCSV = [
		['Entitiy', 'Entity type'],
		['Apple Inc', 'Company'],
		['Ramesh', 'Person']
	];

	let uploadedHeaders: string | any[] = [];
	let uploadedData: any[] = [];

	function handleFileUpload(event: Event) {
		console.log('Event     ', event);
		event.preventDefault();
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			const reader = new FileReader();
			reader.onload = function (e) {
				const contents = e.target?.result;
				if (typeof contents === 'string') {
					const lines = contents?.split('\n');
					uploadedHeaders = lines[0].split(',');
					uploadedData = lines.slice(1).map((line: string) => line.split(','));
					uploadedData.forEach((data) => {
						if (data.length === 2 && data[0].trim() !== '' && data[1].trim() !== '') {
							entityTable.push({ entity: data[0].trim(), entityType: data[1].trim() });
						} else {
							console.log('Skipping invalid data:', data);
						}
					});
					console.log('Uploaded type:  ', entityTable);
					dispatch('entityTableUpdated', entityTable);
				} else {
					console.error('Failed to read file as string');
				}
			};
			reader.readAsText(file);
		}
	}
</script>

<main>
	<h2>Dummy CSV</h2>
	<table>
		<thead>
			<tr>
				{#each dummyCSV[0] as header}
					<th>{header}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each dummyCSV.slice(1) as row}
				<tr>
					{#each row as cell}
						<td>{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	<h2>Upload CSV</h2>
	<input type="file" accept=".csv" on:change={handleFileUpload} />

	<!-- {#if uploadedHeaders.length > 0}
		<h3>Uploaded CSV Contents</h3>
		<table>
			<thead>
				<tr>
					{#each uploadedHeaders as header}
						<th>{header}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each uploadedData as row}
					<tr>
						{#each row as cell}
							<td>{cell}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if} -->
</main>

<style>
	table {
		border-collapse: collapse;
		margin-bottom: 20px;
		width: 100%;
	}
	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}
	th {
		background-color: #f2f2f2;
	}
</style>
