<script lang="ts">
  import { Button } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";
  import Icon from "@iconify/svelte";

  let projects = $state([
    {
      name: "Portifolio",
      techs: ["SvelteKit", "Tailwindcss"],
      git: "https://github.com/vinicius-yr/vinicius.yr",
      text: "This portfolio reflect some part about me and, my thinking about the intuitive simplicity.",
      date: "Nov/09/25",
    },
    {
      name: "ひragana.ok",
      techs: ["SvelteKit", "Tailwindcss", "DaisyUI"],
      href: "https://hiragana-challenge-ten.vercel.app/",
      git: "https://github.com/vinicius-yr/hiragana-challenge",
      text: "A website for practicing hiragana quickly and easily, with a mini-game to test your skills rapidly.",
      date: "Sep/18/25",
    },

    {
      name: "Mimo Projects",
      techs: ["React", "Sass"],
      href: "https://mimo-projects.vercel.app/",
      git: "https://github.com/vinicius-yr/mimo_projects",
      text: "One of the first independent projects I did after completing my programming course.",
      date: "Feb/21/24",
    },
  ]);
</script>

<section class="h-[calc(100vh-5rem)] flex justify-center items-center">
  <div class="grid grid-cols-2 gap-9">
    {#each projects as { name, techs, href, git, text, date }, index}
      <div
        {@attach gsapFrom({ opacity: 0, delay: index * 0.2 })}
        class="gap-2  flex justify-between flex-col max-w-96"
      >
        <h1 class="text-lg">{name}</h1>
        <p class="text-sm">{text}</p>
        <p class="text-sm">{date}</p>
        <div class="flex gap-1">
          <Button href={git}>
            <Icon icon="mdi:github" width="28" />
          </Button>
          {#if href}
            <Button {href}>
              <Icon icon="mdi:internet" width="28" />
            </Button>
          {/if}
        </div>  
        <div class="flex justify-between items-center w-full">
          <ul class="flex gap-2 items-center max-w- flex-wrap">
            {#each techs as tech}
              <li class="border p-1 text-sm rounded-sm">{tech}</li>
            {/each}
          </ul>
          
        </div>
        
      </div>
    {/each}
  </div>
</section>
