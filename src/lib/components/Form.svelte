<script lang="ts">
  import emailjs from "@emailjs/browser";

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
      .sendForm(import.meta.env.SERVICE_ID, import.meta.env.TEMPLATE_ID, form, {
        publicKey: import.meta.env.PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Sent successfully!");
        },
        (error) => {
          alert("Sorry try again...");
        },
      );

    name = "";
    email = "";
    message = "";
  };
</script>

<form
  class="flex flex-col gap-3 w-full max-w-xl px-4"
  bind:this={form}
  onsubmit={sendEmail}
>
  <label for="">Name</label>
  <input
    class="border rounded-sm p-2 outline-0"
    type="text"
    placeholder="John Doe"
    name="name"
    bind:value={name}
    required
  />
  <label for="">Email</label>
  <input
    class="border rounded-sm p-2 outline-0"
    type="email"
    placeholder="name@exemple.com"
    name="email"
    bind:value={email}
    required
  />
  <label for="">Message</label>
  <textarea
    class="border rounded-sm p-2 outline-0 min-h-60"
    minlength="70"
    placeholder="Minimum: 70 characters"
    name="message"
    bind:value={message}
    required
  ></textarea>
  <button class="border rounded-sm p-2 text-sm cursor-pointer" type="submit"
    >Submit</button
  >
</form>
