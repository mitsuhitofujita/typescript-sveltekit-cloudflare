<script lang="ts">
	import { invalidate } from '$app/navigation'
	import type { EventHandler } from 'svelte/elements'

	import type { PageData } from './$types'

	let { data } = $props()
	let { user, subjects } = $derived(data)

</script>

<h1>User: {user?.email}</h1>
<h2>Subjects</h2>
<ul>
	{#each subjects || [] as subject}
		<li><span>{subject.id}</span>{subject.name}</li>
	{/each}
</ul>
