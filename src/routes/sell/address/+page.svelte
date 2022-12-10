<script>
	import Button from '../../../components/Button.svelte';

	const handleSubmit = () => {
		//submit stuff
	};
</script>

<h2>What's the Address of your Home?</h2>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="line_1">Address Line 1</label>
		<input name="line_1" type="text" required />
	</div>

	<div>
		<label for="line_2">Address Line 2</label>
		<input
			name="line_2"
			type="text"
			placeholder="Apartment,Unit Number,Etc"
			required
		/>
	</div>

	<div>
		<label for="city">City</label>
		<input name="city" type="text" required />
	</div>

	<div>
		<label for="state">State</label>
		<input name="state" type="text" required />
	</div>

	<div>
		<label for="zip_code">Zip Code</label>
		<input name="zip_code" type="text" required />
	</div>

	<Button text="Next" type="submit" width="100%" height="30px" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		row-gap: 20px;
		min-width: 70%;
		max-width: 100%;
	}

	input {
		width: 100%;
		height: 30px;
		border-radius: 10px;
		border: none;
	}

	div {
		width: 100%;
	}
</style>
