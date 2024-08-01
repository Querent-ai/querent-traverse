<script lang="ts">
	let selectedCategory = 'mostFrequent';

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
			{ description: 'Pair 1: Unique interaction' },
			{ description: 'Pair 2: Rare condition' },
			{ description: 'Pair 3: Unusual combination' },
			{ description: 'Pair 4: Sparse relationship' },
			{ description: 'Pair 5: Infrequent connection' }
		],
		recentlyAdded: [
			{ description: 'Pair 1: Newly observed' },
			{ description: 'Pair 2: Recent addition' },
			{ description: 'Pair 3: Latest discovery' },
			{ description: 'Pair 4: New insight' },
			{ description: 'Pair 5: Fresh data' }
		],
		highCorrelation: [
			{ description: 'Pair 1: Strong correlation' },
			{ description: 'Pair 2: High linkage' },
			{ description: 'Pair 3: Tight connection' },
			{ description: 'Pair 4: Firm relationship' },
			{ description: 'Pair 5: Solid association' }
		],
		trending: [
			{ description: 'Pair 1: Trending topic' },
			{ description: 'Pair 2: Hot topic' },
			{ description: 'Pair 3: Current favorite' },
			{ description: 'Pair 4: Popular now' },
			{ description: 'Pair 5: In demand' }
		]
	};
</script>

<main>
	<div class="search-wrapper">
		<h2>Discovery session</h2>
		<select bind:value={selectedCategory} class="dropdown">
			<option value="mostFrequent">Most frequently occurring entity pairs</option>
			<option value="mostUnique">Most unique entity pairs</option>
			<option value="recentlyAdded">Recently added entity pairs</option>
			<option value="highCorrelation">Entity pairs with high correlation</option>
			<option value="trending">Trending entity pairs</option>
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
