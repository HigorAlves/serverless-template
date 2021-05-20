import * as handler from '@functions/hello/hello'
import { APIGatewayEvent } from 'aws-lambda'
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
			pathParameters: undefined,
			requestContext: undefined,
			resource: '',
			stageVariables: undefined,
			body: 'This is a hello message',
			headers: null,
			queryStringParameters: null
		}
		const result = [
			{
				createdAt: '2021-05-19T21:15:38.952Z',
				id: '1',
				name: 'higor alves',
				updatedAt: '2021-05-19T21:15:38.952Z'
			}
		]

		const response = await wrapped.run(event).then(res => res)
		expect(JSON.parse(response.body)).toMatchObject(result)
	})
})
