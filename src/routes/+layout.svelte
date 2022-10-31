<script>
	import { supabase } from '../supabase.js';
	import { user } from '../stores/authStore.js';
	import Auth from '../components/Auth.svelte';
	import { loadListings } from '../stores/listingStore.js';

	supabase.auth.onAuthStateChange(async (event, session) => {
		console.log(event, session);
		user.set(session?.user);
		if (session?.user) {
			loadListings();
		}
	});

	const logout = () => {
		console.log('logging out');
		supabase.auth.signOut();
	};
</script>

<main>
	{#if $user}
		<button type="submit" on:click={logout}>Log Out</button>
		<slot />
	{:else}
		<Auth />
	{/if}
</main>
