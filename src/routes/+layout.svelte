<script>
	import { supabase } from '../supabase.js';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

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
</script>

<slot />
