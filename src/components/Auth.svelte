<script>
	import { supabase } from '../supabase.js';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email: `${email}` });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<h1>Log In</h1>
<p>Sign in via magic link with your email below.</p>

<form on:submit|preventDefault={handleLogin}>
	<input type="email" name="email" bind:value={email} placeholder="Your email" />
	<button type="submit" disabled={loading}>Log In</button>
</form>
