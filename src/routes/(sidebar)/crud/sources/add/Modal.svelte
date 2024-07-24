<!-- src/components/Modal.svelte -->
<script>
    export let show = false;
    export let message = '';
    export function close() {
        show = false;
    }
</script>

{#if show}
<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg shadow-lg max-w-sm">
        <h2 class="font-semibold text-lg">Notice</h2>
        <p class="my-4">{message}</p>
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" on:click={close}>OK</button>
    </div>
</div>
{/if}
