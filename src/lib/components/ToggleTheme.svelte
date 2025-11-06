<script lang="ts">
  import { Moon, Sun } from "@lucide/svelte";

  let isDark = $state(false);
  let theme = $derived(isDark ? "dark" : "");

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<button class="cursor-pointer" onclick={toggleTheme}>
  {#if isDark}
    <Sun />
  {:else}
    <Moon />
  {/if}
</button>
