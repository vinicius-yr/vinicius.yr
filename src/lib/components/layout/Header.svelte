<script lang="ts">
  import { Button, ToggleTheme } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  let width = $state(0);
  let isOpen = $state(false);
  let menu = $state([
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ]);
</script>

<svelte:window bind:innerWidth={width} />

{#snippet items()}{/snippet}

<header class="p-5 flex items-center justify-around" {@attach gsapFrom()}>
  {#if width > 1024}
    <nav class="flex items-center justify-around w-full">
      <h1 class="text-4xl">矢作</h1>
      <ul class="flex items-center gap-5 text-sm">
        {#each menu as { href, text }, index}
          <li {@attach gsapFrom({ delay: index * 0.3 })}>
            <a
              class="border-b border-b-transparent duration-300 hover:border-b-primary"
              {href}
            >
              {text}
            </a>
          </li>
        {/each}
      </ul>
      <ToggleTheme />
    </nav>
  {:else}
    <nav class="flex items-center justify-around w-full z-20">
      <h1 class="text-4xl">矢作</h1>
      <ToggleTheme />
      <Button onclick={() => (isOpen = !isOpen)}>
        <Icon icon="line-md:menu" width="30" />
      </Button>
    </nav>
  {/if}
</header>

{#if isOpen}
  <nav
    class="fixed inset-0 flex justify-center items-center z-30 bg-background"
    transition:fade
  >
    <ul class="flex flex-col items-center gap-5 text-sm">
      {#each menu as { href, text }, index}
        <li {@attach gsapFrom({ delay: index * 0.3 })}>
          <a
            onclick={() => (isOpen = !isOpen)}
            class="border-b border-b-transparent duration-300 hover:border-b-primary"
            {href}
          >
            {text}
          </a>
        </li>
      {/each}
      <li {@attach gsapFrom({ delay: 4 * 0.3 })}>
        <Button onclick={() => (isOpen = !isOpen)}>Close</Button>
      </li>
    </ul>
  </nav>
{/if}
