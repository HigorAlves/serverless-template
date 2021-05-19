import * as hello from '@functions/hello/hello'
import { APIGatewayEvent } from 'aws-lambda'
import { lambdaWrapper } from 'serverless-jest-plugin'

const wrapped = lambdaWrapper.wrap(hello, {
	handler: 'hello'
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
		const result = {
			id: '1',
			name: 'higor alves'
		}
		const response = await wrapped.run(event).then(res => res)
		expect(JSON.parse(response.body)).toEqual(result)
	})
})
