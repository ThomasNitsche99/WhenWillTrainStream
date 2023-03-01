import type { PageServerLoad } from './$types';
import { SECRET, API_CLIENT_ID } from '$env/static/private';
import type { Clips, Stream, Twitch, User } from '$lib/types';

export const load: PageServerLoad = async ({ fetch }) => {
	//Fetch the token from twitch
	const tokenResponse = await fetch(`https://id.twitch.tv/oauth2/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `client_id=${API_CLIENT_ID}&client_secret=${SECRET}&grant_type=client_credentials`
	});

	const tokenResult = (await tokenResponse.json()) as unknown as Twitch;

	//Use token to fetch user info
	const trainResponse = await fetch(
		`https://api.twitch.tv/helix/search/channels?query=Trainwreckstv&first=1`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${tokenResult.access_token}`,
				'Client-ID': API_CLIENT_ID
			}
		}
	);

	const trainResult = (await trainResponse.json()) as unknown as User;

	//Save name of train in variable
	const name = trainResult.data[0].broadcaster_login;
	const id = trainResult.data[0].id;

	//if train is live, fetch stream info, if not dont fetch
	const streamResponse = await fetch(`https://api.twitch.tv/helix/streams?user_login=mira`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${tokenResult.access_token}`,
			'Client-ID': API_CLIENT_ID
		}
	});
	const streamResult = (await streamResponse.json()) as unknown as Stream;

	console.log(trainResult)
	console.log(streamResult);


	//clips, fetches the first 5
	// const clips_response = await fetch(
	// 	`https://api.twitch.tv/helix/clips?broadcaster_id=${id}&first=3`,
	// 	{
	// 		method: 'GET',
	// 		headers: {
	// 			Authorization: `Bearer ${token_result.access_token}`,
	// 			'Client-ID': API_CLIENT_ID
	// 		}
	// 	}
	// );

	// const clips_result = (await clips_response.json()) as unknown as Clips;

	return { trainResult, streamResult };
};

