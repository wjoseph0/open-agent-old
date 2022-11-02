<script>
	export let listing;
	import { deleteListing } from '../stores/listingStore.js';
</script>

<li>
	<span>{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</span>

	<button on:click={deleteListing(listing.id)}>Delete</button>
</li>
