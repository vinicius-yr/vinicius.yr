<script lang="ts">
  import Icon from "@iconify/svelte";
  import gsap from "gsap";
  import { Button, ToggleTheme } from "$lib/components";
  import { fade } from "svelte/transition";
  import { page } from "$app/state";

  let width = $state(0);
  let isOpen = $state(false);

  let path = $derived(page.url.pathname);

  let menu = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ]

  $effect(() => {
    gsap.from("#header", { opacity: 0, y: 10, ease: "sine.inOut" });
    gsap.from("#navItems", {
      opacity: 0,
      ease: "sine.inOut",
      stagger: 0.1,
      delay: 0.5,
    });
  });
</script>

<svelte:window bind:innerWidth={width} />

{#snippet items(href: string, text: string, mobile: boolean)}
  <li id="navItems">
    {#if !mobile}
      <a
        class={path == href
          ? "border-b border-b-primary"
          : "border-b border-b-transparent duration-300 hover:border-b-primary"}
        {href}
      >
        {text}
      </a>
    {:else}
      <a
        onclick={() => (isOpen = !isOpen)}
        class={path == href
          ? "border-b border-b-primary"
          : "border-b border-b-transparent duration-300 hover:border-b-primary"}
        {href}
      >
        {text}
      </a>
    {/if}
  </li>
{/snippet}

<header id="header" class="p-5 flex items-center justify-around">
  <nav class="flex items-center justify-around w-full">
    {#if width > 1024}
      <h1 class="text-2xl lg:text-4xl">矢作</h1>
      <ul class="flex items-center gap-5 text-sm">
        {#each menu as { href, text }}
          {@render items(href, text, false)}
        {/each}
      </ul>
      <ToggleTheme />
    {:else}
      <h1 class="text-2xl lg:text-4xl">矢作</h1>
      <ToggleTheme />
      <Button onclick={() => (isOpen = !isOpen)}>
        <Icon icon="line-md:menu" width="30" />
      </Button>
    {/if}
  </nav>
</header>

{#if isOpen}
  <nav
    class="fixed inset-0 flex justify-center items-center z-30 bg-background"
    transition:fade
  >
    <ul class="flex flex-col items-center gap-5 text-sm">
      {#each menu as { href, text }}
        {@render items(href, text, true)}
      {/each}
      <li>
        <Button onclick={() => (isOpen = !isOpen)}>Close</Button>
      </li>
    </ul>
  </nav>
{/if}
