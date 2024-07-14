<script lang="ts">
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	// import { writable } from 'svelte/store';

	export let configuration: { 'Drive ID': string; Credentials: string }; // Define the configuration prop type

	const CLIENT_ID = "Client id";
	const REDIRECT_URI = "redirect URI";
	const AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/drive`;

	function login() {
		window.location.href = AUTH_URL;
	}

    onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		if (code) {
			try {
				const response = await fetch(`/crud/sources?code=${code}`);
				const data = await response.json();
				console.log('Access Token:', data.access_token);
				console.log('Refresh Token:', data.refresh_token);
			} catch (error) {
				console.error('Error:', error);
			}
		}
   });

   console.log("Login with Google");
</script>

<button on:click={login}>Login with Google</button>
