<script lang="ts">
  import { Button, ToggleTheme } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";

  let width = $state(0);
  let menu = $state([
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/", text: "Skills" },
    { href: "/", text: "Projects" },
    { href: "/", text: "Contact" },
  ]);
</script>

<svelte:window bind:innerWidth={width} />

{#snippet nav(visible: boolean)}
  <nav class="flex items-center justify-around">
    {#if visible}
      <h1 class="text-4xl">矢作</h1>
    {/if}

    <ul class="flex items-center gap-5 text-sm">
      {#each menu as { href, text }}
        <li>
          <a
            class="border-b border-b-transparent duration-300 hover:border-b-primary"
            {href}
          >
            {text}
          </a>
        </li>
      {/each}
      {#if visible}
        <li><Button>Resume</Button></li>
      {/if}
    </ul>
    <ToggleTheme />
  </nav>
{/snippet}

<header class="fixed top-0 w-full h-16 p-10 z-20" {@attach gsapFrom({ y: -15 })}>
  {#if width > 1024}
    {@render nav(true)}
  {:else}
    {@render nav(false)}
  {/if}
</header>
