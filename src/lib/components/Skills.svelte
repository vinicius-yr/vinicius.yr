<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import Icon from "@iconify/svelte";

  const techs = [
    {
      name: "JavaScript",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
      tech: "languages",
      icon: "raphael:js",
    },
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      tech: "languages",
      icon: "akar-icons:typescript-fill",
    },
    {
      name: "Go",
      href: "https://go.dev/",
      tech: "languages",
      icon: "file-icons:go",
    },

    {
      name: "HTML",
      href: "https://developer.mozilla.org/docs/Web/HTML",
      tech: "frontend",
      icon: "flowbite:html-solid",
    },
    {
      name: "CSS",
      href: "https://developer.mozilla.org/docs/Web/CSS",
      tech: "frontend",
      icon: "fa7-brands:css",
    },
    {
      name: "React",
      href: "https://react.dev/",
      tech: "frontend",
      icon: "mdi:react",
    },
    {
      name: "Svelte",
      href: "https://svelte.dev/",
      tech: "frontend",
      icon: "ri:svelte-fill",
    },
    {
      name: "Tailwindcss",
      href: "https://tailwindcss.com/",
      tech: "frontend",
      icon: "lineicons:tailwindcss",
    },

    {
      name: "Node.js",
      href: "https://nodejs.org/",
      tech: "backend",
      icon: "akar-icons:node-fill",
    },
    {
      name: "Bun",
      href: "https://bun.sh/",
      tech: "backend",
      icon: "devicon-plain:bun",
    },
    {
      name: "Fastify",
      href: "https://fastify.dev/",
      tech: "backend",
      icon: "devicon-plain:fastify",
    },

    {
      name: "SQL",
      href: "https://en.wikipedia.org/wiki/SQL",
      tech: "database",
      icon: "tabler:sql",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      tech: "database",
      icon: "akar-icons:postgresql-fill",
    },
    {
      name: "SQLite",
      href: "https://www.sqlite.org/",
      tech: "database",
      icon: "file-icons:sqlite",
    },
    {
      name: "Supabase",
      href: "https://supabase.com/",
      tech: "database",
      icon: "ri:supabase-fill",
    },
    {
      name: "Drizzle (ORM)",
      href: "https://orm.drizzle.team/",
      tech: "database",
      icon: "simple-icons:drizzle",
    },

    {
      name: "Git",
      href: "https://git-scm.com/",
      tech: "tools",
      icon: "mdi:git",
    },

    {
      name: "Capacitor",
      href: "https://capacitorjs.com/",
      tech: "tools",
      icon: "ion:logo-capacitor",
    },
    {
      name: "Wails",
      href: "https://wails.io/",
      tech: "tools",
      icon: "simple-icons:wails",
    },
  ]
</script>

<section class="flex flex-col">
  <h1 class="text-xl">Tech Stack</h1>
  <div class="flex flex-wrap gap-3">
    {#each techs as { href, icon }}
      <Button {href}>
        <Icon {icon} width="40" height="40" />
      </Button>
    {/each}
  </div>
</section>
