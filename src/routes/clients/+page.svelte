<script>
	import Listing from '../../components/Property.svelte';
	import ListingForm from '../../components/PropertyForm.svelte';
	import { listings } from '../../stores/listingStore.js';
	import Auth from '../../components/Auth.svelte';
	import { page } from '$app/stores';
	import { loadListings } from '../../stores/listingStore.js';

	$: if ($page.data.session) {
		loadListings();
	}

	export let showListingForm = false;

	const handleClick = () => {
		showListingForm = true;
	};
</script>

{#if $page.data.session}
	<h2>My Clients</h2>
	<button on:click={handleClick}><p>+</p></button>
	{#if showListingForm === true}
		<ListingForm bind:showListingForm />
	{/if}

	{#each $listings as listing (listing.id)}
		<Listing {listing} />
	{/each}
{:else}
	<Auth />
{/if}

<style>
	button p {
		font-size: x-large;
	}

	button {
		border-radius: 100%;
		width: 50px;
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
