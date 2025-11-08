<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    children: Snippet;
    onclick?: (e: Event) => void;
  }

  let { href, children, onclick, ...props }: Props = $props();
</script>

{#snippet content()}
  <div
    class="cursor-pointer duration-300 hover:translate-y-1"
  >
    {@render children()}
  </div>
{/snippet}

{#if href}
  <a {...props} {href} target="_blank" rel="noopener noreferrer"
    >{@render content()}</a
  >
{:else}
  <button {...props} {onclick}>{@render content()}</button>
{/if}
