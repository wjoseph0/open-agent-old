<script>
	const handleSubmit = () => {
		//submit stuff
	};
</script>

<h1>What's the Address of your Home?</h1>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="Enter address" />
	<button type="submit">Submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		row-gap: 20px;
	}
</style>
