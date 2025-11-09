<script lang="ts">
  import emailjs from "@emailjs/browser";
  import {
    PUBLIC_KEY,
    PUBLIC_SERVICE_ID,
    PUBLIC_TEMPLATE_ID,
  } from "$env/static/public";

  let form: HTMLFormElement;

  let name = $state("");
  let email = $state("");
  let message = $state("");

  let formData = $derived({
    name,
    email,
    message,
  });

  const sendEmail = (e: Event) => {
    emailjs
      .sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    name = "";
    email = "";
    message = "";
  };
</script>

<form class="flex flex-col gap-3" bind:this={form} onsubmit={sendEmail}>
  <label for="">Name</label>
  <input
    class="border rounded-sm p-2 outline-0"
    type="text"
    placeholder="John Doe"
    name="name"
    bind:value={name}
  />
  <label for="">Email</label>
  <input
    class="border rounded-sm p-2 outline-0"
    type="email"
    placeholder="name@exemple.com"
    name="email"
    bind:value={email}
  />
  <label for="">Message</label>
  <textarea
    class="border rounded-sm p-2 outline-0"
    minlength="30"
    cols="50"
    rows="7"
    placeholder="..."
    name="message"
    bind:value={message}
  ></textarea>
  <button class="border rounded-sm p-2 text-sm cursor-pointer" type="submit"
    >Submit</button
  >
</form>
