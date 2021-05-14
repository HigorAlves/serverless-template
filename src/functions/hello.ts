export function hello(): IResponse {
	console.log(process.env)

	return {
		statusCode: 200,
		body: 'Its all right'
	}
}
