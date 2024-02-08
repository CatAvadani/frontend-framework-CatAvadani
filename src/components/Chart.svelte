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
      <div class="data-cell" data-cy="chart-data-cell" style="background-color: {"transparent"};">
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
      <!-- Button container -->
<div class="button-container">
    <button on:click={() => handleButtonClick('Retention')}>Retention</button>
    <button on:click={() => handleButtonClick('Interest')}>Interest</button>
    <button on:click={() => handleButtonClick('Usage')}>Usage</button>
    <button on:click={() => handleButtonClick('Awareness')}>Awareness</button>
  </div>
</div>


  <style>
    .scrollable-container {
    overflow-x: auto;
    width: 100%;   
    }
  .chart-container {
    padding-top: 20px;
  display: grid;
  grid-template-columns: auto repeat(var(--num-years), 100px) auto;
  gap: 10px;
  align-items: center;
  background: #000;
  color: #fff;
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

.button-container {
  grid-column: 1 / -1; /* Span across all columns */
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
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