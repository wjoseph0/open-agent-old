<script lang="ts">
	import { locationStore } from '../../../../src/stores';

	let urlPath: string;

	$: if ($locationStore == '') {
		urlPath = './new';
	} else {
		urlPath = './listing';
	}
</script>

<h2>Where is your house located?</h2>
<h3>{$locationStore}</h3>

<form>
	<input bind:value={$locationStore} type="text" required />
	<p>example: Milwaukee, WI</p>

	<a href={urlPath}><button type="submit">Save</button></a>
</form>

<style>
	p {
		font-style: italic;
		font-size: small;
	}

	button {
		width: 60px;
		height: 30px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
