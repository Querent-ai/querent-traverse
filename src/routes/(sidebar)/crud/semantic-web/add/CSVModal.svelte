<script>
	import { onMount } from 'svelte';

	export let showCsvModal = false;
	export let closeModal;

	let dialogElement;

	onMount(() => {
		if (dialogElement) {
			dialogElement.addEventListener('close', () => {
				showCsvModal = false;
			});
		}
	});

	$: if (dialogElement) {
		if (showCsvModal) {
			dialogElement.showModal();
		} else {
			dialogElement.close();
		}
	}

	function handleInteraction(event) {
		if (event.type === 'click' && event.target === dialogElement) {
			closeModal();
		} else if (event.type === 'keydown' && event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<div on:click={handleInteraction} on:keydown={handleInteraction} role="presentation">
	<dialog bind:this={dialogElement} class="modal">
		<div class="modal-content">
			<button class="close-button" on:click={closeModal} aria-label="Close modal">
				&times;
			</button>
			<slot />
		</div>
	</dialog>
</div>
<style>
	.modal {
		border: none;
		background: transparent;
		padding: 0;
	}

	.modal::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	.modal-content {
		background: white;
		padding: 20px;
		border-radius: 5px;
		max-width: 80vw;
		max-height: 80vh;
		overflow: auto;
		position: relative;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		border: none;
		background: none;
		font-size: 24px;
		cursor: pointer;
	}
</style>
