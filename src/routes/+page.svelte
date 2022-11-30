<script>
	import Auth from '../components/Auth.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<p>I want to...</p>
	<button>Buy</button>
	<button>Sell</button>
	<p>...a home.</p>
{:else}
	<Auth />
{/if}

<style>
	button {
		margin: 5px;
		border-radius: 15px;
		width: 100px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: lightcyan;
		border: none;
	}

	button:hover {
		background-color: rgb(203, 231, 231);
	}

	button:active {
		transform: scale(0.9);
	}
</style>
