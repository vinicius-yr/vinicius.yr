<script lang="ts">
  import { gsapFrom } from "$lib/utils/gsap";
  import { Moon, Sun } from "@lucide/svelte";
  import { getContext } from "svelte";

  interface Theme {
    current: boolean;
  }

  const isDark: Theme = getContext("theme")

  let menu = $state([
    { href: "/", text: "Home" },
    { href: "/", text: "About" },
    { href: "/", text: "Skills" },
    { href: "/", text: "Projects" },
    { href: "/", text: "Contact" },
  ]);
</script>

<header
  class="fixed top-0 w-full"
  {@attach gsapFrom({ y: -15 })}
>
  <nav class="flex items-center justify-around p-10">
    <h1 class="text-4xl">矢作</h1>
    <ul class="flex items-center gap-5 text-sm">
      {#each menu as { href, text }}
        <li>
          <a
            class="border-b border-b-transparent duration-300 hover:border-black"
            {href}>{text}</a
          >
        </li>
      {/each}
    </ul>
    <button onclick={() => (isDark.current = !isDark.current)}>
      {#if isDark.current}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
  </nav>
</header>
