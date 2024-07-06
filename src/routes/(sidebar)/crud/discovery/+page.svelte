<main>
  <div class="search-wrapper">
    <h2>Discovery session</h2>
    <div class="search-container">
      <input type="text" placeholder="Search..." class="search-input" />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .search-wrapper {
    width: 50%;
    max-width: 600px;
    text-align: center;
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
</style>