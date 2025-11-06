<script lang="ts">
  import { gsapFrom } from "$lib/utils/gsap";

  let informations = $state([
    {
      subtitle: "Professional Summary",
      text: `Developer with 3 years of experience, specializing in high-performance applications. Solid experience in development creating responsive and interactive interfaces, skilled in API development, SQL database, authentication (Auth), and integration of LLMs. Focused on delivering complete, optimized, and scalable solutions, crafting efficient systems that transform complex problems into simple and intuitive user experiences.`,
    },
    {
      subtitle: "Work Philosophy",
      text: `I’m someone who values communication and cares about understanding the meaning and purpose behind each project. I believe that knowing the reason behind things makes every solution smarter, more consistent, and meaningful.`,
    },
    {
      subtitle: "Personal Interests",
      text: `Outside of programming, I have a strong interest in philosophy, psychology and music. I also enjoy spending my free time playing game, reading books, or creating music.`,
    },
  ]);
</script>

<section class="h-[calc(100vh-5rem)] flex justify-center items-center">
  <div class="flex flex-col gap-10">
    {#each informations as { subtitle, text }, index}
      <div {@attach gsapFrom({ opacity: 0, delay: index * 0.3 })}>
        <h1 class="text-xl">{subtitle}</h1>
        <p class="text-sm max-w-4xl">{text}</p>
      </div>
    {/each}
  </div>
</section>
