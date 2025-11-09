<script lang="ts">
  import { Button } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  interface Projects {
    name: string;
    techs: string[];
    href?: string;
    git: string;
    text: string;
    date: string;
    src: string;
  }

  let projects: Projects[][] = $state([
    [
      {
        name: "Portifolio",
        techs: ["SvelteKit", "Tailwindcss"],
        git: "https://github.com/vinicius-yr/vinicius.yr",
        text: "This portfolio reflect some part about me and, my thinking about the intuitive simplicity.",
        date: "Nov/09/25",
        src: "p2.png",
      },
    ],
    [
      {
        name: "ひragana.ok",
        techs: ["SvelteKit", "Tailwindcss", "DaisyUI"],
        href: "https://hiragana-challenge-ten.vercel.app/",
        git: "https://github.com/vinicius-yr/hiragana-challenge",
        text: "A website for practicing hiragana quickly and easily, with a mini-game to test your skills rapidly.",
        date: "Sep/18/25",
        src: "p3.png",
      },
    ],

    [
      {
        name: "Mimo Projects",
        techs: ["React", "Sass"],
        href: "https://mimo-projects.vercel.app/",
        git: "https://github.com/vinicius-yr/mimo_projects",
        text: "One of the first independent projects I did after completing my programming course.",
        date: "Feb/21/24",
        src: "p1.png",
      },
    ],
  ]);

  let index = $state(0);

  function next() {
    if (index >= projects.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }

  function back() {
    if (index <= 0) {
      index = projects.length - 1;
    } else {
      index--;
    }
  }

  $inspect(index, projects.length - 1);
</script>

<section
  class="h-[calc(100vh-5rem)] flex justify-center items-center"
  {@attach gsapFrom({ delay: 0.2 })}
>
  <Button onclick={back}>
    <Icon icon="material-symbols:arrow-left" width="70" />
  </Button>
  <div class="w-1/2">
    {#each projects[index] as { name, techs, href, git, text, date, src }}
      {#key index}
        <div
          class="flex flex-col justify-between gap-3 p-3 border rounded-sm"
          in:fade
        >
          <h1 class="text-lg">{name}</h1>
          <p class="text-sm">{text}</p>
          <p class="text-sm">{date}</p>
          <img {src} alt="" />
          <div class="flex justify-between items-end w-full">
            <ul class="flex gap-2 items-center max-w- flex-wrap">
              {#each techs as tech}
                <li class="border p-1 text-sm rounded-sm">{tech}</li>
              {/each}
            </ul>
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
          </div>
        </div>
      {/key}
    {/each}
  </div>
  <Button onclick={next}>
    <Icon icon="material-symbols:arrow-right" width="70" />
  </Button>
</section>
