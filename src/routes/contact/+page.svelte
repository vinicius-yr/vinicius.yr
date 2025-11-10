<script lang="ts">
  import { Form } from "$lib/components";
  import { gsapFrom } from "$lib/utils/gsap";
</script>

<section
  class="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center"
  {@attach gsapFrom()}
>
  <p class="text-sm max-w-lg px-4 mb-5">
    Hi, I’m available for new projects and opportunities. If you have an idea,
    need someone to develop a functional website, or just want to chat about a
    project, feel free.
  </p>
  <Form />
</section>
