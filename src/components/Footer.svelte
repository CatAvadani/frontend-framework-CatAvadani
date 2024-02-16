<!-- Footer.svelte -->
<script lang="ts">
  const currentYear = new Date().getFullYear();
 </script>

<footer>        
          <!-- Button container -->
<div class="button-container">
  <a href="/retention" class="button">Retention</a>
  <a href="/interest" class="button">Interest</a>
  <a href="/usage" class="button">Usage</a>
  <a href="/awareness" class="button">Awareness</a>
</div>
    <p>© <span>{currentYear}</span> Frameworks MyApp. All Rights Reserved.</p>
  </footer>
  
  <style>
    footer {
      padding: 10px;
      background-color: black;
      color: white;
      text-align: center;
    
    }

a {
  text-decoration: none;
  color: #ffe589;

}
.button-container {
  grid-column: 1 / -1; /* Span across all columns */
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 15px auto;
}

.button {
  padding: 5px 8px;
  border: solid 1px  #ffe589;
  border-radius: 5px;
  color: #ffe589;

  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color:#ffe589;
  color: black ;
}
  </style>
  