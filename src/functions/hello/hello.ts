import { APIGatewayProxyHandler } from 'aws-lambda'

import { createInstance as TestFactory } from '../../core/factories/testFactory'

// type IEvent = APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>

class Handler {
	async main(): Promise<IResponse> {
		try {
			const testFac = await TestFactory()

			await testFac.create({
				id: '1',
				name: 'higor alves'
			})

			const result = await testFac.findOne(1)
			return {
				statusCode: 200,
				body: JSON.stringify(result)
			}
		} catch (e) {
			console.log(e, 'error')
			return e
		}
	}
}

const handler = new Handler()
export const hello: APIGatewayProxyHandler = handler.main.bind(handler)
