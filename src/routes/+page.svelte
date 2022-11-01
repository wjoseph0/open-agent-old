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
</script>

{#if $page.data.session}
	<h1>Welcome {$page.data.session.user.email}</h1>
	<ListingForm />
	{#each $listings as listing (listing.id)}
		<Listing {listing} />
	{/each}
{:else}
	<h1>I am not logged in</h1>
	<Auth />
{/if}
