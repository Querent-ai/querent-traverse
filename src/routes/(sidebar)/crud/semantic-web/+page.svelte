<script lang="ts">
	import {
		SemanticPipelineRequest,
		FixedEntities,
		SampleEntities
	} from '../../../codegen/protos/semantics';

	import { dataSources } from '../../../../stores/appState';

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
		model: 0,
		attentionThreshold: 0
	};

	let sourceIds: string[] = [];

	$: {
		sourceIds = [];
		if ($dataSources) {
			$dataSources.forEach((metadata) => {
				sourceIds.push(metadata.id);
			});
		}
	}

	const handleSubmit = () => {
		if (request.fixedEntities && request.sampleEntities) {
			if (request.fixedEntities.entities.length !== request.sampleEntities.entities.length) {
				console.log('The number of fixed entities must match the number of sample entities.');
			} else {
				request.collectors = sourceIds;
				console.log('form, ', request);
			}
		}
	};

	// Utility to handle input changes for entities
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

	// Function to close form (simply hide or remove the form from the display)
	const handleClose = () => {
		// Add logic to close the form, e.g., remove or hide it
		console.log('Form closed');
	};
</script>

<div class="form-container">
	<button class="close-button" on:click={handleClose}>&times;</button>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="attentionThreshold">
			Attention Threshold: <span class="tooltip"
				>?
				<span class="tooltiptext"
					>R!AN uses attention matrices from transformer models to construct the semantic data
					fabric. This threshold filters out data fabrics that fall below the specified score.</span
				>
			</span>
		</label>
		<input type="number" id="attentionThreshold" bind:value={request.attentionThreshold} min="0" />

		<label for="model"
			>Model: <span class="tooltip"
				>?
				<span class="tooltiptext"
					>Choose the model to use for Named Entity Recognition (NER). Pass 0 to use the
					English-based NER model. Pass 1 to use the Geology-based NER model.</span
				>
			</span>
		</label>
		<input type="number" id="model" bind:value={request.model} min="0" max="1" />

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

		<button type="submit">Start Pipeline</button>
	</form>
</div>

<style>
	.form-container {
		border: 2px solid #ccc;
		border-radius: 8px;
		padding-top: 60px;
		padding-bottom: 40px;
		padding-left: 40px;
		padding-right: 40px;
		position: relative;
		width: 50%;
		max-width: 500px;
		margin: auto;
		margin-top: 20px;
	}

	.form-container label {
		display: block;
		margin-bottom: 10px;
	}

	.form-container input[type='text'],
	.form-container input[type='number'] {
		width: calc(100% - 22px);
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ddd;
		border-radius: 4px;
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
		margin: 0 auto;
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
