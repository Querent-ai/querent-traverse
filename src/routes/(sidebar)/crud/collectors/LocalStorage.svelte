<script>
  let selectedDirectory = '';

  function handleSelectFolder() {
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true;
    input.directory = true;

    input.addEventListener('change', (e) => {
      const files = e.target.files;
      if (files.length > 0) {
        selectedDirectory = files[0].webkitRelativePath.split('/')[0];
      }
    });

    input.click();
  }
</script>

<form on:submit|preventDefault>
  <button type="button" on:click={handleSelectFolder}>Select the folder</button>
  
  {#if selectedDirectory}
    <p>Selected directory: {selectedDirectory}</p>
  {/if}
</form>