import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async event => {
	console.log(event.body)

	return {
		statusCode: 200,
		body: 'Its all OK'
	}
}
