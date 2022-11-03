<script>
	import { supabase } from '../supabase';

	const logout = async () => {
		await supabase.auth.signOut();
	};
</script>

<button on:click={logout}>Logout</button>

<style>
	button {
		border-radius: 10%;
		background-color: lightcyan;
		border: none;
		padding: 6px;
	}

	button:hover {
		background-color: rgb(204, 231, 231);
	}
</style>
