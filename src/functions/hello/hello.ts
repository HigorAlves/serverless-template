import {
	APIGatewayEventDefaultAuthorizerContext,
	APIGatewayProxyEventBase,
	APIGatewayProxyHandler
} from 'aws-lambda'

type IEvent = APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>

class Handler {
	async main(event: IEvent): Promise<IResponse> {
		console.log(event.body)

		return {
			statusCode: 200,
			body: 'Its all OK'
		}
	}
}

const handler = new Handler()
export const hello: APIGatewayProxyHandler = handler.main.bind(handler)
