<script lang="ts">
	import { supabase } from '../../lib/supabase/client';
	let email: string = '';
	let password: string = '';

	const signIn = async (): Promise<void> => {
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			console.error(error.message);
		} else {
			alert('Signin successful!');
		}
	};
</script>

<form on:submit|preventDefault={signIn}>
	<input type="email" bind:value={email} placeholder="Email" required />
	<input type="password" bind:value={password} placeholder="Password" required />
	<button type="submit">Sign In</button>
</form>
