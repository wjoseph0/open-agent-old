<script>
	import { supabase } from '../supabase.js';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import Logout from '../components/Logout.svelte';
	import { user } from '../stores/authStore.js';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	const setUserStore = async () => {
		await user.set($page.data.session.user);
	};

	if ($page.data.session) {
		setUserStore();
	}
</script>

<div class="grid-container">
	<header>
		<h1 style="margin: 0px;">Open Agent</h1>
		{#if $page.data.session}
			<Logout />
		{/if}
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<a href="https://github.com/wjoseph0/open-agent"
			><img src="/GitHub-logo.png" alt="Link to GitHub repo" /></a
		>
	</footer>
</div>

<style>
	.grid-container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 100vw;
		grid-template-rows: 10vh 80vh 10vh;
	}

	header,
	main,
	footer {
		color: lightcyan;
		background-color: darkslategray;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
