<script>
  import { Button } from "$lib";
  import { gsapFrom, gsapTexts } from "$lib/utils/gsap";
  import { GithubIcon, LinkedinIcon } from "@lucide/svelte";
</script>

<section class="h-screen flex flex-col justify-center items-center">
  <div class="relative">
    <h1
      {@attach gsapFrom({ y: 50 })}
      class="text-6xl"
    >
      Software Developer
    </h1>
    <div class="absolute">
      <p {@attach gsapTexts("VINICIUS YAHAGI RIOS")}></p>
      <div {@attach gsapFrom({ delay: 2 })} class="mt-1">
        <Button><GithubIcon /></Button>
        <Button><LinkedinIcon /></Button>
      </div>
    </div>
  </div>
</section>
