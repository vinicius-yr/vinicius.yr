<script lang="ts">
  import { gsapLights, gsapLightsReverse } from "$lib/utils/gsap";
</script>

<section class="fixed inset-0 z-0">
  <div
    {@attach gsapLights({ duration: 2, ease: "power2.inOut" })}
    class="absolute top-40 h-0.5 w-20 bg-primary"
  ></div>
  <div
    {@attach gsapLightsReverse({ duration: 2, ease: "power2.in" })}
    class="absolute top-60 h-0.5 w-20 bg-primary"
  ></div>
  <div
    {@attach gsapLights({ duration: 3, ease: "power2.inOut" })}
    class="absolute top-70 h-0.5 w-20 bg-primary"
  ></div>
  <div
    {@attach gsapLightsReverse({ duration: 4, ease: "power2.in" })}
    class="absolute top-80 h-0.5 w-20 bg-primary"
  ></div>
  <div
    {@attach gsapLights({ duration: 5, ease: "power2.inOut" })}
    class="absolute top-90 h-0.5 w-20 bg-primary"
  ></div>
  <div
    {@attach gsapLightsReverse({ duration: 6, ease: "power2.in" })}
    class="absolute top-100 h-0.5 w-20 bg-primary"
  ></div>
  <div
    {@attach gsapLights({ duration: 7, ease: "power2.inOut" })}
    class="absolute top-110 h-0.5 w-20 bg-primary"
  ></div>
</section>
