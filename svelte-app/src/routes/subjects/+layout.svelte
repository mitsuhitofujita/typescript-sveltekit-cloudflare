<script>
	let { children } = $props()
</script>

<header>
	<nav>
		<a href="/">Home</a>
	</nav>
</header>
<main>
	{@render children()}
</main>
