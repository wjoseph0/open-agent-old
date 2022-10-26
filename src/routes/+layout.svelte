<div class="grid-container">
	<header>
		<h1 style="margin: 0px;">Open Agent</h1>
		<nav style="margin: 0px;">
			<a href="/"><button>Home</button></a>
			<a href="/about"><button>About</button></a>
			<a href="/settings"><button>Settings</button></a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<a href="https://github.com/wjoseph0/open-agent"
			><img src="/GitHub-logo.png" alt="Link to GitHub repo" /></a
		>
	</footer>
</div>

<style>
	.grid-container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 100vw;
		grid-template-rows: 10vh 80vh 10vh;
	}

	header,
	main,
	footer {
		color: lightcyan;
		background-color: darkslategray;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
