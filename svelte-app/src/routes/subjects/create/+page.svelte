<script lang="ts">
	/** @type {import('./$types').ActionData} */
	export let form
</script>

<h1>Create Subject</h1>
<h2>Subjects</h2>
<form method="POST">
	<h3>Create a new subject</h3>
	<div>
		<label>name:<input name="name" type="text" value={form?.data?.name ?? ''} /></label>
		{#each form?.errors?.name ?? [] as message}
			<p class="error">{message}</p>{/each}
	</div>
	<button type="submit">Create</button>
</form>
