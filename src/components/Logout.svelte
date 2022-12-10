<script>
	import { supabase } from '../supabase';
	import Button from './Button.svelte';

	const logout = async () => {
		await supabase.auth.signOut();
	};
</script>

<Button text="Logout" width="60px" height="30px" clickEvent={logout} />
