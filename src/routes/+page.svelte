<script lang="ts">
  import { Button } from "$lib";
  import { gsapFrom, gsapScrambleText } from "$lib/utils/gsap";
  import { GithubIcon, LinkedinIcon } from "@lucide/svelte";

  let socialButtons = $state([
    {
      href: "https://github.com/vinicius-yr",
      icon: GithubIcon,
    },
    {
      href: "https://www.linkedin.com/in/vinicius-y-rios-360432397",
      icon: LinkedinIcon,
    },
  ]);
</script>


<section class="h-screen flex flex-col justify-center items-center">
  <div class="relative">
    <h1 {@attach gsapFrom({ y: 50 })} class="text-4xl lg:text-6xl">Software Developer</h1>
    <div class="absolute">
      <p {@attach gsapScrambleText("VINICIUS YAHAGI RIOS")}></p>
      <div {@attach gsapFrom({ delay: 1.7 })} class="flex gap-1 mt-1">
        {#each socialButtons as { href, icon: Icon }}
          <Button {href}>
            <Icon />
          </Button>
        {/each}
      </div>
    </div>
  </div>
</section>
