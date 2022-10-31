<script>
	import Listing from '../components/Listing.svelte';
	import ListingForm from '../components/ListingForm.svelte';
	import { listings } from '../stores/listingStore.js';
</script>

<ListingForm />
{#each $listings as listing (listing.id)}
	<Listing {listing} />
{/each}
