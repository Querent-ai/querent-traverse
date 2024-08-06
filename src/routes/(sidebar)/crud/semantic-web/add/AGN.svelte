<script lang="ts">
	import Modal from '../../sources/add/Modal.svelte';
	import { dataSources, pipelineState, updatePipeline } from '../../../../../stores/appState';
	import type {
		FixedEntities,
		SampleEntities,
		SemanticPipelineRequest
	} from '../../../../codegen/protos/semantics';
	import CsvComponent from './CSVComponent.svelte';
	import CsvModal from './CSVModal.svelte';
	import EntityModal from './EntityModal.svelte';

	let sourceIds: string[] = [];
	let selectedSourceIds: string[] = [];
	let selectedModel: number;

	$: {
		sourceIds = [];
		if ($dataSources) {
			$dataSources.forEach((metadata) => {
				sourceIds.push(metadata.id);
			});
		}
	}

	let fixed_entities: FixedEntities = {
		entities: []
	};

	let sample_entities: SampleEntities = {
		entities: []
	};

	let request: SemanticPipelineRequest = {
		collectors: [],
		fixedEntities: fixed_entities,
		sampleEntities: sample_entities,
		model: 0
	};

	let showModal = false;
	let modalMessage = '';
	let entitiesPairs: any[] = [];
	let showEntityModal = false;
	let entityTable: { entity: string; entityType: string }[] = [];

	let modelsList: Record<string, number> = {
		english: 0,
		geobert: 1
	};

	const handleSubmit = () => {
		const nonEmptyRows = entityTable.filter((row) => row.entity !== '' && row.entityType !== '');

		if (nonEmptyRows.length === 0) {
			modalMessage = 'Please add at least one entity pair.';
			showModal = true;
			return;
		}

		if (selectedModel == null || selectedModel == -1) {
			modalMessage = 'Please choose the model';
			showModal = true;
			return;
		}

		let id = crypto.randomUUID();
		updatePipeline('running', crypto.randomUUID());
		request.collectors = selectedSourceIds;
		request.model = selectedModel;

		request.fixedEntities = {
			entities: nonEmptyRows.map((row) => row.entityType)
		};
		request.sampleEntities = {
			entities: nonEmptyRows.map((row) => row.entity)
		};

		console.log('form, ', request);
		console.log('ID  ', $pipelineState.id);
		selectedModel = -1;
	};

	const handleRemoveSource = (id: string) => {
		selectedSourceIds = selectedSourceIds.filter((source) => source !== id);
	};

	const handleAddSource = (event: Event) => {
		const select: HTMLSelectElement = event.target as HTMLSelectElement;
		const selectedValue = select.value;
		if (selectedValue && !selectedSourceIds.includes(selectedValue)) {
			selectedSourceIds = [...selectedSourceIds, selectedValue];
		}
		select.value = '';
	};

	const handleAddModel = (event: Event) => {
		const select: HTMLSelectElement = event.target as HTMLSelectElement;
		const selectedValue = select.value;
		if (selectedValue) {
			if (selectedValue == 'geobert') {
				modalMessage = 'This feature is only available in the premium version.';
				showModal = true;
				select.value = '';
			} else if (selectedValue == 'english') {
				selectedModel = modelsList[selectedValue];
			} else {
				console.log('selected value: ' + selectedValue);
			}
		}
	};

	const handleClose = () => {
		console.log('Form closed');
	};

	// let entity = '';
	// let entityType = '';

	// function addEntityPair() {
	// 	if (!entity || !entityType) {
	// 		modalMessage = 'Please fill both fields: entity and entity type.';
	// 		showModal = true;
	// 		return;
	// 	}
	// 	console.log('Entity type ', entityType);
	// 	entitiesPairs.push({ entity, entityType });
	// 	entity = '';
	// 	entityType = '';
	// }

	// function handleViewPairs() {
	// 	showEntityModal = true;
	// }

	let showCsvModal = false;

	function openModal() {
		showCsvModal = true;
	}
	function closeModal() {
		showCsvModal = false;
	}

	function addRow() {
		entityTable = [...entityTable, { entity: '', entityType: '' }];
	}

	function updateRow(index: number) {
		entityTable = entityTable.filter(
			(row, i) => i !== index || row.entity !== '' || row.entityType !== ''
		);
	}
</script>

