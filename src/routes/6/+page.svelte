<script>
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';

	let code1 = `src/routes/my-third-page/+page.svelte
	
<form id="default" action="/api/form/default" method="post">
<h2>DEFAULT FORM : data is posted to "/api/form/default" Server Endpoint</h2>
	<label for="form_default_name">Name</label>
		<input
			id="form_default_name"
			name="message_name"
			type="text"
			placeholder="Name Value"
			value="John"
		/>
	<button>Submit</button>
</form>`;
	let focusBlocks1 = [
		{ lines: '', text: 'remove blur' },
		{ lines: '0', text: '1. create a new file +page.svelte in src/routes/my-third-page/' },
		{ lines: '2', text: '2. create a form element' },
		{ lines: '3', text: '3. add some info to the form' },
		{ lines: '4', text: '4. add a label for the form input element' },
		{ lines: '5-11', text: '5. add an input element to the form' },
		{ lines: '12', text: '6. add a submit button to the form' },
		{ lines: '13', text: '7. close the form element' }
	];

	let code2 = `src/routes/api/form/default/+server.js
// POST Response
export const POST = async (event) => {
	console.log(event);

	// Form Data from DEFAULT Form
	const formData = await event.request.formData();
	console.log('formData : ', formData);

	const message_name = formData.get('message_name');
	console.log('message_name : ', message_name);

	const message_nameJSONString = JSON.stringify({ time: Date.now(), message_name: message_name.toUpperCase() });
	console.log('message_nameJSONString : ', message_nameJSONString);

	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return new Response(message_nameJSONString, options);
};
`;
	let focusBlocks2 = [
		{ lines: '', text: 'remove blur' },
		{ lines: '0', text: '1. create a new file +server.js in src/routes/api/default' },
		{ lines: '2', text: '2. export a POST function that corresponds to the HTTP verb POST' },
		{ lines: '3', text: '3. look at the event in the terminal - later ;)' },
		{ lines: '6-7', text: '4. obtain the formData object from the request event' },
		{ lines: '9-10', text: '5. obtain the message_name from the formData object' },
		{
			lines: '12-14',
			text: '6. define a stringified object as data for the response'
		},
		{ lines: '15-21', text: '7. define the options object for the response' },
		{ lines: '17', text: '8. define the status code in the options object' },
		{ lines: '18-20', text: '9. define the headers in the options object' },
		{ lines: '22', text: '10. return the response with the options' }
	];
</script>

<div class="min-h-screen">
	<h1>POST data to an API route / Server Endpoint with SvelteKit</h1>
	<h2>
		Remember, your +server.js file exports functions corresponding to HTTP verbs like GET, POST,
		PATCH, PUT and DELETE.. We have just seen this to GET data from a Server Endpoint.
	</h2>
	<h2>Now we are going to use a form element and POST data to the Server Endoint.</h2>
</div>

<div class="min-h-screen">
	<h1>1. Create a +page.svelte file in src/routes/my-third-page with a form element</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
		>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form</a
	>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes_for_form_submission"
		>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes_for_form_submission</a
	>
	<p>
		The form attribute <strong>action</strong> is the URL that processes the form submission. In
		this case the URL is /api/form/default.
	</p>
	<p class="mb-8">
		The form attribute <strong>method</strong> is the HTTP method to submit the form with. In
		this case it is <strong>post</strong> since we want to <strong>post</strong> the form data to
		the Server Endpoint /api/form/default.
	</p>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
		>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input</a
	>
	<CodeBlock
		language="svelte"
		code="{code1}"
		focusBlocks="{focusBlocks1}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/5 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
</div>

<div class="min-h-screen">
	<h1>2. Create a +server.js file in src/routes/api/form/default</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Request/formData"
		>https://developer.mozilla.org/en-US/docs/Web/API/Request/formData</a
	>
	<CodeBlock
		language="javascript"
		code="{code2}"
		focusBlocks="{focusBlocks2}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/5 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4 mb-4"
		><a class="block" href="/my-third-page">/my-third-page</a></button
	>
</div>
