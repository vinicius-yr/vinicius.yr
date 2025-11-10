<script lang="ts">
  import Icon from "@iconify/svelte";
  import gsap from "gsap";
  import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
  import { Button } from "$lib/components";

  let socialButtons = $state([
    {
      href: "https://github.com/vinicius-yr",
      icon: "mdi:github",
    },
    {
      href: "https://www.linkedin.com/in/vinicius-y-rios-360432397",
      icon: "basil:linkedin-solid",
    },
  ]);

  $effect(() => {
    gsap.registerPlugin(ScrambleTextPlugin)

    gsap.from("#title", { opacity: 0, y: 30, ease: "sine.inOut", delay: 0.6});
    gsap.to("#name", { scrambleText: "vinicius yahagi rios",ease: "sine.inOut",duration: 1, delay: 0.8});
    gsap.from("#buttons", { opacity: 0, y: 30, ease: "sine.inOut", delay: 1 });
  });
</script>

<section
  class="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center"
>
  <div class="px-5">
    <h1 id="title" class="text-2xl md:text-3xl lg:text-5xl">
      Full-Stack Developer
    </h1>
    <div class="absolute">
      <p id="name" class="text-sm uppercase"></p>
      <ul id="buttons" class="flex gap-1 mt-1">
        {#each socialButtons as { href, icon }}
          <li>
            <Button {href} border={true}>
              <Icon {icon} width="35" height="35" />
            </Button>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
