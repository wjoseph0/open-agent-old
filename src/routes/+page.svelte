<script>
	import Listing from '../components/Listing.svelte';
	import ListingForm from '../components/ListingForm.svelte';
	import { listings } from '../stores/listingStore.js';
	import Auth from '../components/Auth.svelte';
	import { page } from '$app/stores';
	import { loadListings } from '../stores/listingStore.js';

	$: if ($page.data.session) {
		loadListings();
	}

	export let showListingForm = false;

	const handleClick = () => {
		showListingForm = true;
	};
</script>

{#if $page.data.session}
	<button on:click={handleClick}>New Listing</button>
	{#if showListingForm === true}
		<ListingForm bind:showListingForm />
	{/if}

	{#each $listings as listing (listing.id)}
		<Listing {listing} />
	{/each}
{:else}
	<Auth />
{/if}
