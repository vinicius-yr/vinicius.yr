<script lang="ts">
  import { gsapFrom } from "$lib/utils/gsap";
</script>

<section class="h-screen grid place-items-center">
  <div class="w-1/3" {@attach gsapFrom({ delay: 0.2 })}>
    <p class="text-sm mb-5">
      Hi, I’m available for new projects and opportunities. If you have an idea,
      need someone to develop a functional website, or just want to
      chat about a project, feel free.
    </p>
    <form class="flex flex-col gap-3">
      <label for="">Name</label>
      <input
        class="border rounded-sm p-2 outline-0"
        type="text"
        placeholder="John Doe"
      />
      <label for="">Email</label>
      <input
        class="border rounded-sm p-2 outline-0"
        type="email"
        placeholder="name@exemple.com"
      />
      <label for="">Message</label>
      <textarea
        class="border rounded-sm p-2 outline-0"
        minlength="30"
        cols="50"
        rows="7"
        placeholder="..."
      ></textarea>
      <button class="border rounded-sm p-2 text-sm cursor-pointer" type="submit">Submit</button>
    </form>
  </div>
</section>
