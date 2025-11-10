<script lang="ts">
  import { Button } from "$lib/components";
  import { gsapFrom, gsapScrambleText } from "$lib/utils/gsap";
  import Icon from "@iconify/svelte";

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
</script>

<section class="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
  <div class="px-5">
    <h1 class="text-2xl lg:text-5xl" {@attach gsapFrom()}>
      Full-Stack Developer
    </h1>
    <div class="absolute">
      <p class="text-sm" {@attach gsapScrambleText("VINICIUS YAHAGI RIOS")}></p>
      <div {@attach gsapFrom({ delay: 1.5 })} class="flex gap-1 mt-1">
        {#each socialButtons as { href, icon }}
          <Button {href} border={true}>
            <Icon {icon} width="35" height="35" />
          </Button>
        {/each}
      </div>
    </div>
  </div>
</section>
