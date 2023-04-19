import { SECRET_API_KEY } from '$env/static/private';

export async function load() {
	console.log(SECRET_API_KEY);

	return {
		greeting: 'hello from src/routes/my-second-page/+page.server.js',
		neverDoThis: 'never supply secret environment variables to the page :)',
		secretAPIKey: SECRET_API_KEY
	};
}
