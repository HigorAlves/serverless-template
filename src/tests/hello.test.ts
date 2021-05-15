import * as hello from '@functions/hello/hello'
import { APIGatewayEvent } from 'aws-lambda'
import { lambdaWrapper } from 'serverless-jest-plugin'

const wrapped = lambdaWrapper.wrap(hello, {
	handler: 'hello'
})

describe('hello', () => {
	beforeAll(done => {
		//  lambdaWrapper.init(liveFunction); // Run the deployed lambda

		done()
	})

	it('implement tests here', () => {
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
		const response = wrapped.run(event).then(res => res)
		expect(response).toBeDefined()
	})
})