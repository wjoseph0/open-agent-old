<script>
	import { supabase } from '../supabase.js';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<p>Sign in via magic link with your email below.</p>

<form on:submit|preventDefault={handleLogin}>
	<input
		type="email"
		name="email"
		bind:value={email}
		placeholder="Your email"
		required
	/>
	<button type="submit" disabled={loading}>Send magic link</button>
</form>

<style>
	input {
		border-radius: 10px;
		height: 100%;
		padding: 3px;
	}

	button {
		border-radius: 20px;
		background-color: lightcyan;
		border: none;
		height: 100%;
		padding: 8px;
	}

	button:hover {
		background-color: rgb(204, 231, 231);
	}
</style>
