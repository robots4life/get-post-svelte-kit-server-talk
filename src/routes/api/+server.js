// GET Response
export const GET = async () => {
	//
	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	const GETResponse = 'GET Response - Hello from +server.js in src/routes/api';

	const GETResponseJSONString = JSON.stringify({
		time: Date.now(),
		data: GETResponse
	});

	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return new Response(GETResponseJSONString, options);
};
