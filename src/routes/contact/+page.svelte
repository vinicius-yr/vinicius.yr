<script lang="ts">
  import { Form } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";
</script>

<section class="h-[calc(100vh-5rem)] grid place-items-center">
  <div class="w-1/3" {@attach gsapFrom({ delay: 0.2 })}>
    <p class="text-sm mb-5">
      Hi, I’m available for new projects and opportunities. If you have an idea,
      need someone to develop a functional website, or just want to chat about a
      project, feel free.
    </p>
    <Form />
  </div>
</section>
