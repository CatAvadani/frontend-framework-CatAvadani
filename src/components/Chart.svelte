<script lang="ts">
    import { frameworks } from '../frameworksData/frameworks.js';

    const years = [...new Set(frameworks.flatMap(f => f.surveys.map(s => s.year)))].sort((a, b) => a - b);

 function handleButtonClick(metric: string) {
        console.log('Button clicked');
        //todo: add logic to filter or display data based on the selected metric
    }
</script>

<div class="scrollable-container">
  <div class="chart-container" data-cy="chart" style="--num-years: {years.length};">
    <!-- Empty cell -->
    <div class="header-cell" data-cy="chart-header-cell"></div>
    {#each years as year}
      <div class="header-cell" data-cy="chart-header-cell">{year}</div>
    {/each}
    <!-- Empty cell -->
    <div class="header-cell" data-cy="chart-header-cell"></div>

    {#each frameworks as { name, color, surveys }}
        <!-- Framework name on the left side -->
        <div class="framework-name" style="color: {color};">{name}</div>
      {#each years as year}
      {#if surveys.find(s => s.year === year)}
      <div class="data-cell" data-cy="chart-data-cell" style="background-color: transparent;">
        <div class="circle" data-cy="chart-circle" style="background-color: {color}; --circle-size: 50px;">
          {surveys.find(s => s.year === year)?.retention}%
        </div>
      </div>
    {:else}
      <div class="empty-cell" data-cy="chart-data-cell"></div>
    {/if}
      {/each}
        <!-- Framework name on the right side -->
        <div class="framework-name" style="color: {color};">{name}</div>
    {/each}
</div>
</div>



<style>
  .scrollable-container {
    margin: auto;
    overflow-x: auto;
  }
  .chart-container {
    padding-top: 20px;
    display: grid;
    grid-template-columns: auto repeat(var(--num-years), 100px) auto;
    gap: 10px;
    align-items: center;
    background: #161515;
    color: white;
    width: 80%;
    margin: auto;
    overflow-x: auto; /* Enable horizontal scrolling */
    overflow-y: hidden; /* Prevent vertical scrolling */
  }

  .header-cell, .framework-name, .data-cell, .empty-cell {
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .framework-name {
    padding: 0 5px; 
    color: inherit;
    font-weight: bold;
    max-width: 80px;
    margin: auto;
    text-align: center;
  }

  .data-cell, .empty-cell {
    min-width: 80px; 
  }
  .circle {
    border-radius: 50%;
    font-size: 0.75rem;
    width: var(--circle-size);
    height: var(--circle-size);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Responsive adjustments for smaller screens */
  @media (max-width: 768px) {
    .chart-container {
      grid-template-columns: auto repeat(var(--num-years), 70px) auto; 
    }
    .circle {
      --circle-size: 40px; 
    }
  }

  @media (max-width: 480px) {
    .chart-container {
      padding: 7px; 
    }

    .framework-name, .header-cell, .data-cell, .circle {
      font-size: 0.65rem; 
    }
    .circle {
      --circle-size: 30px; 
    }
  }
</style>
