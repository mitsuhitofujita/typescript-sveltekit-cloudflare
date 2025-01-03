<script lang="ts">
	import { supabase } from '../../lib/supabase/client';

	const signOut = async (): Promise<void> => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error.message);
		} else {
			alert('Signout successful!');
		}
	};
</script>

<form on:submit|preventDefault={signOut}>
	<button type="submit">Sign Out</button>
</form>
