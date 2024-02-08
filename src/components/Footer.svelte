<!-- Footer.svelte -->
<script lang="ts">
   function handleButtonClick(metric: string) {
        console.log('Button clicked');
        //todo: add logic to filter or display data based on the selected metric
    }
</script>

<footer>
          <!-- Button container -->
<div class="button-container">
  <button on:click={() => handleButtonClick('Retention')}>Retention</button>
  <button on:click={() => handleButtonClick('Interest')}>Interest</button>
  <button on:click={() => handleButtonClick('Usage')}>Usage</button>
  <button on:click={() => handleButtonClick('Awareness')}>Awareness</button>
</div>
    <p>© 2024 Frameworks App, Inc</p>
  </footer>
  
  <style>
    footer {
      padding: 20px;
      background-color: black;
      color: white;
      text-align: center;
    
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
  </style>
  