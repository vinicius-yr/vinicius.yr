<script lang="ts">
  import { Skills } from "$lib/components";
  import gsap from "gsap";

  let informations = [
    {
      subtitle: "Professional Summary",
      text: `Developer with 3 years of experience, specializing in high-performance and modern applications. Solid experience in development creating responsive and interactive interfaces, REST APIs, relational database, authentication (Auth, OAuth, JWT), and LLMs. Focused on delivering complete, optimized, and scalable solutions. Crafting efficient systems that transform complex problems into simple and intuitive user experiences.`,
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
      subtitle: "Intrapersonal Skills",
      text: `Problem-solving, Logical reasoning, Continuous learning, Self-taught, Effective communication.`,
    },
  ]

  $effect(() => {
    gsap.from("#texts", { opacity: 0, stagger: 0.3 });
    gsap.from("#phrase", { opacity: 0, delay: 1.2 });
    gsap.from("#stacks", { opacity: 0, delay: 1.5 });
  });
</script>

<section class="min-h-[calc(100vh-5rem)] grid place-items-center">
  <ul class="grid gap-9 p-5">
    {#each informations as { subtitle, text }}
      <li id="texts">
        <h1 class="text-xl">{subtitle}</h1>
        <p class="text-sm max-w-4xl">{text}</p>
      </li>
    {/each}

    <div id="stacks" class="max-w-4xl">
      <Skills />
    </div>
  </ul>
</section>
