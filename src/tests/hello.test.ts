import { APIGatewayEvent } from 'aws-lambda'
import * as handler from 'functions/hello/hello'
import { lambdaWrapper } from 'serverless-jest-plugin'

const wrapped = lambdaWrapper.wrap(handler, {
	handler: 'handler'
})

describe('It should test the Hello functions', () => {
	beforeAll(done => {
		done()
	})

	it('implement tests here', async () => {
		const event: APIGatewayEvent = {
			httpMethod: '',
			isBase64Encoded: false,
			multiValueHeaders: undefined,
			multiValueQueryStringParameters: undefined,
			path: '',
			// @ts-ignore
			pathParameters: { id: 10 },
			requestContext: undefined,
			resource: '',
			stageVariables: undefined,
			body: 'This is a hello message',
			headers: null,
			queryStringParameters: null
		}
		const result = [
			{
				createdAt: new Date(),
				id: '1',
				name: 'higor alves',
				updatedAt: new Date()
			}
		]

		const { body } = (await wrapped.run(event).then(res => res)) as IResponse
		const response = JSON.parse(body) as ITestSchema
		expect(response).toBeInstanceOf(result)
	})
})
