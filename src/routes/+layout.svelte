<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/layout/Header.svelte";
	import { setContext } from "svelte";

	let { children } = $props();

	let isDark = $state({
		current: false,
	});

	setContext("theme", isDark);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class={isDark.current ? "bg-black text-white" : "bg-white text-black"}>
	<Header />
	{@render children()}
</main>
