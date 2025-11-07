<script lang="ts">
  import { Skills } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";

  let informations = $state([
    {
      subtitle: "Professional Summary",
      text: `Developer with 3 years of experience, specializing in high-performance applications. Solid experience in development creating responsive and interactive interfaces, REST APIs, relational database, authentication (Auth, OAuth, JWT), and LLMs. Focused on delivering complete, optimized, and scalable solutions. Crafting efficient systems that transform complex problems into simple and intuitive user experiences.`,
    },
    {
      subtitle: "Work Philosophy",
      text: `I’m someone who values communication and cares about understanding the meaning and purpose behind the project. I believe that knowing the reason behind things makes every solution smarter, more consistent, and meaningful.`,
    },
    {
      subtitle: "Personal Interests",
      text: `Outside of programming, I have a strong interest in philosophy, psychology and music. I also enjoy spending my free time playing game, reading books, creating music or coding.`,
    },
    {
      subtitle: "Intrapessoal Skills",
      text: `Problem-solving, Logical reasoning, Continuous learning, Self-taught, Effective communication.`,
    },
  ]);
</script>

<section class="h-[calc(100vh-5rem)] flex justify-center items-center">
  <div class="flex flex-col gap-8">
    {#each informations as { subtitle, text }, index}
      <div {@attach gsapFrom({ opacity: 0, delay: index * 0.3 })}>
        <h1 class="text-xl">{subtitle}</h1>
        <p class="text-sm max-w-4xl">{text}</p>
      </div>
    {/each}
    <i {@attach gsapFrom({ delay: 4 * 0.3 })} class="text-sm"
      >"The simple is the visible part of complexity."</i
    >
    <div class="max-w-4xl" {@attach gsapFrom({ delay: 5 * 0.3 })}>
      <Skills />
    </div>
  </div>
</section>
