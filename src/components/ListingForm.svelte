<script>
	import { addListing } from '../stores/listingStore.js';
	import { user } from '../stores/authStore.js';

	let address = '';
	let city = '';
	let state = '';
	let zip_code = '';

	const handleSubmit = () => {
		addListing(address, city, state, zip_code, $user.id);
		address = '';
		city = '';
		state = '';
		zip_code = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h2>New Listing</h2>
	<input type="text" name="address" bind:value={address} placeholder="Enter address" />
	<input type="text" name="city" bind:value={city} placeholder="Enter city" />
	<input type="text" name="state" bind:value={state} placeholder="Enter state" />
	<input type="text" name="zip_code" bind:value={zip_code} placeholder="Enter ZIP code" />
	<button type="submit">Submit</button>
</form>
