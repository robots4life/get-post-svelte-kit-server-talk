// GET
export const GET = async () => {
	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	const GETResponse = 'GET_Data_Response';
	console.log('GETResponse : ', GETResponse);

	const GETResponseJSONString = JSON.stringify({ time: Date.now(), body: GETResponse });
	console.log('GETResponseJSONString : ', GETResponseJSONString);

	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return new Response(GETResponseJSONString, options);
};
