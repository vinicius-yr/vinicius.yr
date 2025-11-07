<script lang="ts">
  import { Button } from "$lib/components";
  import { gsapFrom, gsapScrambleText } from "$lib/utils/gsap";
  import Icon from "@iconify/svelte";

  let socialButtons = $state([
    {
      href: "https://github.com/vinicius-yr",
      icon: "line-md:github",
    },
    {
      href: "https://www.linkedin.com/in/vinicius-y-rios-360432397",
      icon: "ri:linkedin-fill",
    },
  ]);
</script>

<section class="h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
  <div class="relative">
    <h1 {@attach gsapFrom({ y: 50 })} class="text-4xl lg:text-6xl">
      Software Developer
    </h1>
    <div class="absolute">
      <p {@attach gsapScrambleText("VINICIUS YAHAGI RIOS")} class="text-sm"></p>
      <div {@attach gsapFrom({ delay: 1.5 })} class="flex gap-1 mt-1">
        {#each socialButtons as { href, icon }}
          <Button {href}>
            <Icon {icon} width="25" height="25" />
          </Button>
        {/each}
      </div>
    </div>
  </div>
</section>
