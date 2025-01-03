<script lang="ts">
	import { supabase } from '../../lib/supabase/client';
	let email: string = '';
	let password: string = '';

	const signUp = async (): Promise<void> => {
		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error.message);
		} else {
			alert('Signup successful! Please check your email for confirmation.');
		}
	};
</script>

<form on:submit|preventDefault={signUp}>
	<input type="email" bind:value={email} placeholder="Email" required />
	<input type="password" bind:value={password} placeholder="Password" required />
	<button type="submit">Sign Up</button>
</form>
