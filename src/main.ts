import "./app.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app")!, // how to fix this error??
});

export default app;
