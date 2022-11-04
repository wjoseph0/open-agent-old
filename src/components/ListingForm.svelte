<script>
	import { addListing, loadListings } from '../stores/listingStore.js';
	import { user } from '../stores/authStore.js';

	export let showListingForm;

	let address = '';
	let city = '';
	let state = '';
	let zip_code = '';

	const handleSubmit = async () => {
		await addListing(address, city, state, zip_code, $user.id);
		await loadListings();
		address = '';
		city = '';
		state = '';
		zip_code = '';
		showListingForm = false;
	};

	const handleClick = () => {
		showListingForm = false;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div id="container">
		<div id="listingForm">
			<button id="cancel" on:click={handleClick}><p>X</p></button>
			<h2>New Listing</h2>
			<input
				type="text"
				name="address"
				bind:value={address}
				placeholder="Enter address"
				required
			/>
			<input
				type="text"
				name="city"
				bind:value={city}
				placeholder="Enter city"
				required
			/>
			<input
				type="text"
				name="state"
				bind:value={state}
				placeholder="Enter state"
				required
			/>
			<input
				type="text"
				name="zip_code"
				bind:value={zip_code}
				placeholder="Enter ZIP code"
				required
			/>
			<button type="submit">Submit</button>
		</div>
	</div>
</form>

<style>
	#container {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#listingForm {
		width: 500px;
		max-width: 100vw;
		height: 500px;
		max-height: 100vh;
		border-radius: 10px;
		background-color: darkslategray;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	button p {
		font-size: x-large;
	}

	#cancel {
		border-radius: 100%;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: lightcyan;
		border: none;
	}

	#cancel:hover {
		background-color: rgb(201, 228, 228);
		scale: 1.2;
	}

	button {
		background-color: lightcyan;
		border: none;
		border-radius: 10px;
		padding: 5px;
	}
</style>