<div class="form-container">
	<button class="close-button" on:click={handleClose}>&times;</button>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="section">
			<label for="model"
				>Model <span class="tooltip"
					><span class="icon-info">i</span>
					<span class="tooltiptext"
						>Choose the model to use for Named Entity Recognition (NER). Pass 0 to use the
						English-based NER model. Pass 1 to use the Geology-based NER model.</span
					>
				</span>
			</label>
			<select id="sourceSelector" on:change={handleAddModel}>
				<option value="">Choose model</option>
				<option value={'english'}>{'English based NER Model'}</option>
				<option value={'geobert'}>{'Geology based NER Model'}</option>
			</select>
		</div>
		<div class="divider"></div>

		<!-- <div class="section">
			<button type="button" class="open-csv-btn" on:click={openModal}>Upload your CSV</button>

			<label for="entities"
				>or Enter the Entity Pair Below <span class="tooltip">
					<span class="icon-info">i</span>
					<span class="tooltiptext">Enter the entities and their types alongside</span>
				</span>
			</label>

			<input type="text" bind:value={entity} placeholder="Entity" />
			<input type="text" bind:value={entityType} placeholder="Entity Type" />
			<div class="inline-buttons">
				<button type="button" class="add-entity-btn" on:click={addEntityPair}
					>Add Entity Pair</button
				>
				<button type="button" class="view-pairs-btn" on:click={handleViewPairs}
					>View Entity Pairs</button
				>
			</div>

			<CsvModal {showCsvModal} {closeModal}>
				<CsvComponent />
			</CsvModal>

			<EntityModal bind:show={showEntityModal} {entitiesPairs} />
		</div>
		<div class="divider"></div> -->

		<div class="section">
			<div class="table-container">
				<table>
					<thead>
						<tr>
							<th>Entity</th>
							<th>Entity Type</th>
						</tr>
					</thead>
					<tbody>
						{#each entityTable as row, index}
							<tr>
								<td
									><input
										type="text"
										bind:value={row.entity}
										placeholder="Entity"
										on:input={() => updateRow(index)}
									/></td
								>
								<td
									><input
										type="text"
										bind:value={row.entityType}
										placeholder="Entity Type"
										on:input={() => updateRow(index)}
									/></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<button type="button" on:click={addRow}>Add Row</button>

			<button type="button" class="open-csv-btn" on:click={openModal}>Upload your CSV</button>

			<CsvModal {showCsvModal} {closeModal}>
				<CsvComponent />
			</CsvModal>
		</div>
		<div class="divider"></div>

		<div class="section">
			<div class="select-with-tags">
				<label for="sourceSelector"
					>Select Source <span class="tooltip"
						><span class="icon-info">i</span><span class="tooltiptext"
							>Choose all the sources from the list of sources that you have defined</span
						>
					</span></label
				>
				<select id="sourceSelector" on:change={handleAddSource}>
					<option value="">-- Choose Source --</option>
					{#each sourceIds as id}
						<option value={id}>{id}</option>
					{/each}
				</select>
				<div class="tags">
					{#each selectedSourceIds as id}
						<span class="tag">
							{id}
							<button type="button" on:click={() => handleRemoveSource(id)}>&times;</button>
						</span>
					{/each}
				</div>
			</div>
		</div>

		<button type="submit">Start Pipeline</button>
	</form>

	<Modal bind:show={showModal} message={modalMessage} />
</div>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		background: #fff;
		width: 80%;
		max-width: 500px;
		margin: 20px auto;
	}

	.form-container label {
		display: block;
		margin-bottom: 10px;
	}

	.form-container input[type='text'] {
		width: 100%;
		max-width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	.select-with-tags {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
		margin-bottom: 20px;
	}

	select {
		width: 100%;
		padding: 10px;
		border-radius: 4px;
		margin-bottom: 10px;
		box-sizing: border-box;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-bottom: 20px;
		max-height: 100px;
		overflow-y: auto;
		padding: 5px;
		width: 100%;
		align-items: center;
		border: 1px solid transparent;
	}

	.tag {
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border-radius: 20px;
		display: inline-flex;
		align-items: center;
		margin: 2px;
	}

	.tag button {
		background: none;
		border: none;
		color: white;
		cursor: pointer;
		margin-left: 5px;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		border: none;
		background: #888;
		color: white;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		font-weight: bold;
		cursor: pointer;
	}

	.close-button:hover {
		background: #555;
	}

	button[type='submit'] {
		padding: 10px 20px;
		background: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		display: block;
		margin: 20px auto;
	}

	button[type='submit']:hover {
		background: #0056b3;
	}

	.tooltip {
		position: relative;
		display: inline-block;
	}

	.icon-info {
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #000000;
		color: white;
		text-align: center;
		line-height: 18px;
		font-size: 12px;
		font-weight: bold;
		font-style: italic;
		cursor: pointer;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 300px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -150px;
		opacity: 0;
		transition: opacity 0.3s;
		font-size: 12px;
		line-height: 1.2;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
	.divider {
		height: 2px;
		background: #ccc;
		margin: 20px 0;
	}

	.section {
		margin-bottom: 20px;
		text-align: center;
	}
	.section input[type='text'] {
		margin-bottom: 10px;
	}

	.open-csv-btn {
		display: block;
		margin: 0 auto;
		background-color: #007bff;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1.1em;
		margin-bottom: 20px;
	}

	/* .add-entity-btn,
	.view-pairs-btn {
		background-color: #007bff;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 5px;
		cursor: pointer;
		margin-right: 10px;
	}

	.add-entity-btn:last-child,
	.view-pairs-btn:last-child {
		margin-right: 0;
	} */

	/* .inline-buttons {
		display: flex;
		justify-content: center;
		gap: 10px;
	} */

	.table-container {
		height: 220px;
		overflow-y: auto;
		margin-bottom: 10px;
		border: 1px solid #ddd;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead {
		position: sticky;
		top: 0;
		background-color: #f2f2f2;
		z-index: 1;
	}

	th,
	td {
		padding: 8px;
		text-align: left;
		border: none;
	}

	th {
		background-color: #f2f2f2;
		border-bottom: 1px solid #ddd;
	}

	td input {
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		padding: 4px;
		border: none;
		background: transparent;
	}

	tr {
		border-bottom: 1px solid #eee;
	}

	tr:last-child {
		border-bottom: none;
	}
</style>
