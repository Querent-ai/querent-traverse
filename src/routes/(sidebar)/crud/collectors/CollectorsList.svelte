<script>
    import Collectors from '../../../data/collectors.json';
</script>

<ul>
  {#each Collectors as collector}
    <li>{collector.name}</li>
  {/each}
</ul>
