<script lang="ts">
  import Icon from "@iconify/svelte";
  import Button from "./ui/Button.svelte";

  let isDark = $state(false);
  let theme = $derived(isDark ? "dark" : "");

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<Button onclick={toggleTheme} >
  {#if isDark}
    <Icon icon="tabler:moon" width="24" height="24" />
  {:else}
    <Icon icon="ph:sun" width="24" height="24" />
  {/if}
</Button>
