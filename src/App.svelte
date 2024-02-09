<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Awareness from "./routes/Awareness.svelte";
  import Interest from "./routes/Interest.svelte";
  import Retention from "./routes/Retention.svelte";
  import Usage from "./routes/Usage.svelte";

  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  // display retention data when visiting the start page
  onMount(() => {
    if (window.location.pathname === '/') {
      navigate('/retention');
    }
  });

</script>

<Header />
<!-- Main content -->
<Router>
  <Route path="retention" component={Retention} />
  <Route path="interest" component={Interest} />
  <Route path="usage" component={Usage} />
  <Route path="awareness" component={Awareness} />
</Router>

<Footer />



