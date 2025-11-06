<script lang="ts">
  import { gsapLights, gsapLightsReverse } from "$lib/utils/gsap";

  let arr = $state(Array(5).fill(0));
  let arrReverse = $state(Array(5).fill(0));
</script>

<section class="fixed inset-0 z-0">
  {#each arr as _, index}
    <div
      {@attach gsapLights(
        { duration: index * 2, ease: "power1.out" },
        index * 150,
      )}
      class="absolute h-0.5 w-30 bg-primary"
    ></div>
    <div
      {@attach gsapLightsReverse(
        { duration: index * 2, ease: "power1.in" },
        index * 250,
      )}
      class="absolute h-0.5 w-30 bg-primary"
    ></div>
  {/each}
  {#each arrReverse as _, index}
    <div
      {@attach gsapLights(
        { duration: index * 2, ease: "power1.out" },
        index * 150,
      )}
      class="absolute h-0.5 w-30 bg-primary"
    ></div>
    <div
      {@attach gsapLightsReverse(
        { duration: index * 2, ease: "power1.in" },
        index * 250,
      )}
      class="absolute h-0.5 w-30 bg-primary"
    ></div>
  {/each}
</section>
