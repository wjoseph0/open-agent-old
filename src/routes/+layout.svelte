<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Button from '../components/Button.svelte';
</script>

<div class="grid-container">
	{#if $page.data.session}
		<header id="withUser">
			<div>
				<a href="/"><h1>Open Agent</h1></a>
			</div>
			<div>
				<p>{$page.data.session.user?.name ?? 'User'}</p>
				<Button
					text="Logout"
					width="60px"
					height="30px"
					clickEvent={() => signOut()}
				/>
			</div>
		</header>
	{:else}
		<header id="noUser">
			<div>
				<h1>Open Agent</h1>
			</div>
		</header>
	{/if}

	<main>
		{#if $page.data.session}
			<slot />
		{:else}
			<Button text="Sign In with GitHub" clickEvent={() => signIn('github')} />
		{/if}
	</main>

	<footer>
		<a href="https://github.com/wjoseph0/open-agent">
			<img src="../../GitHub-logo.png" alt="Link to GitHub repo" />
		</a>
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

	a {
		text-decoration: none;
		color: lightcyan;
	}

	header {
		font-family: Arial, Helvetica, sans-serif;
		color: lightcyan;
		background-color: darkslategray;
		display: grid;
		grid-template-rows: auto;
	}

	header#withUser {
		grid-template-columns: 50vw 50vw;
	}

	header#noUser {
		grid-template-columns: 100vw;
	}

	header div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	header p {
		font-size: small;
		margin-right: 3px;
		font-style: italic;
	}

	main,
	footer {
		font-family: Arial, Helvetica, sans-serif;
		color: lightcyan;
		background-color: darkslategray;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
