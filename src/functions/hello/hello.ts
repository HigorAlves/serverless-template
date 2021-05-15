import {
	APIGatewayEventDefaultAuthorizerContext,
	APIGatewayProxyEventBase,
	APIGatewayProxyHandler
} from 'aws-lambda'

import { createInstance as TestFactory } from '../../core/factories/testFactory'
import { DynamoDB } from '../../core/utils/dynamoDB'

type IEvent = APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>

DynamoDB()

class Handler {
	async main(event: IEvent): Promise<IResponse> {
		console.log(event)
		const testFac = await TestFactory()

		await testFac.create({
			id: '123123',
			name: 'higor alves'
		})

		const result = await testFac.findOne(123123)

		return {
			statusCode: 200,
			body: JSON.stringify(result)
		}
	}
}

const handler = new Handler()
export const hello: APIGatewayProxyHandler = handler.main.bind(handler)
