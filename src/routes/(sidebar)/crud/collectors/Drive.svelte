<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from 'dotenv';
	config();

	const CLIENT_ID = process.env.DRIVE_CLIENT_ID;
	const REDIRECT_URI = process.env.DRIVE_REDIRECT_URL;
	const AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/drive`;

	function login() {
		window.location.href = AUTH_URL;
	}

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		if (code) {
			try {
				const response = await fetch(`/crud/collectors?code=${code}`);
				const data = await response.json();
				console.log('Access Token:', data.access_token);
				console.log('Refresh Token:', data.refresh_token);
			} catch (error) {
				console.error('Error:', error);
			}
		}
	});
</script>

<button on:click={login}>Login with Google</button>
