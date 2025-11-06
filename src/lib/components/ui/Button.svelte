<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    children: Snippet;
    onclick?: (e: Event) => void;
    border?: boolean;
    index?: number;
  }

  let { href, children, onclick, border = true, ...props }: Props = $props();
</script>

{#snippet content()}
  <div
    class="{border
      ? 'border rounded-sm'
      : ''} flex gap-2 p-2 cursor-pointer duration-300 hover:translate-y-1"
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
