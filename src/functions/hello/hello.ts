import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import jsonBodyParser from '@middy/http-json-body-parser'
import {
	APIGatewayEventDefaultAuthorizerContext,
	APIGatewayProxyEventBase
} from 'aws-lambda'
import { autoProxyResponse } from 'middy-autoproxyresponse'

import { createInstance as TestFactory } from '../../core/factories/testFactory'

type IEvent = APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>

class Handler {
	async main(event: IEvent): Promise<IResponse> {
		try {
			const { id } = event.pathParameters
			const testFac = await TestFactory()

			await testFac.create({
				id,
				name: 'Higor Alves'
			})

			const result = await testFac.findOne(parseInt(id))

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

const baseHandler = new Handler()
export const handler = middy(baseHandler.main.bind(baseHandler))
	.use(jsonBodyParser())
	.use(autoProxyResponse())
	.use(httpErrorHandler())
