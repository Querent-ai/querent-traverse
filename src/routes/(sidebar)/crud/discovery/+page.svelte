<script lang="ts">
	const categories = {
		mostFrequent: [
			{
				description:
					"'Temperature' (reservoir_characteristic) and 'Depth' (reservoir_characteristic): 270 times"
			},
			{ description: "'eagle ford' (reservoir) and 'Depth' (reservoir_characteristic): 140 times" },
			{
				description:
					"'Pressure' (reservoir_characteristic) and 'Temperature' (reservoir_characteristic): 122 times"
			},
			{ description: "'Depth' (reservoir_characteristic) and 'eagle ford' (reservoir): 122 times" },
			{ description: "'eagle ford' (reservoir) and 'Carbonate' (rock_type): 120 times" }
		],
		mostUnique: [
			{
				description:
					"'Temperature' (reservoir_characteristic) and 'Production rate' (production_metric): 1 times"
			},
			{
				description:
					"'oil well' (hydrocarbon_source) and 'Depth' (reservoir_characteristic): 1 times"
			},
			{
				description: "'oil field' (hydrocarbon_source) and 'oil well' (hydrocarbon_source): 1 times"
			},
			{
				description:
					"'Gas injection' (recovery_technique) and 'Water injection' (recovery_technique): 1 times"
			},
			{
				description:
					"'Production rate' (production_metric) and 'oil field' (hydrocarbon_source): 1 times"
			}
		],
		richestMixDocuments: [
			{
				description:
					"Modeling interwell fracture interference and Huff-N-Puff pressure containment in eagle ford using EDFM.pdf': 16 unique subjects and objects"
			},
			{
				description:
					"Decline curve analysis of shale oil production_ The case of Eagle Ford.pdf': 14 unique subjects and objects"
			},
			{
				description:
					"Rock Typing in Organic Shales_ Eagle Ford_ Woodford_ Barnett and Wolfcamp Formations.pdf': 14 unique subjects and objects"
			},
			{
				description:
					"Coupled geomechanics and fluid flow model for production optimization in naturally fractured shale reservoirs.pdf': 13 unique subjects and objects"
			},
			{
				description:
					"Asphaltene Precipitation and Deposition during Nitrogen Gas Cyclic Miscible and Immiscible Injection in Eagle Ford Shale and Its Impact on Oil Recovery.pdf': 12 unique subjects and objects"
			}
		],
		highImpactDocuments: [
			{
				description:
					"Modeling interwell fracture interference and Huff-N-Puff pressure containment in eagle ford using EDFM.pdf': 42 unique context"
			},
			{
				description:
					"__Sub-Salt Carbonate Rocks in the Rozhkovsky Structure_ Northern Precaspian Basin_ Kazakhstan_ Implications for the Formation of Carbonate Reservoir in a Relatively__.pdf': 35 unique context"
			},
			{
				description:
					"Organic petrology_ maturation_ thermal and burial history analysis_ and hydrocarbon generation and migration of the Saudi Arabian Paleozoic Petroleum__.pdf': 33 unique context"
			},
			{
				description:
					"__petrology_ maturation_ thermal and burial history analysis_ and hydrocarbon generation and migration modeling of the Saudi Arabian paleozoic petroleum__.pdf': 33 unique context"
			},
			{
				description:
					"Asphaltene Precipitation and Deposition during Nitrogen Gas Cyclic Miscible and Immiscible Injection in Eagle Ford Shale and Its Impact on Oil Recovery.pdf': 23 unique context"
			}
		],
		highContext: [
			{
				description:
					"'The black-oil correlation requires input data of reservoir temperature, initial producing GOR (to calculate bubble point or dew point), oil API gravity, and gas gravity (air =1)': 132 times"
			},
			{
				description:
					"'Geologically, the Eagle Ford shale consists of Cretaceous sediments that are the source rock for the Austin Chalk formation (Fig': 99 times"
			},
			{
				description:
					"'The average temperature equals the surface temperature 60 ºF plus 0': 66 times"
			},
			{
				description:
					"'The spectacular vertical and lateral exposures of the Eagle Ford strata in west Texas are very useful to examine the properties, characteristics, and sequence-stratigraphic settings (Donovan and Staerker 2010)': 66 times"
			},
			{ description: 'Some other information' }
		]
	};

	type CategoryKey = keyof typeof categories;
	let selectedCategory: CategoryKey = 'mostFrequent';
</script>

<main>
	<div class="search-wrapper">
		<h2>Discovery session</h2>
		<select bind:value={selectedCategory} class="dropdown">
			<option value="mostFrequent">Most frequently occurring entity pairs</option>
			<option value="mostUnique">Most unique entity pairs</option>
			<option value="richestMixDocuments">Documents with the richest mix of entity pairs</option>
			<option value="highImpactDocuments">High impact documents</option>
			<option value="highContext">High-impact context</option>
		</select>
		<div class="suggestion-cards">
			{#each categories[selectedCategory] as item}
				<div class="card">
					<h3>{item.description}</h3>
				</div>
			{/each}
		</div>
		<div class="search-container">
			<input type="text" placeholder="Search..." class="search-input" />
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		padding: 20px;
		box-sizing: border-box;
	}

	.search-wrapper {
		width: 100%;
		max-width: 1200px;
		text-align: center;
	}

	h2 {
		margin-top: 0;
	}

	.suggestion-cards {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 20px;
		overflow-x: auto;
		padding-bottom: 10px;
	}

	.card {
		background-color: #f0f0f0;
		border-radius: 15px;
		padding: 15px;
		font-size: 14px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		flex: 0 0 19%;
		max-width: 19%;
		text-align: left;
	}

	.card:hover {
		background-color: #e0e0e0;
	}

	.card h3 {
		margin-top: 0;
		font-size: 16px;
	}

	.search-container {
		position: relative;
		padding: 10px;
	}

	.search-input {
		width: 100%;
		padding: 12px 20px;
		box-sizing: border-box;
		border: none;
		border-radius: 25px;
		font-size: 16px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.dropdown {
		margin-bottom: 20px;
		padding: 10px 15px;
		border-radius: 5px;
		border: 1px solid #ccc;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
</style>
