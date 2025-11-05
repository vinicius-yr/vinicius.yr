<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    children: Snippet;
    onclick?: (e: Event) => void;
  }

  let { href, children, onclick }: Props = $props();
</script>

{#snippet content()}
  <div class="flex gap-2 p-2 border rounded-sm cursor-pointer">
    {@render children()}
  </div>
{/snippet}

{#if href}
  <a {href}>{@render content()}</a>
{:else}
  <button {onclick}>{@render content()}</button
  >
{/if}
