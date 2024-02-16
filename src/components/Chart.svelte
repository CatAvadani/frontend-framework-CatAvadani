<script lang="ts">
    import { frameworks } from '../frameworksData/frameworks.js';

    // Extract unique years from the frameworks data and sorting them
    const years = [...new Set(frameworks.flatMap(framework => framework.surveys.map(survey => survey.year)))].sort((a, b) => a - b);

    // This is a prop that will be passed to specify which survey data to display
    export let selector: string;
  
   // Extract a specific selector's value from a survey,retention, interest, usage or awareness
    function getSelector(survey: any, selector: any): number {
        return survey[selector];
    }

</script>

<div class="scrollable-container">
  <div class="chart-container" data-cy="chart" style="--num-years: {years.length};">
    <!-- Empty cell -->
    <div class="header-cell" data-cy="chart-header-cell"></div>
    <!-- Loop through each year and display it as a header cell -->
    {#each years as year}
      <div class="header-cell" data-cy="chart-header-cell">{year}</div>
    {/each}
    <!-- Empty cell -->
    <div class="header-cell" data-cy="chart-header-cell"></div>
   <!-- Loop through each framework to display its name, data cells for each year  -->
    {#each frameworks as { name, color, surveys }}
        <!-- Framework name on the left side -->
        <div class="framework-name" data-cy="chart-data-cell" style="color: {color};">{name}</div>
      {#each years as year, i}
      {#if surveys.find(survey => survey.year === year)}
      <div class="data-cell" data-cy="chart-data-cell" style="background-color: transparent;">
        <div class="circle" data-cy="chart-circle" style=" --circle-size: 50px; border-color: {color}">
          <!-- {surveys.find(s => s.year === year)?.retention}% -->

          {getSelector(surveys.find(survey => survey.year === year), selector)}%
           </div>
           <!-- Add a horizontal line to connect circles -->
           {#if i < years.length - 1}
           <div class="horizontal-line" style="background-color: {color};"></div> 
         {/if}
      </div>
    {:else}
      <div class="empty-cell" data-cy="chart-data-cell"></div>
    {/if}
      {/each}
        <!-- Framework name on the right side -->
        <div class="framework-name" data-cy="chart-data-cell" style="color: {color};">{name}</div>
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
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: auto repeat(var(--num-years), 100px) auto;
    gap: 10px;
    align-items: center;
    background: #1f1e1e;
    color: white;
    width: 80%;
    margin: auto;
    overflow-x: auto; /* Enable horizontal scrolling */
    overflow-y: hidden; /* Prevent vertical scrolling */
  }

  .header-cell, .framework-name, .data-cell {
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-cell {
    padding: 10px 0;
  }
  .framework-name {
    padding: 0 5px; 
    color: inherit;
    font-weight: bold;
    max-width: 80px;
    margin: auto;
    text-align: center;
  }
  .empty-cell {
    width: 80px;
    height: 50px;
  }

  .data-cell {
    position: relative;
  } 
.horizontal-line {
  position: absolute;
  top: 50%;
  height: 4px; 
  width: 100%; 
  transform: translateY(-50%);
  z-index: 1; 
}
 .circle {
    position: relative;
    background-color: #1f1e1e;
    border-radius: 50%;
    font-size: 0.75rem;
    width: var(--circle-size);
    height: var(--circle-size);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 4px;
    z-index: 2;
  }
  .circle + .horizontal-line {
  flex-grow: 1; 
  margin-left: 50%; 
  margin-right: -50%; 

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
      padding: 7px 4px; 
    }

    .framework-name, .header-cell, .data-cell, .circle {
      font-size: 0.65rem; 
    }
    .circle {
      --circle-size: 30px; 
    }
  }
</style>
