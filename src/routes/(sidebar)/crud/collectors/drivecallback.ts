import type { RequestHandler } from '@sveltejs/kit';
import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

interface TokenResponse {
	access_token: string;
	refresh_token: string;
	error?: string;
}

export const GET: RequestHandler = async ({ url }) => {
	const clientId = '4402204563-bmfpspke6cl23j2975hd7dkuf2v4ii3n.apps.googleusercontent.com';
	const clientSecret = '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';
	const redirectUri = 'http://localhost:5173/crud/collectors';
	const code = url.searchParams.get('code');

	if (!code) {
		return new Response(JSON.stringify({ error: 'Authorization code not found' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const tokenEndpoint = 'https://oauth2.googleapis.com/token';
	const data = new URLSearchParams({
		code: code,
		client_id: clientId,
		client_secret: clientSecret,
		redirect_uri: redirectUri,
		grant_type: 'authorization_code'
	});

	try {
		const response = await fetch(tokenEndpoint, {
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		const tokens = (await response.json()) as TokenResponse;
		console.log('Tokens:', tokens);

		if (!response.ok) {
			return new Response(JSON.stringify({ error: tokens.error || 'Failed to fetch tokens' }), {
				status: response.status,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const accessToken = tokens.access_token;
		const refreshToken = tokens.refresh_token;
		console.log('Access Token:', accessToken);
		console.log('Refresh Token:', refreshToken);

		return new Response(
			JSON.stringify({ access_token: accessToken, refresh_token: refreshToken }),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (error) {
		console.error('Error fetching tokens:', error);
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
