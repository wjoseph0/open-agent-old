<script>
	export let listing;
	import { deleteListing } from '../stores/listingStore.js';
	import { fade } from 'svelte/transition';
</script>

<div id="container" transition:fade>
	<div>{listing.address}</div>
	<div>{listing.city}, {listing.state}, {listing.zip_code}</div>
	<div><button on:click={deleteListing(listing.id)}>Delete</button></div>
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: lightcyan;
		margin: 20px 0px 20px 0px;
		border-radius: 10%;
		padding: 10px;
	}

	#container div {
		color: darkslategray;
		margin: 5px;
	}

	button {
		border-radius: 10%;
		background-color: darkslategray;
		color: lightcyan;
		border: none;
		padding: 6px;
	}

	button:hover {
		background-color: rgb(56, 94, 94);
	}
</style>
