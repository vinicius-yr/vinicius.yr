<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Button } from ".";
  import "@splidejs/svelte-splide/css";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import gsap from "gsap";

  interface Projects {
    name: string;
    techs: string[];
    href?: string;
    git: string;
    text: string;
    date: string;
    src: string;
  }

  let projects: Projects[] = $state([
    {
      name: "Portifolio",
      techs: ["SvelteKit", "Tailwindcss"],
      git: "https://github.com/vinicius-yr/vinicius.yr",
      text: "This portfolio reflect some part about me and, my thinking about the intuitive simplicity.",
      date: "Nov/09/25",
      src: "p2.png",
    },

    {
      name: "ひragana.ok",
      techs: ["SvelteKit", "Tailwindcss", "DaisyUI"],
      href: "https://hiragana-challenge-ten.vercel.app/",
      git: "https://github.com/vinicius-yr/hiragana-challenge",
      text: "A website for practicing hiragana quickly and easily, with a mini-game to test your skills rapidly.",
      date: "Sep/18/25",
      src: "p3.png",
    },

    {
      name: "Mimo Projects",
      techs: ["React", "Sass"],
      href: "https://mimo-projects.vercel.app/",
      git: "https://github.com/vinicius-yr/mimo_projects",
      text: "One of the first independent projects I did after completing my programming course.",
      date: "Feb/21/24",
      src: "p1.png",
    },
  ]);

  $effect(() => {
    gsap.from("#splide", { opacity: 0 });
  });
</script>

<Splide
  id="splide"
  options={{
    type: "loop",
    gap: "2rem",
    width: "70rem",
    padding: "5rem",
    autoplay: true,
    arrows: false,
    interval: 2000,
    pagination: false,
    breakpoints: {
      1024: {
        width: "45rem",
        padding: 0,
      },
      719: {
        width: "30rem",
      },
      500: {
        width: "22rem",
      },
    },
  }}
>
  {#each projects as { name, techs, href, git, text, date, src }}
    <SplideSlide>
      <div class="flex flex-col justify-between gap-3 p-3 border rounded-sm">
        <h1 class="text-lg">{name}</h1>
        <p class="text-sm">{text}</p>
        <p class="text-sm">{date}</p>
        <img {src} class=" lg:block md:block" alt="" />
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
    </SplideSlide>
  {/each}
</Splide>
