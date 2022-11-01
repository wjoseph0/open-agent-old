<script>
	import { supabase } from '../supabase';

	const logout = async () => {
		await supabase.auth.signOut();
	};
</script>

<button on:click={logout}>Logout</button>
