<script lang="ts">
  import { Form } from "$lib/components";
    import gsap from "gsap";

  $effect(() => {
    gsap.from("#form", {opacity: 0})
  })
</script>

<section
  class="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center"
  id="form"
>
  <p class="text-sm max-w-xl px-4 mb-5">
    Hi, I’m available for new projects and opportunities. If you have an idea,
    need someone to develop a functional website, or just want to chat about a
    project, feel free.
  </p>
  <Form />
</section>
