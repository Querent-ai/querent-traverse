<script lang="ts">
	import Modal from '../../sources/add/Modal.svelte';
	import { dataSources, pipelineState, updatePipeline } from '../../../../../stores/appState';
	import type {
		FixedEntities,
		SampleEntities,
		SemanticPipelineRequest
	} from '../../../../codegen/protos/semantics';

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

	let modelsList: Record<string, number> = {
		english: 0,
		geobert: 1
	};

	const handleSubmit = () => {
		if (request.fixedEntities && request.sampleEntities) {
			if (request.fixedEntities.entities.length !== request.sampleEntities.entities.length) {
				console.log('The number of fixed entities must match the number of sample entities.');
			} else if (selectedModel == null || selectedModel == -1) {
				modalMessage = 'Please choose the model';
				showModal = true;
			} else {
				let id = crypto.randomUUID();
				updatePipeline('running', crypto.randomUUID());
				request.collectors = selectedSourceIds;
				request.model = selectedModel;
				console.log('form, ', request);
				console.log('ID  ', $pipelineState.id);
				selectedModel = -1;
			}
		}
	};

	const handleEntityChange = (event: Event, type: 'fixed' | 'sample') => {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		const entities = value
			.split(',')
			.map((item) => item.trim())
			.filter((item) => item !== '');
		if (type === 'fixed') {
			if (!request.fixedEntities) {
				request.fixedEntities = { entities: [] };
			}
			request.fixedEntities.entities = entities;
		} else if (type === 'sample') {
			if (!request.sampleEntities) {
				request.sampleEntities = { entities: [] };
			}
			request.sampleEntities.entities = entities;
		}
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
</script>

<div class="form-container">
	<button class="close-button" on:click={handleClose}>&times;</button>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="model"
			>Model: <span class="tooltip"
				>?
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

		<label for="fixedEntities"
			>Fixed Entities (comma-separated): <span class="tooltip"
				>?
				<span class="tooltiptext"
					>A list of entities around which the semantic data fabric will be constructed.</span
				>
			</span>
		</label>
		<input
			type="text"
			id="fixedEntities"
			on:input={(e) => handleEntityChange(e, 'fixed')}
			placeholder="Enter fixed entities separated by commas"
		/>

		<label for="sampleEntities"
			>Sample Entities (comma-separated): <span class="tooltip"
				>?
				<span class="tooltiptext">
					The types of the entities specified in fixed_entities. The number of fixed entities and
					sample entities should be same</span
				>
			</span>
		</label>
		<input
			type="text"
			id="sampleEntities"
			on:input={(e) => handleEntityChange(e, 'sample')}
			placeholder="Enter sample entities separated by commas"
		/>

		<div class="select-with-tags">
			<label for="sourceSelector"
				>Select Source: <span class="tooltip"
					>?<span class="tooltiptext"
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
						<button on:click={() => handleRemoveSource(id)}>&times;</button>
					</span>
				{/each}
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
		border-bottom: 1px dotted black;
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
		margin-left: -75px;
		opacity: 0;
		transition: opacity 0.3s;
		font-size: 12px;
		line-height: 1.2;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
</style>
