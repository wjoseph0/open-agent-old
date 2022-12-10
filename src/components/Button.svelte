<script>
	export let text = 'Default Text';
	export let width = '100px';
	export let height = '50px';
	export let type = 'button';
	export let clickEvent = '';
</script>

<button style="width:{width}; height:{height}" {type} on:click={clickEvent}>
	{text}
</button>

<style>
	button {
		margin: 5px;
		border-radius: 15px;
		width: 100px;
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
