<script>
	import { onMount } from 'svelte';

	let dummyCSV = [
		['Entitiy', 'Entity type'],
		['Apple Inc', 'Company'],
		['Ramesh', 'Person']
	];

	let uploadedHeaders = [];
	let uploadedData = [];

	function handleFileUpload(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (e) {
				const contents = e.target.result;
				const lines = contents.split('\n');
				uploadedHeaders = lines[0].split(',');
				uploadedData = lines.slice(1).map((line) => line.split(','));
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

	{#if uploadedHeaders.length > 0}
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
	{/if}
</main>

<style>
	table {
		border-collapse: collapse;
		margin-bottom: 20px;
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
